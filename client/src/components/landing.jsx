import "./landing.css"
import { Link } from "react-router-dom";


function Landing() {
    return (
        <div className="div-home">
            
            <h2 className="h1">
            <Link to="/home" className="h1-link">Home</Link> 
            </h2>
        </div>
    );
}
export default Landing