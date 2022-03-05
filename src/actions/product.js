export const requestGetPagination = (keyword, pageSize) => {

    // call api va lay du lieu
    var model = { PageSize: pageSize, PageIndex: 1, KeyWord:  keyword}
    return dispatch => {
        fetch('http://study.imic.edu.vn/api/product/get-pagination', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(model)
        })
        .then(s=>s.json())
        .then((res)=> {
            if (res)
                dispatch (GetPagination(res));
        })
        .catch( (error)=>{
                //do something with error
        })
    }
}

export const GetPagination = (data) => {
    return {
        type: 'GET_PAGINATION',
        payload: data
    }
}

// lay san phan chi tiet

export const requestGetProductID = (id) => {
    return dispatch => {
        fetch(`http://study.imic.edu.vn/api/product/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        })
        .then(s=>s.json())
        .then((res)=> {
            if (res)
                dispatch (GetProductDetail(res));
        })
        .catch( (error)=>{
                //do something with error
        })
    }
}

export const GetProductDetail = (data) => {
    return {
        type: 'GET_PRODUCT_DETAIL',
        payload: data
    }
}