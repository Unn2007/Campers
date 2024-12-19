import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';


export  const CatalogDetails = () => {
    return <>
    <div>Details</div>
    <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>;
  }