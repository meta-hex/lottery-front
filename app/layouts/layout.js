import PropTypes from 'prop-types';
import Header from '../containers/Header';
import React from 'react';

const Layout = ({children, theme}) => {
    return (
        <React.Fragment>
            <Header theme={theme}/>
            {children}
        </React.Fragment> 
    );
}

Layout.prototype = {
    children: PropTypes.any,
    theme: PropTypes.string
};

export default Layout;