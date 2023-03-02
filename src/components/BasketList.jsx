import { BasketItem } from "./BasketItem";

const BasketList = (props) => {
    const { order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incItem = Function.prototype,
        decItem = Function.prototype } = props;

    const totalPrice = order.reduce((acc, item) => {
        return acc + item.quantity * item.price;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Basket</li>
            {
                order.length ?
                    order.map(item => (
                        <BasketItem
                            key={item.id}
                            {...item}
                            removeFromBasket={removeFromBasket}
                            incItem={incItem}
                            decItem={decItem}
                        />
                    ))
                    : <li className="collection-item">Cart is empty</li>
            }
            <li className="collection-item active list-style">
                Total cost:{totalPrice}
                <button className="secondary-content btn-small">Checkout</button>
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </ul>
    )
};

export { BasketList };