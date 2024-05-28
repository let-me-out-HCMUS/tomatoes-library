import React from 'react'
import Story from '../../features/StoryPage/components/Story';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom'
import { getStory } from '../../api/story';

const StoryPage = () => {
  const { slug } = useParams()
  
  const [story, setStory] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await getStory(slug)
        console.log(res)
      
      if (!res.status === 'fail') {
        return window.location.replace('/404')
      }

      setStory(res.data)
    }

    getData()
  }, [slug])

  if (!story) return <CircularProgress />

  return (
    <div className='py-10'>
      <Story storyData={story} />
    </div>
  )
}

export default StoryPage