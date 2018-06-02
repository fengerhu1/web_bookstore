/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';

import Head from './Head';
import Commoncolumn from './Commoncolumn';
import Footer from './Footer';
import Bookdemo from './Bookdemo'

class Bookdemohome extends Component {
    render() {
        return (
            <div>
                <Head />
                <Commoncolumn/>
                <Bookdemo/>
                <Footer/>
            </div>
        );
    }
}

export default Bookdemohome;