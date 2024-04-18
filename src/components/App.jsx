import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "pages/HomePage/HomePage";
import { useDispatch } from "react-redux";
import { getFirstPageAdvertsThunk, getTotalAdvertsThunk } from "store/camper/camperThunk";

const Catalog = lazy(() => import('pages/Catalog/Catalog'))
const Favorites = lazy(()=>import('pages/Favorites/Favorites'))
// const Features = lazy(() => import('./Features/Features'))
// const Reviews = lazy(() => import('./Reviews/Reviews'))

export const App = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {

    dispatch(getTotalAdvertsThunk())
    dispatch(getFirstPageAdvertsThunk())

}, [dispatch])
  
  // const isLoading = useSelector(isLoadingSelector)

  //Потрібно зробити сторінку фаворіт, а на ній модалку в якій вже є відміності.??
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />}>
            {/* <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} /> */}
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
