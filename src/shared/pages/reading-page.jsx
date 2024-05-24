// import { TextField } from "@mui/material";
import { useState } from "react";
import CustomDialog from "../../features/ReadingPage/components/Dialog";
import ChangeStyle from "../../features/ReadingPage/components/ChangeStyle";
import Content from "../../features/ReadingPage/components/Content";
import { data } from "../../assets/reading-page-mock";

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

  // const changeColor = () => {
  //   setColor(" text-red-500 ");
  // };
  // const changeBgColor = () => {
  //   setBgColor(" bg-blue-500 ");
  // };

  // const increaseFontSize = () => {
  //   setFontSize(fontSize + 1);
  // };

  return (
    <div className=" relative h-full">
        <div className={` pt-8 flex-col flex items-center ` + bgColor + color}>
          <h1 className=" text-4xl mb-2">{data.title}</h1>
          <h2 className=" text-xl">{data.chapter}</h2>
          <h3>Độ dài: 1000 từ</h3>
          <select name="" id="" className=" w-10/12" defaultValue={data.chapter}>
            {data.list.reverse().map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <Content fontSize={fontSize} color={color} leading={leading} bgColor={bgColor} fontFamily={fontFamily} textAlign={textAlign} />
        {/* <div
          style={{ fontSize: `${fontSize}px` }}
          className={
            ` p-4` + color + leading + bgColor + fontFamily + textAlign
          }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ornare aliquet ipsum, ac tempus justo dapibus sit amet. Suspendisse
          condimentum, libero vel tempus mattis, risus risus vulputate libero,
          elementum fermentum mi neque vel nisl. Maecenas facilisis maximus
          dignissim. Curabitur mattis vulputate dui, tincidunt varius libero
          luctus eu. Mauris mauris nulla, scelerisque eget massa id, tincidunt
          congue felis. Sed convallis tempor ipsum rhoncus viverra. Pellentesque
          nulla orci, accumsan volutpat fringilla vitae, maximus sit amet
          tortor. Aliquam ultricies odio ut volutpat scelerisque. Donec nisl
          nisl, porttitor vitae pharetra quis, fringilla sed mi. Fusce pretium
          dolor ut aliquam consequat. Cras volutpat, tellus accumsan mattis
          molestie, nisl lacus tempus massa, nec malesuada tortor leo vel quam.
          Aliquam vel ex consectetur, vehicula leo nec, efficitur eros. Donec
          convallis non urna quis feugiat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ornare aliquet ipsum, ac tempus justo dapibus sit amet. Suspendisse
          condimentum, libero vel tempus mattis, risus risus vulputate libero,
          elementum fermentum mi neque vel nisl. Maecenas facilisis maximus
          dignissim. Curabitur mattis vulputate dui, tincidunt varius libero
          luctus eu. Mauris mauris nulla, scelerisque eget massa id, tincidunt
          congue felis. Sed convallis tempor ipsum rhoncus viverra. Pellentesque
          nulla orci, accumsan volutpat fringilla vitae, maximus sit amet
          tortor. Aliquam ultricies odio ut volutpat scelerisque. Donec nisl
          nisl, porttitor vitae pharetra quis, fringilla sed mi. Fusce pretium
          dolor ut aliquam consequat. Cras volutpat, tellus accumsan mattis
          molestie, nisl lacus tempus massa, nec malesuada tortor leo vel quam.
          Aliquam vel ex consectetur, vehicula leo nec, efficitur eros. Donec
          convallis non urna quis feugiat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ornare aliquet ipsum, ac tempus justo dapibus sit amet. Suspendisse
          condimentum, libero vel tempus mattis, risus risus vulputate libero,
          elementum fermentum mi neque vel nisl. Maecenas facilisis maximus
          dignissim. Curabitur mattis vulputate dui, tincidunt varius libero
          luctus eu. Mauris mauris nulla, scelerisque eget massa id, tincidunt
          congue felis. Sed convallis tempor ipsum rhoncus viverra. Pellentesque
          nulla orci, accumsan volutpat fringilla vitae, maximus sit amet
          tortor. Aliquam ultricies odio ut volutpat scelerisque. Donec nisl
          nisl, porttitor vitae pharetra quis, fringilla sed mi. Fusce pretium
          dolor ut aliquam consequat. Cras volutpat, tellus accumsan mattis
          molestie, nisl lacus tempus massa, nec malesuada tortor leo vel quam.
          Aliquam vel ex consectetur, vehicula leo nec, efficitur eros. Donec
          convallis non urna quis feugiat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ornare aliquet ipsum, ac tempus justo dapibus sit amet. Suspendisse
          condimentum, libero vel tempus mattis, risus risus vulputate libero,
          elementum fermentum mi neque vel nisl. Maecenas facilisis maximus
          dignissim. Curabitur mattis vulputate dui, tincidunt varius libero
          luctus eu. Mauris mauris nulla, scelerisque eget massa id, tincidunt
          congue felis. Sed convallis tempor ipsum rhoncus viverra. Pellentesque
          nulla orci, accumsan volutpat fringilla vitae, maximus sit amet
          tortor. Aliquam ultricies odio ut volutpat scelerisque. Donec nisl
          nisl, porttitor vitae pharetra quis, fringilla sed mi. Fusce pretium
          dolor ut aliquam consequat. Cras volutpat, tellus accumsan mattis
          molestie, nisl lacus tempus massa, nec malesuada tortor leo vel quam.
          Aliquam vel ex consectetur, vehicula leo nec, efficitur eros. Donec
          convallis non urna quis feugiat.
        </div> */}

      <div className=" flex flex-col fixed right-4 bottom-12 rounded-full border-solid border-zinc-800 border-2 p-2 text-2xl bg-white">
        <button className=" border-b-2 border-solid border-black p-2" onClick={() => window.scrollTo(0,0)}>
          ▲
        </button>
        <button className=" border-b-2 border-solid border-black p-2">
          ≪
        </button>
        <button className=" border-b-2 border-solid border-black p-2">
          🏠
        </button>
        <button className=" border-b-2 border-solid border-black p-2" onClick={() => setOpen(true)}>
          🖌
        </button>
        <button className=" p-2">
          ≫
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
