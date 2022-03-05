import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

Product.propTypes = {
};

function Product(props) {
    const {product} = props;
    return (
        <div>
            <h4>{ product.productName }</h4>
            <Link to={`/chi-tiet-san-pham/${product.productId}`}>Xem chi tiet</Link>
        </div>
    );
}

export default Product;