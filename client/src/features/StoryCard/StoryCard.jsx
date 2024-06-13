import { Link } from 'react-router-dom';
import slugConverter from '../../utils/slugConverter';

const StoryCard = ({ story }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Link
      to={`/story/${slugConverter(story.name)}`}
      onClick={handleScrollToTop}
    >
      <p className="mt-4 cursor-pointer hover:text-orange-400 transition-all duration-300 text-sm font-semibold md:text-lg">
        {story.name}
      </p>
      <p className="font-light tracking-wider">Tác giả: {story.author}</p>
      <span className="font-light tracking-wider">
        Số chương: {story.totalChapter ? story.totalChapter : 'Đang cập nhật'}
      </span>
    </Link>
  );
};

export default StoryCard;
