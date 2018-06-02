/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import "./static/css/login1.css";
import "./static/css/login2.css";
import "./static/css/login5.css";
import loginimg from './static/img/login-img.png'
import loginlogin from './static/img/login_logo.png'
import pic2 from './static/img/pic2.jpg'

const ap ={
    display:"none",
}
const bp ={
    color:"#27A9E3",
    textDecoration:"none",
    cursor:"pointer"
}
const cp ={
    width:"1500px",
    height:"2000px",
    backgroundColor:"#93defe",
}

class Login extends Component {
    render() {
        return (
            <div className="login_box" style={cp}>
                <br/>
                <br/>
                <br/>
                <div className="login_l_img col-md-6  col-xs-12"><img src={loginimg} /></div>
                <div className=" col-md-offset-2 col-md-4 col-xs-offset-1 col-xs-11">
                <div className="login">
                    <div className="login_logo"><a href="#" style={bp}><img src={loginlogin} /></a></div>
                    <div className="login_name">
                        <p>用户请先登录</p>
                    </div>
                    <form method="post">
                        <input name="username" type="text" placeholder="用户名" />
                        <input name="username" type="text"  placeholder="密码" />
                        <Link to="./">
                            <input value="登录" type="submit"/>
                        </Link>
                    </form>
                    <Link to="./regist">
                        <a className="col-md-offset-10" >注册</a>
                    </Link>
                </div>
                </div>
            </div>
        );
    }
}

export default Login;