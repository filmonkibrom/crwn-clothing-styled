import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import ItemMenu from '../item-menu/item-menu.component';
import './directory.styles.scss';

const Directory =({sections}) => (
            <div className = 'directory-menu'>
                {sections.map(({id,...otherSerctionProps }) => (
                    <ItemMenu key={id} {...otherSerctionProps} />
                ))}
            </div>
    );

    const mapToProps= createStructuredSelector({
        sections: selectDirectorySections
    });
export default connect(mapToProps)(Directory);