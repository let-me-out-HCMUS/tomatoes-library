import StoryCard from "../../StoryCard/StoryCard";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import ListChapter from "./ListChap";
import { getReadChap } from "../../../utils/localStorage";

const Story = ({ storyData }) => {
  const { slug } = useParams();
  const story = storyData;
  let navigate = useNavigate();
  

  const [selectedTopping, setSelectedTopping] = React.useState([]);
  const [openList, setOpenList] = React.useState(false);
  // const [selectedSize, setSelectedSize] = React.useState(storyData.size[0])

  const handlePickSize = (size) => {
    setSelectedSize(size);
  };

  const handlePickTopping = (topping) => {
    if (selectedTopping.includes(topping)) {
      setSelectedTopping(selectedTopping.filter((item) => item !== topping));
    } else {
      setSelectedTopping([...selectedTopping, topping]);
    }
  };

  const handleAddToCart = () => {
    // addToCart({
    //     ...story,
    //     size: selectedSize,
    //     toppings: selectedTopping
    // })
    // toast.success('Thêm vào giỏ hàng thành công')
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 relative">
        <div className="mx-auto">
          <img src={story.coverImage} width={300} alt="" />
        </div>
        <div className="py-4 col-span-2">
          <div>
            <p className="font-semibold text-2xl">{story?.name}</p>
          </div>
          <div className="mt-4">
            <span className="font-bold">Tác giả: </span>
            <span>{story.author}</span>
          </div>
          <div className="mt-4">
            <span className="font-bold">Số chương: </span>
            <span>{story.totalChapter}</span>
          </div>
          <div className="mt-4">
            <span className="font-bold">Tình trạng: </span>
            {story.isFull ? (
              <span>Hoàn thành</span>
            ) : (
              <span>Đang tiến hành</span>
            )}
          </div>
          <div className="flex flex-col justify-center mt-4">
            <button
              className="bg-orange-500 text-white w-1/3 font-bold py-3 rounded-xl mb-4"
              onClick={() => navigate(`/story/${slug}/1`)}>
              Đọc từ đầu
            </button>
            <button
              onClick={() => handleAddToCart()}
              className="bg-red-500 text-white w-1/3 font-bold py-3 rounded-xl">
              Đọc tiếp
            </button>
          </div>
          <div className=" absolute bottom-0">
            <button
              className=" flex flex-col"
              onClick={() => setOpenList(!openList)}>
              <AiOutlineBars className=" text-4xl self-center" />
              <span>Mục lục</span>
            </button>
          </div>
        </div>
      </div>

      {openList && <ListChapter totalChapter={story.totalChapter} />}

      <div className="mt-4 py-4 border-y-2">
        <span className="font-semibold">Tóm tắt</span>
        <p className=" text-sm">
          {story.description.split("<br>\n<br>").map((item, key) => {
            return (
              <span key={key}>
                {item}
                <br />
              </span>
            );
          })}
        </p>
      </div>
      {/* <div className="mt-4 py-4 border-b-2">
            <span className="font-semibold">Sản phẩm liên quan</span>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4 mt-4">
                {
                    storyData.relatedstorys.map((story) => (
                    <StoryCard key={story._id} story={story}/>
                ))
                }
            </div>
        </div> */}
    </div>
  );
};

export default Story;
