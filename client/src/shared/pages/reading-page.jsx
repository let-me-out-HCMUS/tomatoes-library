// import { TextField } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import CustomDialog from "../../features/ReadingPage/components/Dialog";
import ChangeStyle from "../../features/ReadingPage/components/ChangeStyle";
import Content from "../../features/ReadingPage/components/Content";
import { data } from "../../assets/reading-page-mock";
import { jsPDF } from "jspdf";
import { getStories, getChapter, getStory } from "../../api/story";
import { useParams } from "react-router-dom";

export default function ReadingPage() {
  const { slug, chapter } = useParams();
  console.log(slug, chapter);
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

    console.log(storyContent);

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

  // restore scroll position
  // useEffect(() => {
  //   const scrollY = localStorage.getItem(`${slug}-${chapter}`);
  //   window.scrollTo(0, scrollY);
  // }, []);

  const [chapterContent, setChapterContent] = useState("");
  const [story, setStory] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        let resChap = await getChapter(slug, chapter);
        let resStory = await getStory(slug);
        // setChapterContent(resChap.data);
        // setStory(resStory.data);
        Promise.all([resChap, resStory]).then((values) => {
          setChapterContent(values[0].data);
          setStory(values[1].data);

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

  return (
    <div className=" relative h-full">
      <div className={` pt-8 flex-col flex items-center ` + bgColor + color}>
        <h1 className=" font-bold text-2xl mt-8 mb-2 px-10 text-center">
          {story?.name}
        </h1>
        <h2 className=" text-xl">Chap: {chapter}</h2>
        <h3 className=" mb-4">Độ dài: {chapterContent?.length} từ</h3>
        <select
          className=" mb-2 text-black border-solid border-2"
          name=""
          id=""
          defaultValue={data.activeServer}>
          {data.server.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          name=""
          id=""
          className=" w-10/12 text-black border-solid border-2"
          value={chapter}
          // onChange={(e) => setChapter(e.target.value)}
        >
          {Array.from({ length: story?.totalChapter }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              Chapter {i + 1}
            </option>
          )).reverse()}
        </select>
      </div>
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
        <button className=" border-b-2 border-solid border-black py-2">
          ≪
        </button>
        <button className=" border-b-2 border-solid border-black py-2">
          🏠
        </button>
        <button
          className=" border-b-2 border-solid border-black py-2"
          onClick={() => setOpen(true)}>
          🖌
        </button>
        <button className=" border-b-2 border-solid border-black py-2">
          ≫
        </button>
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
