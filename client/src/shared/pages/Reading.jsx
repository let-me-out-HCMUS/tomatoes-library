// import { TextField } from "@mui/material";
import { useState, useEffect, useLayoutEffect } from "react";
import { jsPDF } from "jspdf";
import { getChapter, getStory } from "../../api/story";
import { addChapToLocalStorage } from "../../utils/localStorage";
import { useParams, useNavigate, Link } from "react-router-dom";
import openSansFont from "../../assets/fonts/OpenSans-Regular.ttf";
import CustomDialog from "../../features/ReadingPage/components/Dialog";
import ChangeStyle from "../../features/ReadingPage/components/ChangeStyle";
import Content from "../../features/ReadingPage/components/Content";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import {
  AiFillCaretUp,
  AiOutlineRight,
  AiOutlineLeft,
  AiOutlineVerticalAlignBottom,
  AiFillHome,
  AiFillEdit,
} from "react-icons/ai";

export default function ReadingPage() {
  const { slug, chapter } = useParams();
  const navigate = useNavigate();

  // let listChap = JSON.parse(localStorage.getItem(slug)) || [];
  // if (!listChap.includes(chapter))
  // {
  //   listChap.push(chapter);
  //   listChap.sort((a, b) => a - b);
  //   localStorage.setItem(`${slug}`, JSON.stringify(listChap));
  // }

  const [isLoading, setIsLoading] = useState(true);

  // console.log(slug, chapter);

  // handle style text
  const [color, setColor] = useState(localStorage.getItem("color") || "  ");
  const [bgColor, setBgColor] = useState(
    localStorage.getItem("bgColor") || "  "
  );
  const [fontSize, setFontSize] = useState(
    localStorage.getItem("fontSize") || 16
  );
  const [fontFamily, setFontFamily] = useState(
    localStorage.getItem("fontFamily") || " font-sans "
  );
  const [leading, setLeading] = useState(
    localStorage.getItem("leading") || " leading-[200%] "
  );
  const [textAlign, setTextAlign] = useState(
    localStorage.getItem("textAlign") || " text-left "
  );
  const [open, setOpen] = useState(false);
  //

  // feat export to pdf
  const exportToPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    // Set the active font
    const storyContent = document.getElementById("story-content").innerText;
    console.log(storyContent);

    doc.addFont(openSansFont, "OpenSans", "normal");
    doc.setFont("OpenSans");
    doc.setFontSize(12);
    const lines = doc.splitTextToSize(storyContent, 180); // Adjust the second argument as needed

    let y = 10; // start y position

    const pageHeight =
      doc.internal.pageSize.height || doc.internal.pageSize.getHeight();

    for (let i = 0; i < lines.length; i++) {
      if (y > pageHeight - 10) {
        // Go to next page if the line won't fit
        doc.addPage();
        y = 10; // reset y position to top of new page
      }
      doc.text(lines[i], 10, y);
      y += 10; // move y down for next line
    }

    doc.save("Story.pdf");
  };

  // store current scroll position
  useEffect(() => {
    const updatePos = () => {
      localStorage.setItem(`${slug}-${chapter}`, window.scrollY);
    };

    addChapToLocalStorage(slug, chapter);
    // Run handleScroll every 10sec
    const intervalId = setInterval(updatePos, 10000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [slug, chapter]);

  // fetch data
  const [chapterContent, setChapterContent] = useState("");
  const [story, setStory] = useState({});
  const [server, setServer] = useState(1);

  useLayoutEffect(() => {
    async function fetchData() {
      try {
        let resChap = await getChapter(slug, chapter, server);
        let resStory = await getStory(slug);

        Promise.all([resChap, resStory]).then((values) => {
          setChapterContent(values[0]?.data);
          setStory(values[1]?.data);
          setIsLoading(false);
          const scrollY = localStorage.getItem(`${slug}-${chapter}`);
          window.scrollTo(0, scrollY);
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const fetchChapter = async (chapter, server) => {
    setIsLoading(true);
    async function fetchData() {
      try {
        let res = await getChapter(slug, chapter, story?.source[server - 1]);
        setChapterContent(res.data);
        setServer(server);

        window.scrollTo(0, 0);
        localStorage.removeItem(`${slug}-${chapter - 1}`);

        navigate(`/story/${slug}/${chapter}`);
      } catch (error) {
        console.error(error);
      }
    }
    await fetchData();
    setIsLoading(false);
  };

  return (
    <div className=" relative h-full">
      {/* Loading Component */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* Title - heading */}
      <div className={` pt-8 flex-col flex items-center ` + bgColor + color}>
        <Link
          className=" font-bold text-2xl mt-8 mb-2 px-10 text-center"
          to={`/story/${slug}`}>
          {story?.name}
        </Link>
        <h3 className=" mb-4">
          Total words: {chapterContent?.split(" ").length}
        </h3>
        {/* server */}
        <select
          className=" mb-2 text-black border-solid border-2"
          name=""
          id=""
          value={server}
          onChange={(e) => fetchChapter(chapter, e.target.value)}>
          {story?.source?.map((item, idx) => (
            <option key={item} value={idx}>
              Server {idx + 1}
            </option>
          ))}
        </select>
        {/* list chap */}
        <select
          name=""
          id=""
          className=" text-black border-solid border-2"
          value={chapter}
          // onChange={(e) => setChapter(e.target.value)}
          onChange={(e) => {
            fetchChapter(e.target.value, server);
            window.scrollTo(0, 0);
          }}>
          {Array.from({ length: story?.totalChapter }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              Chapter {i + 1}
            </option>
          )).reverse()}
        </select>
      </div>

      {/* Content */}
      <Content
        content={chapterContent}
        fontSize={fontSize}
        color={color}
        leading={leading}
        bgColor={bgColor}
        fontFamily={fontFamily}
        textAlign={textAlign}
      />

      {/* Button */}
      <div className=" flex flex-col fixed right-4 bottom-12 rounded-full border-solid border-zinc-800 border-2 border-opacity-20 p-2 text-2xl bg-white">
        <button
          className=" border-b-2 border-solid border-black border-opacity-20 py-2 self-center"
          onClick={() => window.scrollTo(0, 0)}>
          <AiFillCaretUp />
        </button>
        {chapter > 1 ? (
          <button
            className=" border-b-2 border-solid border-black border-opacity-20 py-2"
            onClick={() => fetchChapter(parseInt(chapter) - 1)}>
            <AiOutlineLeft />
          </button>
        ) : (
          <button className=" text-gray-200 border-b-2 border-solid border-black border-opacity-20 py-2 cursor-not-allowed">
            <AiOutlineLeft />
          </button>
        )}
        <button
          className=" border-b-2 border-solid border-black border-opacity-20 py-2 self-center"
          onClick={() => navigate(`/story/${slug}`)}>
          <AiFillHome />
        </button>
        <button
          className=" border-b-2 border-solid border-black border-opacity-20 py-2 self-center"
          onClick={() => setOpen(true)}>
          <AiFillEdit />
        </button>

        {chapter < story?.totalChapter ? (
          <button
            className=" border-b-2 border-solid border-black border-opacity-20 py-2 self-center"
            onClick={() => fetchChapter(parseInt(chapter) + 1)}>
            <AiOutlineRight />
          </button>
        ) : (
          <button className=" text-gray-200 border-b-2 border-solid border-black border-opacity-20 py-2 cursor-not-allowed self-center">
            <AiOutlineRight />
          </button>
        )}
        {/* download btn */}
        <button className=" py-2 self-center" onClick={exportToPDF}>
          <AiOutlineVerticalAlignBottom />
        </button>
      </div>

      <CustomDialog
        open={open}
        title="Tuỳ chỉnh"
        onClose={() => setOpen(false)}>
        <ChangeStyle
          fontSize={fontSize}
          setColor={setColor}
          setBgColor={setBgColor}
          setFontFamily={setFontFamily}
          setFontSize={setFontSize}
          setLeading={setLeading}
          setTextAlign={setTextAlign}
        />
      </CustomDialog>
    </div>
  );
}