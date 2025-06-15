import "../index.css";

function CardView({image, title}) {
    return (
        <>
            <img src={image}/>
            <h3>{title}</h3>
        </>
    );
}

export default CardView;
