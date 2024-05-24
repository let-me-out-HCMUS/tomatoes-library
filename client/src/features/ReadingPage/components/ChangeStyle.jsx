/* eslint-disable react/prop-types */
export default function ChangeStyle({
  //   color,
  //   bgColor,
  fontSize,
  //   leading,
  //   textAlign,
  setColor,
  setBgColor,
  setFontFamily,
  setFontSize,
  setLeading,
  setTextAlign,
}) {
  const listBgColor = [
    " bg-white ",
    " bg-green-100 ",
    " bg-cyan-100 ",
    " bg-warning-100 ",
    " bg-pink-100 ",
    " bg-slate-800 ",
  ];
  const listFont = [" font-sans ", " font-serif ", " font-mono "];
  const listLeading = [
    {
      display: 1,
      value: " leading-normal ",
    },
    {
      display: 1.5,
      value: " leading-relaxed ",
    },
    {
      display: 2,
      value: " leading-loose ",
    },
  ];

  const listTextAlign = [
    {
      display: "Căn trái",
      value: " text-left ",
    },
    {
      display: "Căn giữa",
      value: " text-center ",
    },
    {
      display: "Căn phải",
      value: " text-right ",
    },
    {
      display: "Căn đều",
      value: " text-justify ",
    },
  ];

  return (
    <div className=" space-y-4">
      <div>
        <h1>Màu chữ</h1>
        <div className=" flex justify-center">
          <button
            className=" p-4 px-8 bg-white"
            onClick={() => {
              setColor(" text-white ");
              localStorage.setItem("color", " text-white ");
            }}
          />
          <button
            className=" p-4 px-8 bg-black"
            onClick={() => {
              setColor(" text-black ");
              localStorage.setItem("color", " text-black ");
            }}
          />
        </div>
      </div>
      <div>
        <h1>Màu nền</h1>
        <div className=" flex justify-center">
          {/* <button className=" p-4 px-8 bg-amber-100" /> */}
          {listBgColor.map((item, index) => (
            <button
              key={index}
              className={` p-4 px-8 ${item}`}
              onClick={() => {
                setBgColor(item);
                localStorage.setItem("bgColor", item);
              }}
            />
          ))}
        </div>
      </div>
      <div>
        <h1>Font chữ</h1>
        <select
          id="currency"
          name="currency"
          onChange={(e) => {
            setFontFamily(e.target.value);
            localStorage.setItem("fontFamily", e.target.value);
          }}
          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
          {listFont.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h1>Kích cỡ chữ</h1>
        <div className=" flex space-x-4 justify-center ">
          <button
            onClick={() => {
              if (fontSize <= 10) return;
              setFontSize(parseInt(fontSize) - 2);
              localStorage.setItem("fontSize", parseInt(fontSize) - 2);
            }}>
            &lt;
          </button>
          <span>{fontSize}px</span>
          <button
            onClick={() => {
              if (fontSize >= 40) return;
              setFontSize(parseInt(fontSize) + 2);
              localStorage.setItem("fontSize", parseInt(fontSize) + 2);
            }}>
            &gt;
          </button>
        </div>
      </div>
      <div>
        <h1>Giãn cách dòng</h1>
        <select
          id="currency"
          name="currency"
          onChange={(e) => {
            setLeading(e.target.value);
            localStorage.setItem("leading", e.target.value);
          }}
          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
          {listLeading.map((item, index) => (
            <option key={index} value={item.value}>
              {item.display}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h1>Kiểu căn chỉnh</h1>
        <select
          id="currency"
          name="currency"
          onClick={(e) => {
            setTextAlign(e.target.value);
            localStorage.setItem("textAlign", e.target.value);
          }}
          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
          {listTextAlign.map((item, index) => (
            <option key={index} value={item.value}>
              {item.display}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
