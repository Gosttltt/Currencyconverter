import api from 'API/api'
import { SET_BASE_CURRENCY, SET_CURRENCY, SET_IN_CURRENCY } from './const'

export const setBaseCurrency = (baseCurrency) => ({ type: SET_BASE_CURRENCY, baseCurrency })
export const setInCurrency = (inCurrency) => ({ type: SET_IN_CURRENCY, inCurrency })
export const setCurrency = () => async (dispatch) => {
    let data = await api.setCurrency()
    dispatch({ type: SET_CURRENCY, currencies: data })
}

