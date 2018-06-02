/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import './static/css/screen.css';
import pic4 from './static/img/pic4.jpg'
import pic5 from './static/img/pic6.png'

const bg = {

    background: "url("+"http://static.ghostchina.com/image/6/d1/fcb3879e14429d75833a461572e64.jpg"+")",
};
const ag = {

    background: "url("+pic4+")",
    height:"200px"
};
const cp={
    position:"relative",
    top:"30px",

}
class Head extends Component {
    constructor(props) {
        super(props);
        console.log("head constructor");

    }
    render() {
        console.log("head");
        return (
            <header className="main-header"  style ={ag}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">

                            <div className="branding" href="http://www.ghostchina.com" title="booooooks"></div>
                            <h2 className="text-hide">Ghost 是一个简洁、强大的写作平台。你只须专注于用文字表达你的想法就好，其余的事情就让 Ghost 来帮你处理吧。</h2>

                            <img src="http://static.ghostchina.com/image/6/d1/fcb3879e14429d75833a461572e64.jpg" alt="Ghost 博客系统" className="hide"/>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Head;