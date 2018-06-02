/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';

import Head from './Head';
import Starcolumn from './Starcolumn';
import Footer from './Footer';
import './Personaldata'
import Personaldata from "./Personaldata";
class Personcaldatahome extends Component {
    render() {
        return (
            <div>
                <Head />
                <Personaldata/>
                <Footer/>
            </div>
        );
    }
}

export default Personcaldatahome;