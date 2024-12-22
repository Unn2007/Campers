import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getCampers } from "../../redux/campers/operations.js";
import { setPage } from "../../redux/campers/slice.js";
import DocumentTitle from "../../components/DocumentTitle.jsx";
import { CamperList } from "../../components/CamperList/CamperList.jsx";
import { CatalogForm } from "../../components/CatalogForm/CatalogForm.jsx";

import {
  selectPage,
  selectTotal,
  selectLimit,
} from "../../redux/campers/selectors.js";
import { selectFilters } from "../../redux/filters/selectors.js";
import { selectIsLoading } from "../../redux/campers/selectors.js";
import { removeFalsyValues, renameProperties } from "../../utils/utils.js";
import { Loader } from "../../components/Loader/Loader.jsx";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const total = useSelector(selectTotal);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const filterValues = useSelector(selectFilters);
  const isLoading = useSelector(selectIsLoading);
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(total / limit)) {
      dispatch(setPage(newPage));
    }
  };

  useEffect(() => {
    const trueValues = removeFalsyValues(filterValues);
    const filter = renameProperties(trueValues, {
      ac: "AC",
      tv: "TV",
      vehicleType: "form",
    });

    setSearchParams({ ...filter }),
      dispatch(getCampers({ page, limit, filters: filter }));
  }, [dispatch, filterValues, page, limit, setSearchParams]);

  return (
    <div className={`${css.container} container`}>
      <DocumentTitle>Catalog</DocumentTitle>
      {isLoading && <Loader />}
      <CatalogForm></CatalogForm>
      <div className={css.wrapper}>
        <CamperList></CamperList>
        <button
          className={css.button}
          type="button"
          onClick={() => {
            handlePageChange(page + 1);
          }}
          disabled={page === Math.ceil(total / limit)}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
