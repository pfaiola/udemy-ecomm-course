import React from 'react';
import { Route } from 'react-router-dom';

import {CollectionOverview} from '../../components';
import { CollectionPage } from '..';


const ShopPage = ({ match }) => {
    console.log("Shop Page");
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
};

export default ShopPage