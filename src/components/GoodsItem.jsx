
const GoodsItem = (props) => {
    const {
        id,
        name,
        description,
        price,
        img,
        addToBasket = Function.prototype,
    } = props;

    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={img} alt={name} />
                </div>
                <div className="card-content">
                    <span className="card-title">{name}</span>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <button className="btn" onClick={() => addToBasket({
                        id,
                        name,
                        price
                    })
                    }
                    >
                        Buy</button>
                    <span className="right" style={{ fontSize: '1.8rem' }}>{price} coin</span>
                </div>
            </div>
        </>
    );
};

export { GoodsItem };