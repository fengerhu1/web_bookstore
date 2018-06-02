/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';

import Head from './Head';
import Commoncolumn from './Commoncolumn';
import Footer from './Footer';
import Shopcar from './Shopcar'

class Shopcarhome extends Component {
    render() {
        return (
            <div>
                <Head />
                <Commoncolumn/>
                <Shopcar/>
                <Footer/>
            </div>
        );
    }
}

export default Shopcarhome;