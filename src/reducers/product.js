// lay san pham theo trang

const initialState = {list: [], productDetail: {}};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PAGINATION':
        {
            return {
                ...state,
                list: action.payload
            }
        }
        case 'GET_PRODUCT_DETAIL':
        {
            return {
                ...state,
                productDetail: action.payload
            }
        }
        default:
        {
            return {
                ...state
            }
        }
    }
}