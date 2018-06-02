/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import './static/css/shopdemo3.css';
import './static/css/shopdemo4.css';
import './static/css/shopdemo.css';
import pic1 from './static/img/pic1.jpg'
import {Link } from 'react-router-dom'


const dp={
    fontFamily:"Arial,Helvetica,sans-serif;font-size:100%",
}
const ap={
    color:"#ACEAFA"
}
const bp={
    position:"relative",
    right:"20px",

}
const cp={
    position:"relative",
    right:"5px",

}
const ep={
    position:"relative",
    right:"30px",

}
const fp={
    position:"relative",
    top:"-20px",

}
const gp={
    float:"right",
    position:"relative",
    top:"45px",
    background: "#ffffff",
    color:"#e67e22",
    border:"#ffffff"
}
const gp2={
    background: "#ffffff",
    color:"#e67e22",
    border:"#ffffff"
}
var monthly = 0;
class Bookdemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.click = this.click.bind(this);

    }
    componentWillMount() {
        var self = this;
        var xmlhttp;
        if (window.XMLHttpRequest)
        {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp=new XMLHttpRequest();
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {

                monthly = JSON.parse(xmlhttp.responseText)


            }
        }

        xmlhttp.open("GET","/monthlyback?bookname="+this.props.location.state.info1,false);
        xmlhttp.send();
    }
    click(){
        window.shoppingcart.push([]);
        var len = window.shoppingcart.length-1;
        window.shoppingcart[len].push(this.props.location.state.info1);
        window.shoppingcart[len].push(this.props.location.state.info2);
        window.shoppingcart[len].push(this.props.location.state.info3);
        window.shoppingcart[len].push(this.props.location.state.info4);
        console.log(window.shoppingcart);
    }
    render() {
        return (
            <article id="109" className="post tag-android tag-ke-hu-duan">
                <div className="post-content">

                    <div className="col-md-12 single-main-left">

                        <div className="sngl-top">
                            <div className="col-md-5 single-top-left">
                                <div className="flexslider">
                                    <img src={pic1} data-imagezoom="true" className="img-responsive" alt=""/>
                                </div>

                            </div>


                            <div className="col-md-7 single-top-right">
                                <div className="single-para simpleCart_shelfItem">
                                    <h2>{this.props.location.state.info1}</h2>
                                    <div className="star-on">
                                        <ul className="star-footer">
                                            <li><span class="glyphicon glyphicon-star" style={ap}></span></li>
                                            <li><span class="glyphicon glyphicon-star" style={ap}></span></li>
                                            <li><span class="glyphicon glyphicon-star" style={ap}></span></li>
                                            <li><span class="glyphicon glyphicon-star" style={ap}></span></li>
                                            <li><span class="glyphicon glyphicon-star" style={ap}></span></li>
                                        </ul>
                                        <div className="review">
                                            <button className="btn btn-default" style={gp2} onClick={this.click}>
                                                ADD TO SHOPPING CART
                                            </button>

                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>

                                    <h5 className="item_price"> {this.props.location.state.info4}(per) / monthly sales  ({monthly})</h5>
                                    <ul className="tag-men">
                                        <li><span>Title       </span>
                                            <span className="women1">: {this.props.location.state.info1}</span></li>
                                        <li><span>Author </span>
                                            <span className="women1" style={bp}>: {this.props.location.state.info3}</span></li>
                                        <li><span>Price  </span>
                                            <span className="women1" style={cp}>: {this.props.location.state.info4}</span></li>
                                        <li><span>Amounts</span>
                                            <span className="women1" style={ep}>: {this.props.location.state.info2}</span></li>
                                    </ul>
                                    <div className="available">
                                        <ul>
                                            <li>expressage：
                                                <br/>
                                                <br/>
                                                <select style={fp}>
                                                    <option>ShunFeng</option>
                                                    <option>YuanTong</option>
                                                    <option>YunDa</option>
                                                    <option>ZhongTong</option>
                                                </select>
                                            </li>
                                            <div className="clearfix"> </div>
                                        </ul>
                                    </div>
                                    <a  className="add-cart item_add">SUBMIT</a>
                                    <Link to="./"><button className="btn btn-default" style={gp}>
                                    RETURN
                                    </button> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

        );
    }
}

export default Bookdemo;