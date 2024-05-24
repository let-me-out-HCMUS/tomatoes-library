// import { TextField } from "@mui/material";
import { useState, useRef,useEffect } from "react";
import CustomDialog from "../../features/ReadingPage/components/Dialog";
import ChangeStyle from "../../features/ReadingPage/components/ChangeStyle";
import Content from "../../features/ReadingPage/components/Content";
import { data } from "../../assets/reading-page-mock";
import { jsPDF } from "jspdf";

export default function ReadingPage() {
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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log(window.scrollY);
  //     localStorage.setItem(`${data.title}-${data.chapter}`, window.scrollY);
  //   };
  
  //   window.addEventListener('scroll', handleScroll);
  
  //   // Cleanup function to remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [data.title, data.chapter]); 

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      localStorage.setItem(`${data.title}-${data.chapter}`, window.scrollY);
    };
  
    // Run handleScroll every 30sec
    const intervalId = setInterval(handleScroll, 30000);
  
    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [data.title, data.chapter]);

  useEffect(() => {
    const scrollY = localStorage.getItem(`${data.title}-${data.chapter}`);
    window.scrollTo(0, scrollY);
  }, []);

  return (
    <div className=" relative h-full" onScroll={() =>{
      console.log(window.scrollY)
     localStorage.setItem(`${data.title}-${data.chapter}`, window.scrollY)}
    }>
      <div className={` pt-8 flex-col flex items-center ` + bgColor + color}>
        <h1 className=" text-4xl mb-2">{data.title}</h1>
        <h2 className=" text-xl">{data.chapter}</h2>
        <h3>Độ dài: 1000 từ</h3>
        <select name="" id="" className=" w-10/12" defaultValue={data.chapter}>
          {data.list.reverse().map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <Content
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

      {/* <button
        className=" fixed right-4 bottom-12 rounded-full border-solid border-zinc-800 border-2 p-2 text-2xl bg-white"
        onClick={() => setOpen(true)}>
        🖌
      </button> */}

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
