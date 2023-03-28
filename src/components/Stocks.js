import stocks from "./data";
import { Link } from "react-router-dom";

function Stocks() {

    return(
        <div>

           {stocks.map(stock=> {
            return (
                <ul><Link to={`/stocks/${stock.symbol}`}>{stock.name}</Link></ul>
                
            )

           })} 
        </div>
    )
};

export default Stocks;

