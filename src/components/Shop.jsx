import { useEffect, useState } from "react";
import { API_KEY, API_URL } from '../config';

import { GoodsList } from "./GoodsList";
import { Preloader } from "./Preloader";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";


const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
        setAlertName(item.name);
    };

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId)
        setOrder(newOrder)
    };

    const incItem = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    }

    const decItem = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                }
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    const closeAlert = () => {
        setAlertName('');
    };

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        })
            .then(respons => respons.json())
            .then(data => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            })
    }, []);

    return (
        <div className="container content">
            <Cart
                quantity={order.length}
                handleBasketShow={handleBasketShow}
            />
            {
                loading ? (
                    <Preloader />
                ) : (
                    <GoodsList goods={goods} addToBasket={addToBasket}
                    />
                )}
            {
                isBasketShow && (
                    <BasketList
                        order={order}
                        handleBasketShow={handleBasketShow}
                        removeFromBasket={removeFromBasket}
                        incItem={incItem}
                        decItem={decItem}
                    />
                )}
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert} />
            }
        </div>
    )

};

export { Shop };