import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';

import { Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { getCategories } from '../api/category';
import slugConverter from '../utils/slugConverter';


// Xem thêm: https://mui.com/material-ui/react-app-bar/
export default function NavBar() {
  const [searchValue, setSearchValue] = useState('');
  const [categories, setCategories] = useState([]);
  const [isOpenNav, setIsOpenNav] = useState(false);

  const openCategoriesNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await getCategories();
        setCategories(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        sx={{
          color: 'black',
          background: 'transparent',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/">SAY GEX NOVEL</Link>
          </Typography>

          <Stack className="relative">
            <Typography
              className="hover:cursor-pointer hover:text-slate-500"
              color="black"
              onClick={openCategoriesNav}
            >
              Thể loại
            </Typography>

            {isOpenNav && (
              <div className="absolute mt-11 bg-slate-200	 rounded-sm">
                {categories.map((category) => (
                  <Typography key={category} color="black">
                    <Link
                      to={`/categories/${slugConverter(category)}`}
                      className=" block w-[200px] border-b-[1px]
                  border-solid px-[17px] py-[16px] text-base hover:bg-slate-300 "
                    >
                      {category}
                    </Link>
                  </Typography>
                ))}
              </div>
            )}
          </Stack>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Tìm kiếm..."
              inputProps={{ 'aria-label': 'search' }}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setIsSearch(1);
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
