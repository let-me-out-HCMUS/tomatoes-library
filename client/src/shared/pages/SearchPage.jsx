import CategorySide from '../../features/SearchPage/CategorySide';
import SearchContent from '../../features/SearchPage/SearchContent';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategories } from '../../api/category';
import slugConverter from '../../utils/slugConverter';
import { getStoriesByCategory } from '../../api/category';
import { searchStories } from '../../api/story';

function SearchPage({ isSearch = false }) {
  const { slug } = useParams();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [stories, setStories] = useState([]);
  // Use Spinner wait for data

  // Categories
  useEffect(() => {
    async function fetchData() {
      try {
        let res = await getCategories();
        setCategories(res.data);
        console.log(res);
        console.log(categories);
        if (!isSearch) {
          setSelectedCategory(
            res.data.filter((category) => slugConverter(category) === slug)
          );
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // Stories
  useEffect(() => {
    if (slug) {
      setSelectedCategory(
        categories.filter((item) => slugConverter(item) === slug)
      );
      const fetchData = async () => {
        // is Category
        if (!isSearch) {
          const res = await getStoriesByCategory(slug);
          setStories(res.data);
          console.log(res.data);
        }
        // Seacrh
        else {
          console.log(slug);
          const res = await searchStories(slug);
          setStories(res.data);
          console.log(res);
        }
      };
      fetchData();
    }
  }, [slug]);

  return (
    <div className=" flex lg:my-28 lg:mx-16 ">
      <CategorySide category={categories} selectedCategory={selectedCategory} />
      <SearchContent stories={stories} />
    </div>
  );
}

export default SearchPage;
