import "../index.css";
import "./CardView.css";

function CardView({image, title}) {
    return (
        <>
            <div className="card">
                <div className="bgCardText"></div>
                <h3>{title}</h3>
                <img src={image}/>
            </div>
        </>
    );
}

export default CardView;
