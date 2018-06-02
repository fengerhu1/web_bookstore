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
import Shufflingbox from './Shufflingbox'
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