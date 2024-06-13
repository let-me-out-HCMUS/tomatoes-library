import CategorySide from '../../features/SearchPage/CategorySide';
import SearchContent from '../../features/SearchPage/SearchContent';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { getCategories } from '../../api/category';
import slugConverter from '../../utils/slugConverter';
import { getStoriesByCategory } from '../../api/category';
import { searchStories } from '../../api/story';
import { SourceOrderContext } from '../../shared/context/SourceOrderContext';
import Spinner from "../../features/common/Spinner";

function SearchPage({ isSearch = false }) {
  const { slug } = useParams();
  const { getSourceOrder } = useContext(SourceOrderContext);
  const sourceOrder = getSourceOrder();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // Use Spinner wait for data
  // console.log(sourceOrder)
  // Categories
  useEffect(() => {
    async function fetchData() {
      try {
        let res = await getCategories();
        setCategories(res.data);
        // console.log(res);
        // console.log(categories);
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
      setIsLoading(true);
      setSelectedCategory(
        categories.filter((item) => slugConverter(item) === slug)
      );
      const fetchData = async () => {
        // console.log('call fetch')
        // is Category
        if (!isSearch) {
          const res = await getStoriesByCategory(slug.replace(/%20/g, " "));
          setStories(res.data);
          // console.log(res.data);
        }
        // Seacrh
        else {
          // console.log('source',sourceOrder[0].source);
          const res = await searchStories(slug.replace(/%20/g, " "), sourceOrder[0].source);
          setStories(res?.data);
          // console.log(res);
        }
      };
      fetchData().finally(() => setIsLoading(false));
      // setIsLoading(false);
    }
  }, [slug]);

  if (isLoading) return Spinner();
  return (
    <div className=" flex lg:my-28 lg:mx-16 ">
      <CategorySide category={categories} selectedCategory={selectedCategory} />
      <SearchContent stories={stories} />
    </div>
  );
}

export default SearchPage;
