let API = {
    setCurrency: async () => {
        let data = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        let resp = await data.json()
        return {
            EURO: resp.Valute.EUR.Value,
            USD: resp.Valute.USD.Value
        }
    }
}
export default API