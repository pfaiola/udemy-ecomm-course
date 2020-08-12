import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils.js';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection("collections");

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            updateCollections(convertCollectionsSnapshotToMap(snapshot));
      })
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
    }


    render() {
        const { match, isLoading } = this.props;
    
        return (
          <div className='shop-page'>
            <Route
              exact
              path={`${match.path}`}
              render={props => (
                <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
              )}
            />
            <Route
              path={`${match.path}/:collectionId`}
              render={props => (
                <CollectionPageWithSpinner isLoading={isLoading} {...props} />
              )}
            />
          </div>
        );
      }
} 
const mapStateToProps = ({shop: {isLoading}}) => ({
    isLoading
});;
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);