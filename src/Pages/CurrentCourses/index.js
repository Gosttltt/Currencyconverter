import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setBaseCurrency } from 'redux/CursesReducer/actions'
import s from './styles.module.css'

export default function CurrentCourses() {

    let dispatch = useDispatch();

    let baseCurrency = useSelector(state => state.CursesReducer.baseCurrency)
    let currency = useSelector(state => state.CursesReducer.currency)

    let arrBaseCurrency = []
    let arrCurrencyBlock = []

    for (let key in currency) {
        key !== baseCurrency &&
            arrBaseCurrency.push(<div key={key} onClick={() => dispatch(setBaseCurrency(key))}>{key}</div>) &&
            arrCurrencyBlock.push(
                <CurrencyBlock
                    key={key}
                    currency={key}
                    baseCurrency={baseCurrency}
                    baseCurrencyValue={currency[baseCurrency]}
                    currencyValue={currency[key]}
                />
            )
    }

    return (
        <div className={s.CurrentCoursesPageBox}>
            {arrCurrencyBlock}
            <div className={s.baseCurrencyBox}>
                <div className={s.baseCurrencyText}>Base currency:</div>
                <div className={s.baseCurrencySelectedBlock}>
                    <button className={s.baseCurrencyButton}>{baseCurrency}</button>
                    <div className={s.baseCurrencySelectedBox}>
                        {arrBaseCurrency}
                    </div>
                </div>
            </div>
        </div>
    )
}

function CurrencyBlock({ currency, baseCurrency, currencyValue, baseCurrencyValue }) {

    let [localCurrencyValue, setLocalCurrencyValue] = useState(1)

    let calculatedValue = localCurrencyValue * currencyValue / baseCurrencyValue
    calculatedValue = (parseInt(calculatedValue * 100)) / 100

    return (
        <div className={s.currencyBox}>
            <button className={s.buttonCurrency}>
                {currency}
            </button>
            <input
                value={localCurrencyValue}
                className={s.currencyValue}
                placeholder="Введите число"
                onChange={e => setLocalCurrencyValue(e.target.value)}
            />
            <div className={s.calculatedResultBox}>
                {isNaN(calculatedValue) ?
                    <div className={s.currencyValueError}>Введите число</div> :
                    <><div className={s.calculatedValue}>= {calculatedValue}</div><div>{baseCurrency}</div></>}
            </div>
        </div>
    )
}
