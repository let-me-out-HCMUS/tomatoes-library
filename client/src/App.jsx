import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ReadingPage from './shared/pages/Reading';
import Home from './shared/pages/Home';
import AppLayout from './shared/components/AppLayout.jsx';
import StoryHolic from './features/Storyholic/StoryHolic';
import StoryPage from './shared/pages/Story';
import PageNotFound from './shared/pages/PageNotFound';
import SourceOrderContext from './shared/context/SourceOrderContext';
import SearchPage from './shared/pages/SearchPage';

export default function App() {
	return (
		<BrowserRouter>
			<SourceOrderContext>
				<Routes>
					<Route element={<AppLayout/>}>
						<Route path="/" element={<Home/>}></Route>
						<Route path="story/:slug/">
							<Route path="" element={<StoryPage/>}></Route>
							<Route path=":chapter" element={<ReadingPage/>}></Route>
						</Route>

						<Route path="/categories/:slug" element={<SearchPage/>}></Route>

						<Route path="storyholic/:id" element={<StoryHolic/>}/>
						<Route
							path="search/:slug"
							element={<SearchPage isSearch={true}/>}
						/>
					</Route>
					{/* All invalid route will render PageNotFound page */}
					<Route path="*" element={<PageNotFound/>}/>
				</Routes>
			</SourceOrderContext>
		</BrowserRouter>
	);
}
