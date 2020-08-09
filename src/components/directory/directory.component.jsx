import React from 'react';

import './directory.styles.scss';
import { sections } from './directory.data';
import {MenuItem} from '..';

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
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps}></MenuItem>
                    ))
                }
            </div>
        );
    }
}