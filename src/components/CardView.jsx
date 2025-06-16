import "../index.css";
import "./CardView.css";
import { Link } from "react-router-dom";

function CardView({id, image, title}) {
    return (
        <Link to=>
            <div className="card">
                <div className="bgCardText"></div>
                <h3>{title}</h3>
                <img src={image}/>
            </div>
        </>
    );
}

export default CardView;
