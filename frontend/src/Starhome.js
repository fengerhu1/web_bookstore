/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';

import Head from './Head';
import Starcolumn from './Starcolumn';
import Footer from './Footer';
import Shufflingbox from './Shufflingbox'
import Star from './Star';

class Starhome extends Component {
    render() {
        return (
            <div>
                <Head />
                <Starcolumn/>
                <Star/>
                <Footer/>
            </div>
        );
    }
}

export default Starhome;