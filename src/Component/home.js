import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {requestGetPagination} from '../actions/product';
import {useEffect, useState} from 'react';
import Product from './product';

Home.propTypes = {
    
};

function Home(props) {
    const [kWord, setKWord] = useState('');
    const [pageSize, setPageSize] = useState(5);

    useEffect (
        () => {
            const action = requestGetPagination(kWord, pageSize);
            dispatch (action);
        },  [kWord, pageSize]
    )

    const search = (e) => {
        let value = e.target.value;
        setKWord(value);
    }

    const products = useSelector(state => state.product.list);
    const dispatch = useDispatch();
    
    const displayProduct = () => {
        return products.map((s, i) => {
            return (<Product key = {i} product={s}></Product>)
        });
    }

    const showMore = () => {
        let pageSizeNew = pageSize;
        pageSizeNew += 5;
        setPageSize(pageSizeNew);
    }

    return (
        <div>
             <input type="text" onInput={(e) => search(e)}/>
            {displayProduct()}
            <button onClick={() => showMore()}>Show more product</button>
        </div>
    );
}

export default Home;