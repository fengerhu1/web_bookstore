/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import Module1 from './Module1';
import Module2 from './Module2';
import Module3 from './Module3';
import Head from './Head';
import Column from './Column';
import Footer from './Footer';
import Shufflingbox from './Shufflingbox';
import ECharts  from './ECharts ';
import Search from './Search';
var headers = ["Book", "Author", "Language", "Published", "Sales","buy"];
var data = [
    ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954-1955", "150","0"],
    ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943",
        "140","1"],
    ["Harry Potter and the Philosopher", "J. K. Rowling", "English", "1997", "107","2"],
    ["And Then There Were None", "Agatha Christie", "English", "1939", "100","3"],
    ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754-1791", "100","4"],
    ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100","5"],
    ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100","6"],
];
window.initarr = [
    ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954-1955", "150","0"],
    ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943",
        "140","1"],
    ["Harry Potter and the Philosopher", "J. K. Rowling", "English", "1997", "107","2"],
    ["And Then There Were None", "Agatha Christie", "English", "1939", "100","3"],
    ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754-1791", "100","4"],
    ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100","5"],
    ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100","6"],
];
window.shoppingcart = [];
window.persondata = [];
window.persondata1 = [];
window.picshow="data:image/jpeg;base64,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";
window.admin = 0;
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {reflash:0,
        data1:[]};
        //this.click_1 = this.click_1.bind(this);
    }
    componentWillMount() {

            /*var self1 = this;
            var xmlhttp1;
            if (window.XMLHttpRequest) {
                //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
                xmlhttp1 = new XMLHttpRequest();
            }
            xmlhttp1.onreadystatechange = function () {
                if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
                    window.persondata = JSON.parse(xmlhttp1.responseText)
                    console.log("window.persondata")
                    console.log(window.persondata)
                }
            }

            xmlhttp1.open("GET", "/personback", false);
            xmlhttp1.send();*/
    }

    render() {
        console.log("render")
        console.log(this.state.data1);
        return (
            <div>
                <Head />
                <Column/>
                <Shufflingbox/>
                <Module1/>
                <Module3/>
                <Module2 initialData= {this.state.data1} headers= {headers}/>
                <Footer/>
            </div>
        );
    }
}

export default Home;