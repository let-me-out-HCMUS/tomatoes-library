import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReadingPage from "./shared/pages/reading-page";
import Home from "./shared/pages/Home";
import AppLayout from "./common/AppLayout";
import StoryHolic from "./features/Storyholic/StoryHolic";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="stories/:slug/">
            {/* <Route path="/" element={<ReadingPage />}></Route> */}
            <Route path=":chapter" element={<ReadingPage />}></Route>
          </Route>

          <Route path="storyholic/:id" element={<StoryHolic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
