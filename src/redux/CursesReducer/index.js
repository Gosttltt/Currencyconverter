import { SET_BASE_CURRENCY, SET_CURRENCY, SET_IN_CURRENCY } from './const'

let initialState = {
    currency: {
        EURO: 0,
        USD: 0,
        RUB: 1,
    },
    baseCurrency: 'RUB',
    inCurrency: 'EURO'
}

const CursesReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_BASE_CURRENCY:
            return { ...state, baseCurrency: action.baseCurrency }

        case SET_CURRENCY:
            return { ...state, currency: { ...state.currency, ...action.currencies } }

        case SET_IN_CURRENCY:
            return { ...state, inCurrency: action.inCurrency }

        default:
            return state
    }
}

export default CursesReducer