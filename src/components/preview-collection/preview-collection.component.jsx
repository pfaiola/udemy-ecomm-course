import React from 'react';

import './preview-collection.styles.scss';
import {CollectionItem} from '..';

const PreviewCollection = ({ title, items }) => (
    <div class="collection-preview">
        <h1 class="title">{ title }</h1>
        <div className="preview">
            {
                items.filter((item, index) => index < 4).map(item => (
                    <CollectionItem key={item.id} {...item} />
                ))
            }
        </div>
    </div>
)

export default PreviewCollection;