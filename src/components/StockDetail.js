import { useParams } from 'react-router-dom';
import stocks from "./data"

function StockDetail() {
  const params = useParams();
  const symbol = params.symbol;
  const stock = stocks.find((stock) => stock.symbol === symbol);
  return (
    <div>
      <h1>Name: {stock.name}</h1>
      <h4>Price: {stock.lastPrice}</h4>
    </div>
  )
}

export default StockDetail;