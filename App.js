import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserCreate from './pages/user/create';
import UserIndex from './pages/user/index';
import UserShow from './pages/user/show';

import UserEdit from './pages/user/edit';
import LoginPage from './pages/authentication/login';

import './assets/css/boostrap_min.css';
import './assets/css/bs_css_public.css';
import DashboardAdmin from './pages/dashboard/admin';
import AppointmentCreate from './pages/appointment/create';
import AppointmentIndex from './pages/appointment';
import AppointmentEdit from './pages/appointment/edit';
import SpecializationCreate from './pages/specialization/create';
import SpecializationIndex from './pages/specialization';
import SpecializationEdit from './pages/specialization/edit';
import ServiceIndex from './pages/services';
import ServiceCreate from './pages/services/create';
import ServiceEdit from './pages/services/edit';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        <Route path='/users'>
          <Route path='index' element={<UserIndex></UserIndex>}></Route>
          <Route path='create' element={<UserCreate></UserCreate>}></Route>
          <Route path='edit/:id' element={<UserEdit></UserEdit>}></Route>
          <Route path='show/:id' element={<UserShow></UserShow>}></Route>
        </Route>

        <Route path='/specialization'>
          <Route path='index' element={<SpecializationIndex></SpecializationIndex>}></Route>
          <Route path='create' element={<SpecializationCreate></SpecializationCreate>}></Route>
          <Route path='edit/:id' element={<SpecializationEdit></SpecializationEdit>}></Route>
          <Route path='show' element={<UserShow></UserShow>}></Route>
        </Route>

        <Route path='/services'>
          <Route path='index' element={<ServiceIndex></ServiceIndex>}></Route>
          <Route path='create' element={<ServiceCreate></ServiceCreate>}></Route>
          <Route path='edit/:id' element={<ServiceEdit></ServiceEdit>}></Route>
          <Route path='show' element={<UserShow></UserShow>}></Route>
        </Route>

        <Route path='/appointments'>
          <Route path='index' element={<AppointmentIndex></AppointmentIndex>}></Route>
          <Route path='create' element={<AppointmentCreate></AppointmentCreate>}></Route>
          <Route path='edit/:id' element={<AppointmentEdit></AppointmentEdit>}></Route>
          <Route path='show' element={<UserShow></UserShow>}></Route>
        </Route>

        <Route path='/authenticate'>
          <Route path='login' element={<LoginPage></LoginPage>}></Route>
          <Route path='logout' element={<UserCreate></UserCreate>}></Route>
        </Route>
        
        <Route path='/dashboard'>
          <Route path='admin' element={<DashboardAdmin></DashboardAdmin>}></Route>
          <Route path='staff' element={<UserCreate></UserCreate>}></Route>
          <Route path='client' element={<UserCreate></UserCreate>}></Route>
        </Route>
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
