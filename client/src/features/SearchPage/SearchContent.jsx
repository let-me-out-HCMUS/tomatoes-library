import { useState } from 'react';
import CustomDialog from '../../common/Dialog';
import { FiSearch } from 'react-icons/fi';
import StoryCard from '../StoryCard/StoryCard';

export default function SearchContent({ stories }) {
  const defaultFilter = {
    price: {
      from: 1000,
      to: 9999999,
    },
    isDiscount: false,
  };

  const [searchValue, setSearchValue] = useState('');
  const [openFilter, setOpenFilter] = useState(false);

  const [filterValue, setFilterValue] = useState(defaultFilter);
  const [sortValue, setSortValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearch(isSearch + 1);
  };

  // Filter
  const submitFilter = (data) => {
    setFilterValue(data);
    setOpenFilter(false);
  };

  const resetFilter = () => {
    setFilterValue(defaultFilter);
    setOpenFilter(false);
  };

  // Sort
  const handleSort = (value) => {
    setSortValue(value);
  };

  return (
    <div className=" mx-4 mt-16 w-full lg:mt-0 lg:border-l-2 lg:border-solid lg:border-amber-800 lg:pl-16">
      {/* Search name */}
      <form className="relative" onSubmit={handleSearch}>
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
          placeholder="Tên truyện"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2 bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
        >
          <FiSearch />
        </button>
      </form>

      {/* Filter */}
      <div className=" mt-4 mb-8">
        <button
          className=" py-1 px-2 rounded border-2 border-solid text-sm border-gray-200"
          onClick={() => setOpenFilter(true)}
        >
          <i className="fa-solid fa-filter mr-2"></i>
          Bộ lọc
        </button>
        <div>
          <select
            className="px-1 py-1 border rounded mt-2"
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="">Sắp xếp theo mặc định</option>
            <option value="price">Giá thấp đến cao</option>
            <option value="-price">Giá cao đến thấp</option>
            <option value="sold">Các sản phẩm được mua nhiều nhất</option>
            <option value="id">Các sản phẩm mới nhất</option>
          </select>
        </div>
      </div>
      <CustomDialog
        title={'Bộ lọc'}
        onClose={() => setOpenFilter(false)}
        open={openFilter}
      ></CustomDialog>

      {/* Products */}

      {stories?.length > 0 ? (
        <div className="">
          {stories.map((story, index) => (
            <StoryCard key={index} story={story} />
          ))}
        </div>
      ) : (
        <p>Không có truyện nào</p>
      )}
    </div>
  );
}
