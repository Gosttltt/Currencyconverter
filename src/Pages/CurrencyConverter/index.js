import { useState } from 'react'
import { useSelector } from 'react-redux'
import s from './styles.module.css'

export default function CurrencyConverter() {
    let currency = useSelector(state => state.CursesReducer.currency)

    let [localCurrency, setLocalCurrency] = useState('')
    let [localCurrencyCalculeted, setLocalCurrencyCalculeted] = useState({ value: 0, currency: '' })

    let currencyValueHandler = () => {
        try {
            let arrValueCurrency = localCurrency.split(' ')
            let valueCurrency = Number(arrValueCurrency[0])
            let fromCurrency = arrValueCurrency[1].toUpperCase()
            let inCurrency = arrValueCurrency[3].toUpperCase()
            let calculatedValue = valueCurrency * currency[fromCurrency] / currency[inCurrency]
            calculatedValue = (parseInt(calculatedValue * 100)) / 100
            setLocalCurrencyCalculeted({ value: calculatedValue, currency: inCurrency })
        }
        catch (error) {
            setLocalCurrencyCalculeted({ ...localCurrencyCalculeted, value: NaN })
        }

    }

    return (
        <div className={s.CurrencyConverterPageBox}>
            <div className={s.text}>Напишите сколько и из какой валюты в какую вы хотите посчитать и нажмите кнопку "Сalculate"</div>
            <div className={s.example}>Пример: 15 usd in rub</div>
            <div className={s.inputAndButtonBox}>
                <input className={s.input} onChange={e => setLocalCurrency(e.target.value)} value={localCurrency} placeholder="Пример: 10 euro in usd" />
                <button className={s.calculateButon} onClick={currencyValueHandler}>Сalculate</button>
            </div>
            {
                isNaN(localCurrencyCalculeted.value) ?
                    <div className={s.error}>Введите запрос как в примере: 250 euro in usd</div> :
                    <div className={s.currencyCalculetedBox}> Result: {localCurrencyCalculeted.value} {localCurrencyCalculeted.currency}</div>
            }
        </div>
    )

}
