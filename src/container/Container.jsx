import React, { useEffect, useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AllBlogs from '../components/blogs/AllBlogs';
import Blogspage from '../components/blogs/Blogspage';
import { ClipLoader } from 'react-spinners';
import AdminLayout from './AdminLayout';

const Redirector = () => {
  const location = useLocation();
  const targetURL = `https://hcvatron.com${location.pathname}${location.search}`;
  useEffect(() => {
    window.location.replace(targetURL);
  }, [targetURL]);
  return null;
};

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[location.pathname])
}

const RouteWithLoading = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const isFirstRender = useRef(true);
    const isAdminPage = location.pathname.includes("admin");

 useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    setLoading(false);
    return;
  }

  // Only show loading for non-admin pages
  if (!isAdminPage) {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  } else {
    setLoading(false);
  }
}, [location.pathname]);


  return (
    <>
      {!isAdminPage && <Header />}
      <ScrollToTop />
      <div style={!isAdminPage ? { minHeight: '100vh' } : {}}>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <ClipLoader color="#c2410c" size={60} />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<AllBlogs />} />
            <Route path="/blogs/:blog" element={<Blogspage />} />
          </Routes>
        )}
      </div>
        {isAdminPage && <AdminLayout />}
        {!isAdminPage  && <Footer />}
    </>
  );
};

const Container = () => {
  return (
    <Router>
      <RouteWithLoading />
    </Router>
  );
};

export default Container;
