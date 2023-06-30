import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar'
import Loader from 'components/Loader';

const Layout = () => {
  return (
    <>
    <AppBar />    
      <main>        
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        {/* <Toaster position="bottom-right" /> */}
      </main>
    </>
  );
};

export default Layout;
