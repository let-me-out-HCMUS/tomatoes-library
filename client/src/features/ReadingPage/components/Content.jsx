/* eslint-disable */
export default function Content({
  content,
  fontSize,
  color,
  leading,
  bgColor,
  fontFamily,
  textAlign,
}) {
  return (
    <div
      style={{ fontSize: `${fontSize}px` }}
      className={
        `leading p-8 px-32` + color + leading + bgColor + fontFamily + textAlign
      }
      id="story-content"
    >
      {content.split('\n\n').map((item, key) => {
        return <span key={key}>{item}<br /><br /></span>
      })}
    </div>
  );
}
