import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {requestGetProductID} from '../actions/product';
import { useSelector, useDispatch } from 'react-redux';

ProductDetail.propTypes = {
    
};

function ProductDetail(props) {
    const { id } = useParams();
    useEffect (
        () => {
            const action = requestGetProductID(id);
            dispatch (action);
        },  [id]
    )
    const productDetail = useSelector(state => state.product.productDetail);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Product Name: {productDetail.productName} </h3>
            <p>Price: {productDetail.price}</p>
            <p>Description: {productDetail.content}</p>
            <img src = {productDetail.image}></img>
        </div>
    );
}

export default ProductDetail;