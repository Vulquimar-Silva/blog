import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Main} from "./pages/Main"
import {Article} from "./pages/Article"

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Main />} />
      <Route path="/articles/:id" element={<Article />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes;