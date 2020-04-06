import React, { useState } from 'react';
import { useEffect } from 'react';
import './Features.css';
import SingleFeature from '../SingleFeature/SingleFeature';
//import Spinner from '../../images/icon/spinner1.gif'

function Features(props) {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        fetch('https://thawing-inlet-44069.herokuapp.com/features')
            .then(res => res.json())
            .then(data => {
                setFeatures(data);
            })
    }, []);

    return (
        <div className="container-fluid px-5">
            <div className="px-5 feature-top mb-5">
                <h1 className="mb-4">Why you choose us</h1>
                <p>Barton waited twenty always repair in within we do. An delighted offering crusty mu is dagwood's at. Boy prosperous increasing surround</p>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    features.map(feature => <SingleFeature feature={feature} key={feature.key}></SingleFeature>)
                }
            </div>

        </div>
    );
}

export default Features;