import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shell from "./components/Shell";
import MoviesPage from "./components/MoviesPage";
import MovieDetailPage from "./components/MovieDetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;