import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div style={{ border: "2px solid #333333",  
                    backgroundColor: "#aaaaaa",
                    padding: "12px"}}>
                       <Link to="/stocks">Stocks</Link>
                       <Link to="/about">About</Link>
                    </div>
    )
}

export default Navigation;