import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBaseCurrency, setInCurrency } from 'redux/CursesReducer/actions'
import s from './style.module.css'

export default function HomePage() {

    let [inputValue, setInputValue] = useState(1)
    let dispatch = useDispatch()

    let baseCurrency = useSelector(state => state.CursesReducer.baseCurrency)
    let currencys = useSelector(state => state.CursesReducer.currency)
    let inCurrency = useSelector(state => state.CursesReducer.inCurrency)

    let calculeted = currencys[baseCurrency] * inputValue / currencys[inCurrency]
    calculeted = (parseInt(calculeted * 10000)) / 10000
    let setBaseCurrencys = (cur) => {
        dispatch(setBaseCurrency(cur))
    }
    let setInCurrencys = (cur) => {
        dispatch(setInCurrency(cur))
    }

    return (
        <div className={s.homePageBox}>
            <div className={s.h1}>Курсы валют</div>
            <div className={s.convertorBox}>
                <div className={s.h2}>Конвертор валют</div>
                <div className={s.inputsBox}>
                    <InputCurrency setCurrency={setBaseCurrencys} text="У меня есть" currencyName={baseCurrency} />
                    <InputCurrency setCurrency={setInCurrencys} text="Хочу преобрести" currencyName={inCurrency} />
                </div>
                <div className={s.calculatedBox}>
                    <input className={s.calculatedValue} value={inputValue} onChange={e => setInputValue(e.target.value)} />
                    <div className={s.resultBox}>
                        <div className={s.resultText}>Итого</div>
                        {isNaN(calculeted) ?
                            <div className={s.error}>Введите число</div> :
                            <div className={s.result}>{calculeted} <span>{inCurrency}</span></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function InputCurrency({ text, currencyName, setCurrency }) {

    let currencys = useSelector(state => state.CursesReducer.currency)
    let currencysArr = []
    for (let key in currencys) {
        key !== currencyName &&
            currencysArr.push(<div key={key} onClick={() => setCurrency(key)} className={s.currencyItem}>{key}</div>)
    }

    return (
        <div className={s.inputCurrencyBox}>
            <div className={s.inputCurrencyText}>{text}</div>
            <div className={s.hoverBox}>
                <div className={s.inputCurrency}>{currencyName}</div>
                <div className={s.allCurrencys}>
                    {currencysArr}
                </div>
            </div>
        </div>
    )
}