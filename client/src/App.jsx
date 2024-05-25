import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReadingPage from "./shared/pages/reading-page";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="stories/:slug/">
          <Route path=":chapter" element={<ReadingPage />}></Route>
        </Route>
      </Routes>
      
    </BrowserRouter> 
  );
}

export default App;
