import { GoodsItem } from "./GoodsItem";

const GoodsList = (props) => {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => (
                <GoodsItem
                    key={item.displayName}
                    id={item.mainId}
                    name={item.displayName}
                    description={item.displayDescription}
                    price={item.price.regularPrice}
                    img={item.displayAssets[0].url}
                    addToBasket={addToBasket}
                />
            ))}
        </div>
    );
};

export { GoodsList }; 