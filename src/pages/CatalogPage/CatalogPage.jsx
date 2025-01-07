import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getCampers } from "../../redux/campers/operations.js";
import { setPage } from "../../redux/campers/slice.js";
import DocumentTitle from "../../components/DocumentTitle.jsx";
import { CamperList } from "../../components/CamperList/CamperList.jsx";
import { CatalogForm } from "../../components/CatalogForm/CatalogForm.jsx";
import { Toaster } from "react-hot-toast";

import {
  selectPage,
  selectTotal,
  selectLimit,
  selectCamperList,
  selectIsError,
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
  const campers = useSelector(selectCamperList);
  const isNothingFind = useSelector(selectIsError);
  let isLoadMore = !(page === Math.ceil(total / limit)) && !isNothingFind;
  const trueValues = removeFalsyValues(filterValues);
  const filter = renameProperties(trueValues, {
    aC: "AC",
    tV: "TV",
    vehicleType: "form",
  });
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(total / limit)) {
      dispatch(setPage(newPage));
    }
  };

  useEffect(() => {
    if (
      JSON.stringify(Object.fromEntries(searchParams)) !==
      JSON.stringify(filter)
    ) {
      setSearchParams({ ...filter });
    }
    if (Object.keys(filter).length > 0) {
      dispatch(getCampers({ page, limit, filters: filter }));
    }
    if (campers.length === 0 && Object.keys(filter).length === 0) {
      dispatch(getCampers({}));
    }
  }, [dispatch, filterValues]);

  useEffect(() => {
    if (page > 1) {
      dispatch(getCampers({ page, limit, filters: filter }));
    }
  }, [dispatch, page, limit]);

  return (
    <div className={`${css.container} container`}>
      <DocumentTitle>Catalog</DocumentTitle>
      <Toaster />
      {isLoading && <Loader />}
      <CatalogForm></CatalogForm>
      <div className={css.wrapper}>
        <CamperList></CamperList>
        {isLoadMore && (
          <button
            className={css.button}
            type="button"
            onClick={() => {
              handlePageChange(page + 1);
            }}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
