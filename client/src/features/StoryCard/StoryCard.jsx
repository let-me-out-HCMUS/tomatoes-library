import { Link } from 'react-router-dom'

const StoryCard = ({story}) => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Link to={`/storys/${story.slug}`} onClick={handleScrollToTop}>
        <img className="rounded-xl shadow-xl cursor-pointer" src={story.image} alt="" />
        <p className="mt-4 cursor-pointer hover:text-orange-400 transition-all duration-300 text-sm font-semibold md:text-lg">{story.name}</p>
        <span className="font-light tracking-wider">{convertToVND(story.price)}</span>
    </Link>
  )
}

export default StoryCard