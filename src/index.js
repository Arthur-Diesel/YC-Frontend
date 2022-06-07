import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Pages/Home/Home';
import { Tshirts } from './Pages/Tshirts/Tshirts';
import { Hoodies } from './Pages/Hoodies/Hoodies';
import { Jackets } from './Pages/Jackets/Jackets';
import { Pants } from './Pages/Pants/Pants'
import { Accessories } from './Pages/Accessories/Accessories';
import { IdTest } from './Pages/idTest';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tshirts" element={<Tshirts />} />
      <Route path="/tshirts/:id" element={<IdTest />} />
      <Route path="/hoddies" element={<Hoodies />} />
      <Route path="/hoddies/:id" element={<IdTest />} />
      <Route path="/jackets" element={<Jackets />} />
      <Route path="/jackets/:id" element={<IdTest />} />
      <Route path="/pants" element={<Pants />} />
      <Route path="/pants/:id" element={<IdTest />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/accessories/:id" element={<IdTest />} />
    </Routes>
   </BrowserRouter>
);