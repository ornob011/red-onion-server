import React, { useEffect } from 'react';
import './Items.css';
import { useState } from 'react';
import SingleItem from '../SingleItem/SingleItem';
import { Link } from 'react-router-dom';

const Items = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://thawing-inlet-44069.herokuapp.com/items')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [])
    const cart = props.cart;
    const itemKeys = Object.keys(cart);
    const [category, setCategory] = useState('breakfast');
    const categoryHandler = (category) => {
        setCategory(category);
    }
    return (
        <div className="container-fluid mt-4">
            <div className="navbar-expand category-nav ">
                <ul className="navbar-nav justify-content-center">
                    <li className="nav-item">
                        <button onClick={() => categoryHandler('breakfast')} className={category === 'breakfast' ? "focus-button" : ""}>Breakfast</button>
                    </li>
                    <li className="nav-item ml-5">
                        <button onClick={() => categoryHandler('lunch')} className={category === 'lunch' ? "focus-button" : ""}>Lunch</button>
                    </li>
                    <li className="nav-item ml-5">
                        <button onClick={() => categoryHandler('dinner')} className={category === 'dinner' ? "focus-button" : ""}>Dinner</button>
                    </li>
                </ul>
            </div>
            <div className="d-flex flex-wrap justify-content-center mt-4">
                {
                    items.map((item) => {
                        return (
                            item.category === category &&
                            <SingleItem item={item} key={item.key} />
                        )
                    })
                }
            </div>
            <div className="text-center my-5">
                {
                    itemKeys > 0 ?
                        <Link to="/order">
                            <button className="btn btn-danger btn-secondary">Check Out Your Food</button>
                        </Link>
                        :
                        <button disabled className="btn btn-secondary">Check Out Your Food</button>
                }
            </div>
        </div>
    );
};

export default Items;