import React, { useState, useEffect } from 'react';
import Coin from './Coins.js';
import './App.scss';
import axios from 'axios';
function App() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setData(res.data);
            }).catch(error => (error));
    }, []);
     const handlSearch = (e) => {
            setSearch(e.target.value);
        }
    const filterCoins = data.filter(coins =>
        coins.name.toLowerCase().includes(search.toLowerCase())
    );
    return(
        <div className="coin-app">
            <div className="coin-search">
                <div className='title'>
                <h1 className="coin-text">search  acurrency</h1>
                </div>
                <form>
                 <input type="text" placeholder="search" className="coin-input"
                  onChange={handlSearch}/>
                </form>
            </div>
            {filterCoins.map(coins => {
                return (
                    <Coin key={coins.id}
                        image={coins.image}
                        name={coins.name}
                        symbol={coins.symbol}
                        price={coins.current_price}
                        marketcap={coins.market_cap}
                        priceChange={coins.price_change_percentage_24h}
                       volume={coins.total_volume} 
                    />
                )
            })}
        </div>
    )
}
export default App;
