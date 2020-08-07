import React from 'react';

import './directory.styles.scss';
import { sections } from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

export default class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: sections
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, id, imageUrl, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}></MenuItem>
                    ))
                }
            </div>
        );
    }
}