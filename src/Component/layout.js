import React from 'react';
import PropTypes from 'prop-types';
import Home from './home';
import {Link, Routes, Route} from 'react-router-dom';
import ProductDetail from './productDetail';

Layout.propTypes = {
    
};

function Layout(props) {
    return (
        <div>
            <ul>
                <Link to = "/" >Home</Link>
            </ul>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/chi-tiet-san-pham/:id' 
                element={<ProductDetail></ProductDetail>}></Route>
            </Routes>
        </div>
    );
}

export default Layout;