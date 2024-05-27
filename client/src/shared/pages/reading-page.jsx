// import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import { getChapter, getStory } from "../../api/story";
import { useParams, useNavigate } from "react-router-dom";

import CustomDialog from "../../features/ReadingPage/components/Dialog";
import ChangeStyle from "../../features/ReadingPage/components/ChangeStyle";
import Content from "../../features/ReadingPage/components/Content";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function ReadingPage() {
  const { slug, chapter } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // console.log(slug, chapter);

  // handle style text
  const [color, setColor] = useState(
    localStorage.getItem("color") || " text-blue-500 "
  );
  const [bgColor, setBgColor] = useState(
    localStorage.getItem("bgColor") || " bg-yellow-100 "
  );
  const [fontSize, setFontSize] = useState(
    localStorage.getItem("fontSize") || 16
  );
  const [fontFamily, setFontFamily] = useState(
    localStorage.getItem("fontFamily") || " font-sans "
  );
  const [leading, setLeading] = useState(localStorage.getItem("leading") || "");
  const [textAlign, setTextAlign] = useState(
    localStorage.getItem("textAlign") || " text-left "
  );
  const [open, setOpen] = useState(false);
  //

  // feat export to pdf
  const exportToPDF = () => {
    const doc = new jsPDF();
    const storyContent = document.getElementById("story-content").textContent;

    // console.log(storyContent);

    doc.setFont("helvetica"); // set font
    doc.setFontSize(12); // set font size
    const lines = doc.splitTextToSize(storyContent, 180);
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
    const handleScroll = () => {
      // console.log(window.scrollY);
      localStorage.setItem(`${slug}-${chapter}`, window.scrollY);
    };

    // Run handleScroll every 30sec
    const intervalId = setInterval(handleScroll, 10000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [slug, chapter]);

  // fetch data
  const [chapterContent, setChapterContent] = useState("");
  const [story, setStory] = useState({});
  const [server, setServer] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        let resChap = await getChapter(slug, chapter);
        let resStory = await getStory(slug);
        // setChapterContent(resChap.data);
        // setStory(resStory.data);
        Promise.all([resChap, resStory]).then((values) => {
          setChapterContent(values[0]?.data);
          setStory(values[1]?.data);
          setIsLoading(false);
          const scrollY = localStorage.getItem(`${slug}-${chapter}`);
          window.scrollTo(0, scrollY);
        });
        // console.log(resChap, resStory)
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
        navigate(`/stories/${slug}/${chapter}`);
      } catch (error) {
        console.error(error);
      }
    }
    await fetchData();
    setIsLoading(false);
  };

  return (
    <div className=" relative h-full">
      <div className={` pt-8 flex-col flex items-center ` + bgColor + color}>
        <h1 className=" font-bold text-2xl mt-8 mb-2 px-10 text-center">
          {story?.name}
        </h1>
        <h2 className=" text-xl">Chap: {chapter}</h2>
        <h3 className=" mb-4">
          Độ dài: {chapterContent?.split(" ").length} từ
        </h3>
        <select
          className=" mb-2 text-black border-solid border-2"
          name=""
          id=""
          value={server}
          onChange={(e) => fetchChapter(chapter, e.target.value)}>
          {/* {data.server.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))} */}
          {story?.source?.map((item, idx) => (
            <option key={item} value={idx}>
              Server {idx + 1}
            </option>
          ))}
        </select>
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

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Content
        content={chapterContent}
        fontSize={fontSize}
        color={color}
        leading={leading}
        bgColor={bgColor}
        fontFamily={fontFamily}
        textAlign={textAlign}
      />

      <div className=" flex flex-col fixed right-4 bottom-12 rounded-full border-solid border-zinc-800 border-2 p-2 text-2xl bg-white">
        <button
          className=" border-b-2 border-solid border-black py-2"
          onClick={() => window.scrollTo(0, 0)}>
          ▲
        </button>
        {chapter > 1 ? (
          <button
            className=" border-b-2 border-solid border-black py-2"
            onClick={() => fetchChapter(parseInt(chapter) - 1)}>
            ≪
          </button>
        ) : (
          <button className=" text-gray-200 border-b-2 border-solid border-black py-2 cursor-not-allowed">
            ≪
          </button>
        )}
        <button className=" border-b-2 border-solid border-black py-2">
          🏠
        </button>
        <button
          className=" border-b-2 border-solid border-black py-2"
          onClick={() => setOpen(true)}>
          🖌
        </button>

        {chapter < story?.totalChapter ? (
          <button
            className=" border-b-2 border-solid border-black py-2"
            onClick={() => fetchChapter(parseInt(chapter) + 1)}>
            ≫
          </button>
        ) : (
          <button className=" text-gray-200 border-b-2 border-solid border-black py-2 cursor-not-allowed">
            ≫
          </button>
        )}
        {/* download btn */}
        <button className=" py-2" onClick={exportToPDF}>
          ⇓
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
