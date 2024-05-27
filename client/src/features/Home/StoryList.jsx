import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const mockStories = [
  {
    title: "Black Clover",
    description: "Tham gia vào trận chiến tại vương quốc Space",
    imageUrl: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/black-clover-9.jpg",
  },
  {
    title: "Trọng sinh tu tiên",
    description: "Tu tiên không hề khó",
    imageUrl: "https://audiotruyenfull.com/wp-content/uploads/2020/02/Trong-Sinh-Tu-Tien-Tai-Do-Thi.jpg",
  },
  {
    title: "Trác Phàm đại náo tu tiên",
    description: "Ta đại náo thánh vực",
    imageUrl: "https://s1.dmcdn.net/v/RM8AE1TVWqXZAtWar/x1080",
  },
  {
    title: "Nhát chém linh hồn",
    description: "Ta làm gì mà người nói vậy",
    imageUrl: "https://audiotruyenfull.com/wp-content/uploads/2020/02/Thanh-than-tu-nguyen-thuy-bo-lac-bat-dau.jpg.webp",
  },
  {
    title: "Thánh thiên tiên vực",
    description: "Tiên Vực à? Ta tới đây",
    imageUrl: "https://tienvuc.vn/banner.jpg",
  },
  {
    title: "Say à? Ta say đây",
    description: "Say gếch",
    imageUrl: "https://cdn.9pay.vn/tin-tuc/vuong-lam-trong-phim-hoat-hinh-tien-nghich-1696405688.jpg",
  },
  {
    title: "Tổng tài cực căng",
    description: "Tổng tài là ta",
    imageUrl: "https://i.ytimg.com/vi/RByiCrCaQk0/maxresdefault.jpg",
  },
  {
    title: "Dương Dương tu tiên",  
    description: "Tu luyện bá thể",
    imageUrl: "https://afamilycdn.com/150157425591193600/2024/1/1/ava-luton-vs-chelsea-1619-1704103299193-1704103299254222919430.jpg",
  },
  {
    title: "Bá đạo là ta",
    description: "Thanh kiếm của ta đã đến lúc phải rút ra",
    imageUrl: "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/1/1223740/Duong-Duong.jpeg",
  },
];

export default function StoryList() {
  const [stories, setStories] = React.useState([]);

  React.useEffect(() => {
    // MOCK DATA FOR TEST
    setStories(mockStories);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-6 p-5 px-10">
      <div className="lg:col-span-2">
        <img
          className="rounded-xl w-full"
          src="https://firebasestorage.googleapis.com/v0/b/foodorder-842d1.appspot.com/o/images%2Fhot.png?alt=media&token=d478baab-c6d5-4ad4-8226-f31ec7281325"
          alt=""
        />
      </div>
      <div className="lg:col-span-1 grid grid-cols-1 lg:grid-cols-1 gap-4">
        {stories.slice(0, 2).map((story, index) => (
          <Link to={`stories/cac-nguoi-tu-tien-ta-lam-ruong/1`} key={index} className="card bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-bold mb-1">{story.title}</h2>
            <p className="text-gray-700 text-sm mb-2">{story.description}</p>
            <img
              className="w-full h-32 object-cover rounded-lg"
              src={story.imageUrl}
              alt={story.title} 
            />
          </Link>
        ))}
      </div>
      <div className="lg:col-span-3 mt-6">
        <Slider {...settings}>
          {stories.slice(2, 10).map((story, index) => (
            <div key={index} className="p-2">
              <Link to={`stories/cac-nguoi-tu-tien-ta-lam-ruong/1`} className="card bg-white p-4 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold mb-1">{story.title}</h2>
                <p className="text-gray-700 text-sm mb-2">{story.description}</p>
                <img
                  className="w-full h-32 object-cover rounded-lg"
                  src={story.imageUrl}
                  alt={story.title}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
