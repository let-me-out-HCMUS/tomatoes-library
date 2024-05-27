import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReadingPage from "./shared/pages/reading-page";
import Home from "./features/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="stories/:slug/">
          <Route path=":chapter" element={<ReadingPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
