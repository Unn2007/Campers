import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import { getCampers} from '../../redux/campers/operations.js';
import {setPage} from '../../redux/campers/slice.js'
import DocumentTitle from "../../components/DocumentTitle.jsx";
import { CamperList } from '../../components/CamperList/CamperList.jsx';
import {CatalogForm} from '../../components/CatalogForm/CatalogForm.jsx';
import {selectPage,selectTotal,selectLimit} from '../../redux/campers/selectors.js' 
import {selectFilters} from '../../redux/filters/selectors.js'
import css from './CatalogPage.module.css'
export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const total = useSelector(selectTotal);
  const page=useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const filterValues= useSelector(selectFilters)
  const handlePageChange = (newPage) => {
    
    if (newPage > 0 && newPage <= Math.ceil(total / limit)) {
      
      dispatch(setPage(newPage));
    }
  };
  function removeFalsyValues(obj) {
    return Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => Boolean(value))
    );
  }

  function renameProperties(obj, renames) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        renames[key] || key, 
        value,
      ])
    );
  }
  useEffect(() => {
    const trueValues=removeFalsyValues(filterValues);
    const filterParams = renameProperties(trueValues,{ac:"AC",tv:"TV",vehicleType:"form"});
    setSearchParams({...filterParams});
  
    
  }, [dispatch,filterValues]);

  useEffect(() => {
    const filters = Object.fromEntries([...searchParams])
    
   
  
    dispatch(getCampers({page,limit,filters}));
  }, [dispatch,filterValues,page,limit]);

  return (
    <div className={`${css.container} container`}>
      <DocumentTitle>Catalog</DocumentTitle>
      <CatalogForm></CatalogForm>
      <CamperList></CamperList>
      <button className={css.button} type="button" onClick={()=>{handlePageChange(page+1)}} disabled={page === Math.ceil(total / limit)}>Load more</button>
      
      

    </div>
  );
}
