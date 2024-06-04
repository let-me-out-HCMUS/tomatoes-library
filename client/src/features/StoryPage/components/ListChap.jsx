import { useParams, useNavigate } from "react-router-dom";
import { getReadChap } from "../../../utils/localStorage";
export default function ListChapter({ totalChapter }) {
  const { slug } = useParams();
  let navigate = useNavigate();
  const listReadChap = getReadChap(slug).map((item) => parseInt(item));
  console.log(listReadChap);

  return (
    <div>
      {/* border-black border-2 border-opacity-30 rounded-lg  */}
      <div
        className=" fixed right-4 top-16 bottom-8 z-10 bg-white w-20 border-black border-2 border-opacity-30 rounded-xl overflow-auto "
        style={{
          overflow: "auto",
          scrollbarWidth: "none" /* For Firefox */,
          msOverflowStyle: "none" /* For Internet Explorer and Edge */,
        }}>
        {/* <ChapterCard /> */}
        <div className=" p-2 font-bold text-center border-b border-opacity-30 border-black">
          Mục lục
        </div>
        {Array.from({ length: totalChapter }, (_, i) => (
          <button
            key={i}
            className={` text-center p-2 pb-0 w-full border-b border-opacity-30 border-black hover:bg-slate-400 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-200'} `}
            onClick={() => {
              
              navigate(`/story/${slug}/${totalChapter - i}`);
            }}>
            {listReadChap.includes(totalChapter - i) ? (
              <span className=" text-purple-500">{totalChapter - i}</span>
            ) : (
              <span>{totalChapter - i}</span>
            )}
            
          </button>
        ))}
      </div>
    </div>
  );
}
