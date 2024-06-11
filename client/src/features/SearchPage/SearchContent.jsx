import { useState, useEffect } from 'react';
import StoryCard from '../StoryCard/StoryCard';

export default function SearchContent({ stories }) {
  const [sortValue, setSortValue] = useState('');
  const [sortedStories, setSortedStories] = useState([]);

  // Sort
  const handleSort = (value) => {
    setSortValue(value);
    if (value === 'A-Z') {
      setSortedStories(
        stories.sort((a, b) => (a.name || '').localeCompare(b.name || ''))
      );
    } else if (value === 'Z-A') {
      setSortedStories(
        stories.sort((a, b) => (b.name || '').localeCompare(a.name || ''))
      );
    }
    console.log(stories);
  };

  // Update sortedStories when stories prop changes
  useEffect(() => {
    setSortedStories(stories);
  }, [stories]);

  return (
    <div className=" mx-4 mt-16 w-full lg:mt-0 lg:border-l-2 lg:border-solid lg:border-amber-800 lg:pl-16">
      {/* Filter */}
      <div className=" ">
        <div>
          <select
            className="px-1 py-1 border rounded "
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="A-Z">Sắp xếp theo thứ tự A-Z</option>
            <option value="Z-A">Sắp xếp theo thứ tự Z-A</option>
          </select>
        </div>
      </div>

      {/* Stories */}
      {stories?.length > 0 ? (
        <div className="">
          {sortedStories.map((story, index) => (
            <StoryCard key={index} story={story} />
          ))}
        </div>
      ) : (
        <p>Không có truyện nào</p>
      )}
    </div>
  );
}
