import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { getStories } from "../../api/story.js";
import slugify from "slugify"; // Import thư viện slugify
import { SourceOrderContext } from '../../shared/context/SourceOrderContext.jsx/';

export default function StoryList() {
  const [stories, setStories] = React.useState([]);

  const { getSourceOrder } = React.useContext(SourceOrderContext);
  const sourceOrder = getSourceOrder();
  const order = sourceOrder.map(src => src.source).join(",");
  const hasFetchedStories = React.useRef(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getStories(order);
      console.log(response.data);
      setStories(response.data);
    };

    if (order && !hasFetchedStories.current) {
      fetchData();
      hasFetchedStories.current = true;
    }
  }, [order]);

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

  const imageStyle = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const imageHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
  };

  const handleMouseOver = (e) => {
    Object.assign(e.currentTarget.style, imageHoverStyle);
  };

  const handleMouseOut = (e) => {
    Object.assign(e.currentTarget.style, imageStyle);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-6 p-5 px-10">
      <div className="lg:col-span-2">
        <img
          className="rounded-xl w-full"
          src="https://firebasestorage.googleapis.com/v0/b/foodorder-842d1.appspot.com/o/images%2Fhot.png?alt=media&token=d478baab-c6d5-4ad4-8226-f31ec7281325"
          alt=""
          style={imageStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </div>
      <div className="lg:col-span-1 grid grid-cols-1 lg:grid-cols-1 gap-4">
        {stories.slice(0, 3).map((story, index) => (
          <Link to={`/story/${story.slug}`} key={index} className="card bg-white p-4 rounded-lg shadow-sm flex">
            <img
              className="w-1/3 h-32 object-cover rounded-lg mr-4"
              src={story.coverImage}
              alt={story.name}
              style={imageStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            <div className="w-2/3">
              <h2 className="text-lg font-bold mb-1">
                {story.name.length > 20 ? story.name.substring(0, 20) + "..." : story.name}
              </h2>
              <p className="text-gray-700 text-sm mb-2">{story.author}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="lg:col-span-3 mt-6">
        <h2 className="text-2xl font-bold mb-4">Truyện đề cử</h2>
        <Slider {...settings}>
          {stories.slice(3, 11).map((story, index) => (
            <div key={index} className="p-2">
              <Link to={`/story/${story.slug}`} className="card bg-white p-4 rounded-lg shadow-sm flex">
                <img
                  className="w-1/3 h-32 object-cover rounded-lg mr-4"
                  src={story.coverImage}
                  alt={story.name}
                  style={imageStyle}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                />
                <div className="w-2/3">
                  <h2 className="text-lg font-bold mb-1">
                    {story.name.length > 20 ? story.name.substring(0, 20) + "..." : story.name}
                  </h2>
                  <p className="text-gray-700 text-sm mb-2">{story.author}</p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
