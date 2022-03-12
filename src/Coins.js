import React from 'react';
import './Coins.scss';
function Coin({image,name,symbol,volume,price,priceChange,marketcap}) {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className='coin'>
                    <img src={image} alt="loading Error" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>

            <div className="coin-data">
                <p className="coin-price"> {price}</p>
               <p>
                {priceChange < 0 ? (
                    <p className="coin-persent red">{priceChange.toFixed(2)}%</p>
                ) :(
                <p className="coin-persent green">{priceChange.toFixed(2)}%</p>
                )}
                </p>
             <p className="coin-volume">${volume.toLocaleString()}</p>
                 <p className="coin-marketcap">
                Mkt Cap :${marketcap.toLocaleString()}
                </p>
            </div>
            </div>
        </div>
    )
}
export default Coin;