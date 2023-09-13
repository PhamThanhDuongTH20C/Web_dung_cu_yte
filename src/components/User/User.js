import React from 'react';
import HeaderUS from './Header/HeaderUS';
import FooterUS from './Footer/FooterUS';
import Home from './Home/Home';
import Login from '../Login/Login'
import Category from './Category/Category'
import Address  from './Address/Address';
import DetailOrder from './Detail_order/detail_order';
import Register from '../Register/Register';
import DetailProduct from '../User/DetailProduct/DetailProduct'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
const User = () => {
    return (
        <div id='wrapper'>
            <HeaderUS />
            <div id='main'>
                <div id='content' className='content-area page-wrapper'>
                    <Routes>
                        <Route path='/' exact element={<Home />} />
                          <Route path='/Login' element={<Login />} />
                          <Route path='/Category' element={<Category />} />
                          <Route path='/Address' element={<Address />} />
                          <Route path='/DetailOrder' element={<DetailOrder/>} />
                          <Route path='/Register' element={<Register/>} />
                          <Route path='/DetailProduct' element={<DetailProduct/>} />
                    </Routes>
                    {/* <CardUS /> */}
                </div>
            </div>
            <FooterUS />
        </div>
    )
}

export default User