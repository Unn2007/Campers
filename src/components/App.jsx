import { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout.jsx";
import { CatalogDetails } from "../pages/CatalogDetails/CatalogDetails.jsx";
import NotFoundPage from "../pages/NotFounPage/NotFounPage.jsx";
import Reviews from "./Reviews/Reviews.jsx";
const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage.jsx"));

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />

        <Route path="/catalog:id" element={<CatalogDetails />}>
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};
