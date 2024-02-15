import { Routes,Route } from "react-router-dom";
import {MovieDetails,MovieList,PageNotFound,Search} from "../pages/index"

const AllRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="home" element={<MovieList/>}></Route>
      <Route path="popular" element={<MovieList/>}></Route>
      <Route path="top-rated" element={<MovieList/>}></Route>
      <Route path="upcoming" element={<MovieList/>}></Route>
      <Route path="search" element={<Search/>}></Route>
      <Route path=":id" element={<MovieDetails/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes