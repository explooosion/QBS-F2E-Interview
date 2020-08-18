import axios from 'axios';

import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../reducers/products';

/**
 * 取得所有產品
 */
export const getProducts = () => async dispatch => {
  await dispatch({ type: FETCH_PRODUCTS });
  await axios
    .get('./api/getProducts.json')
    .then(res => dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data }))
    .catch(res => dispatch({ type: FETCH_PRODUCTS_ERROR, payload: res }))
}
