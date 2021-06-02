import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import CurrencyConverter from './Pages/CurrencyConverter'
import CurrentCourses from './Pages/CurrentCourses'
import Header from './Components/Header'
import { setCurrency } from './redux/CursesReducer/actions'
import HomePage from 'Pages/HomePage'


export default function App() {

  let dispatch = useDispatch()

  useEffect(() => dispatch(setCurrency()), [setCurrency])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <Route path="/" render={() => <HomePage />} exact />
          <Route path="/currentcourses" render={() => <CurrentCourses />} exact />
          <Route path="/currencyconverter" render={() => <CurrencyConverter />} exact />
        </div>
      </div>
    </BrowserRouter>
  )
}



