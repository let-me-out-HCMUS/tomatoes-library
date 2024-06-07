import { getStoriesByCategory } from '../../api/category';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StoryCard from '../../features/StoryCard/StoryCard';

function CategoryList() {
  const { slug } = useParams();
  const [categoryStories, setCategoryStories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getStoriesByCategory(slug);
      setCategoryStories(res.data);
      console.log(res.data);
    };
    fetchData();
  }, [slug]);

  return (
    <div>
      {categoryStories &&
        categoryStories.map((story) => (
          <StoryCard key={story.name} story={story} />
        ))}
    </div>
  );
}

export default CategoryList;
