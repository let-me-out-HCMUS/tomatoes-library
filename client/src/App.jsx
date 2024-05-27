import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReadingPage from "./shared/pages/reading-page";
import Home from "./shared/pages/Home";
import AppLayout from "./common/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="stories/:slug/">
            <Route path=":chapter" element={<ReadingPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
