import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Housing from './pages/Housing/Housing';
import Error404 from './pages/Error/Error404';
import Layout from './components/Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/housing/:houseId" element={<Housing/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
