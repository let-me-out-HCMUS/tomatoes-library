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
  if (!content) {
    return (
      <div className="text-center text-2xl text-gray-400 p-8">
        This chapter isn't available. Please try another server or wait for the server to update.
      </div>
    );
  }
  return (
    <div
      style={{ fontSize: `${fontSize}px` }}
      className={
        `leading p-8 px-32 ` + color + leading + bgColor + fontFamily + textAlign
      }
      id="story-content"
    >
      {content.split('\n\n').map((item, key) => {
        return <span key={key}>{item}<br /><br /></span>
      })}
    </div>
  );
}
