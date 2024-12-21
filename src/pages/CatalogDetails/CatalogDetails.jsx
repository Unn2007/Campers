import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import DocumentTitle from "../../components/DocumentTitle.jsx";


export  const CatalogDetails = () => {
    return (
    <div className={`${css.container} container`}>
      <DocumentTitle>Details</DocumentTitle>
    
    <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>);
  }