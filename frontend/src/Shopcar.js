/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import './static/css/myCart.css'
import pic1 from './static/img/pic1.jpg'
import minus from './static/img/minus.jpg'
import add from './static/img/add.jpg'
const ap = {
    width:"50px",
    height:"75px",
    margin:"auto"
}
const bp = {
    position:"relative",
    left:"-10px"
}

const bp2 = {
    position:"relative",
    left:"-20px"
}
const cp = {
    border:"0px solid",
    textAlign:"center",
    verticalAlign: "middle"
}
const cp2 = {
    border:"0px solid",
    verticalAlign: "middle"
}
const dp = {
    border:"2px solid #ffffff",
    textAlign:"center",
    verticalAlign: "middle"
}
const ep={
    border:"20px solid #ffffff",
}

class Shopcar extends Component {
    constructor(props) {
        super(props);
        this.state = {price:0};
        this.click = this.click.bind(this);
        this.click2 = this.click2.bind(this);
        this.click3 = this.click3.bind(this);
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
        /*var self = this;
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
                window.shoppingcart = JSON.parse(xmlhttp.responseText)
                console.log("window.shoppingcart")
                console.log(window.shoppingcart)
            }
        }

        xmlhttp.open("GET","/shopcartback",false);
        xmlhttp.send();*/

    }
    componentWillMount() {
        var sumprice = 0;
        for (var i=0;i<window.shoppingcart.length;i++)
        {
            sumprice = sumprice+parseInt(window.shoppingcart[i][1])*parseInt(window.shoppingcart[i][3].substring(2,window.shoppingcart[i][3].length));
        }
        this.setState({price: sumprice});
        console.log(sumprice);
    }
    click2(e){
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
            }
        }

        xmlhttp.open("GET","/saveback?table="+JSON.stringify(window.shoppingcart),true);
        xmlhttp.send();
    }
    click3(e){
        var self = this;
        var xmlhttp;
        var myDate = new Date();
        var id = myDate.getTime();
        console.log(id);
        if (window.XMLHttpRequest)
        {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp=new XMLHttpRequest();
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
            }
        }

        xmlhttp.open("GET","/orderback?table="+JSON.stringify(window.shoppingcart)+"&sum="+this.state.price+"&id="+id,true);
        xmlhttp.send();
    }
    add(e){
        var rowid = parseInt(e.target.parentNode.id);
        window.shoppingcart[rowid][1] = (parseInt(window.shoppingcart[rowid][1]) +1).toString();
        var sumprice = 0;
        for (var i=0;i<window.shoppingcart.length;i++)
        {
            sumprice = sumprice+parseInt(window.shoppingcart[i][1])*parseInt(window.shoppingcart[i][3].substring(2,window.shoppingcart[i][3].length));
        }
        this.setState({price: sumprice});
    }
    minus(e){
        var rowid = parseInt(e.target.parentNode.id);
        window.shoppingcart[rowid][1] = (parseInt(window.shoppingcart[rowid][1]) -1).toString();
        var sumprice = 0;
        for (var i=0;i<window.shoppingcart.length;i++)
        {
            sumprice = sumprice+parseInt(window.shoppingcart[i][1])*parseInt(window.shoppingcart[i][3].substring(2,window.shoppingcart[i][3].length));
        }
        this.setState({price: sumprice});
    }
    click(e){
       //e.target.parentNode.parentNode.remove();
        for(var i=0; i<window.shoppingcart.length; i++) {
            if(window.shoppingcart[i][0] == e.target.parentNode.parentNode.childNodes[1].innerText) {
                console.log(window.shoppingcart[i]);
                window.shoppingcart.splice(i, 1);
                console.log(window.shoppingcart);
            }
        }
        var sumprice = 0;
        for (var i=0;i<window.shoppingcart.length;i++)
        {
            sumprice = sumprice+parseInt(window.shoppingcart[i][1])*parseInt(window.shoppingcart[i][3].substring(2,window.shoppingcart[i][3].length));
        }
        this.setState({price: sumprice});
    }
    render() {
        console.log("shopcart")
        console.log(window.shoppingcart)
        return (
            <div>
                <article id="109" className="post tag-android tag-ke-hu-duan" >
                    <div className="post-head">
                        <h1 className="post-title"><a>购物车</a></h1>
                    </div>
                    <div className="post-content">
                        <div id="content" className="col-md-12">
                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" id="shopping" style={cp}>
                                <form >
                                    <tr>
                                        <td className="title_2" colSpan="2" style={cp}>书籍</td>
                                        <td className="title_3"style={cp}>税</td>
                                        <td className="title_4"style={cp}>单价</td>
                                        <td className="title_5"style={cp}>数量</td>
                                        <td className="title_6"style={cp}>总计</td>
                                        <td className="title_7"style={cp}>操作</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="7" className="line"style={cp}></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="8" className="shopInfo" style={cp}>店铺：<a href="#">小老虎的书店</a>    卖家：<a href="#">小老虎</a></td>
                                    </tr>
                                    {window.shoppingcart.map(function(row, rowidx) {
                                        return(
                                                <tr id="product1" style={ep}>
                                                    <td className="cart_td_2"style={cp}><img src={pic1} alt="shopping" style={ap}/></td>
                                                    <td className="cart_td_3"style={cp2}><strong>{row[0]}</strong></td>
                                                    <td className="cart_td_4"style={dp}>0</td>
                                                    <td className="cart_td_5"style={dp}>${row[3].substring(2,row[3].length)}</td>
                                                    <td id={rowidx} className="cart_td_6"style={dp}><img src={minus} onClick={this.minus} className="hand"/> <input id="num_2"  value={row[1]} className=" num_input" readOnly="readonly"/> <img src={add} onClick={this.add}  className="hand"/></td>
                                                    <td className="cart_td_7"style={dp}>${parseInt(row[3].substring(2,row[3].length))*parseInt(row[1])}</td>
                                                    <td className="cart_td_8"style={dp}><a onClick={this.click}>删除</a></td>
                                                </tr>
                                        );},this
                                        )}

                                </form>
                            </table>
                            <table className="table invoice-total">
                                <tbody>
                                <tr>
                                    <td><strong>总价：</strong>
                                    </td>
                                    <td>$ {this.state.price}</td>
                                </tr>
                                <tr>
                                    <td><strong>税：</strong>
                                    </td>
                                    <td>$ 0</td>
                                </tr>
                                <tr>
                                    <td><strong>总计</strong>
                                    </td>
                                    <td>$ {this.state.price}</td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="well m-t"><strong>注意：</strong> 请在30日内完成付款，否则订单会自动取消。
                            </div>
                            <div className="text-right">
                                <a style={bp2}>
                                <button className="btn btn-default" onClick={this.click2}>保存</button>
                                </a>
                                <Link to='./' style={bp}>
                                    <button className="btn btn-default"> 返回</button>
                                </Link>
                                <Link  to='./order'>
                                    <button className="btn btn-default" onClick={this.click3}>去付款</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>

    </div>
        );
    }
}

export default Shopcar;