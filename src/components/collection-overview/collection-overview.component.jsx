import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collection-overview.styles.scss';
import { PreviewCollection } from '..';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => {
    console.log(collections);
    return (
        <div className="collections-overview">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))
        }
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});
  

export default connect(mapStateToProps)(CollectionOverview);