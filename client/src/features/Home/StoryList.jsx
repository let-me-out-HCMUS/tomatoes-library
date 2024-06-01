import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { getStories } from "../../api/story.js";

export default function StoryList() {
  const [stories, setStories] = React.useState([]);

  React.useEffect(() => {
    getStories()
      .then(response => {
        console.log('Stories from API:', response.data); 
        setStories(response.data);
      })
      .catch(error => {
        console.error('Error fetching stories:', error);
      });
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
            <h2 className="text-lg font-bold mb-1">{story.name}</h2>
            <p className="text-gray-700 text-sm mb-2">{story.author}</p>
            <img
              className="w-full h-32 object-cover rounded-lg"
              src={story.coverImage}
              alt={story.name} 
            />
          </Link>
        ))}
      </div>
      <div className="lg:col-span-3 mt-6">
        <Slider {...settings}>
          {stories.slice(2, 10).map((story, index) => (
            <div key={index} className="p-2">
              <Link to={`stories/cac-nguoi-tu-tien-ta-lam-ruong/1`} className="card bg-white p-4 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold mb-1">{story.name}</h2>
                <p className="text-gray-700 text-sm mb-2">{story.author}</p>
                <img
                  className="w-full h-32 object-cover rounded-lg"
                  src={story.coverImage}
                  alt={story.name}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
