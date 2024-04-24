import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "pages/HomePage/HomePage";

const Catalog = lazy(() => import('pages/Catalog/Catalog'))
const Favorites = lazy(()=>import('pages/Favorites/Favorites'))

export const App = () => {

  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />}>
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
