/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';

import Head from './Head';
import Ordercolumn from './ordercolumn';
import Footer from './Footer';
import Order from './Order'

class Orderhome extends Component {
    render() {
        return (
            <div>
                <Head />
                <Ordercolumn/>
                <Order/>
                <Footer/>
            </div>
        );
    }
}

export default Orderhome;