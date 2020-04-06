import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ItemDetail.css';
import Item from './Item';
import notFound from '../../images/order/no_item_found.png';


const ItemDetail = (props) => {
    const { itemKey } = useParams();
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch('https://thawing-inlet-44069.herokuapp.com/item/' + itemKey)

            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
            .catch(err => {
                setError(err.message);

            })
    }, [itemKey])



    return (
        <div className="container my-5 py-5">
            {
                error &&
                <div className="container my-5 text-center">
                    <img src={notFound} alt="" />
                    <h3 className="mt-5">Please go to <Link to="/">
                        <button className="btn btn-success">HOME</button>
                    </Link> and add some item</h3>
                </div>
            }
            {
                item ?
                    <Item item={item} itemKey={itemKey} cartHandler={props.cartHandler} />
                    :
                    <div className="text-center">
                    </div>
            }
        </div>
    );
};

export default ItemDetail;
