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
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
import { AboutMe } from './Pages/AboutMe/AboutMe'
import 'bootstrap-icons/font/bootstrap-icons.css'

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/aboutme/:id" element={<AboutMe />} />
      {/* <Route path="/orders/:id" element={<Orders />} /> */}
      <Route path="/tshirts" element={<Tshirts />} />
      {/*  <Route path="/tshirts/:id" element={< />} /> */}
      <Route path="/hoddies" element={<Hoodies />} />
      {/* <Route path="/hoddies/:id" element={< />} /> */}
      <Route path="/jackets" element={<Jackets />} />
      {/* <Route path="/jackets/:id" element={< />} /> */}
      <Route path="/pants" element={<Pants />} />
      {/* <Route path="/pants/:id" element={< />} /> */}
      <Route path="/accessories" element={<Accessories />} />
      {/* <Route path="/accessories/:id" element={< />} /> */}
    </Routes>
   </BrowserRouter>
);