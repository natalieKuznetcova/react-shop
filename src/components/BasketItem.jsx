
const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incItem = Function.prototype,
        decItem = Function.prototype
    } = props;

    return (
        <li className="collection-item black-text">
            {name}
            <i className="material-icons basket-quantity" onClick={() => decItem(id)}>remove</i>
            {quantity}
            <i className="material-icons basket-quantity" onClick={() => incItem(id)}>add</i>
            = {quantity ? price * quantity : price}
            <span className="secondary-content" onClick={() => removeFromBasket(id)}>
                <i className="material-icons basket-delete">clear</i>
            </span>
        </li>
    );
};

export { BasketItem };