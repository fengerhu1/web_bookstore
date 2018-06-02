/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import { hashHistory } from 'react-router'
import './static/css/regist.css'
import zc_22 from './static/images/zc_22.jpg'
import logo from './static/images/logo.png'
import zc_25 from './static/images/zc_25.jpg'
const ap={
    position:"relative",
    top:"300px",

}
const bp={
    width:"1300px",
    height:"700px"

}
class Rejist extends Component {
    constructor(props) {
        super(props);
        this.click_1 = this.click_1.bind(this);

    }
    click_1(e) {
        var access = 1;
        var username = e.target.parentNode.parentNode.childNodes[0].value;
        var password = e.target.parentNode.parentNode.childNodes[3].value;
        var phone = e.target.parentNode.parentNode.childNodes[1].value;
        var email = e.target.parentNode.parentNode.childNodes[2].value;
        console.log(username);
        console.log(password);
        var re1 = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        var regTel = /^0?1[3|4|5|8][0-9]\d{8}$/;
        var regpassword = /\S/;

        if (!regpassword.test(password))
        {
            alert("password can not be empty");
            access = 0;
        }
        if (!re1.test(email))
        {
            alert("wrong email address");
            access = 0;
        }
        if (!regTel.test(phone))
        {
            alert("wrong phone number");
            access = 0;
        }
        if (access === 1)
        {
            var xmlhttp;
            var here = this;
            if (window.XMLHttpRequest) {
                //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
                xmlhttp = new XMLHttpRequest();
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    //alert(xmlhttp.responseText);
                    if (JSON.parse(xmlhttp.responseText))
                    {
                        alert("true");
                        hashHistory.push({
                            pathname: '/',
                        })
                    }
                    else {
                        alert("username has been used")
                    }
                }
            }
            xmlhttp.open("GET", "/registback?username=" + username + "&password=" + password + "&phone=" + phone + "&email=" + email, true);
            xmlhttp.send();
        }
    }
    render() {
        return (
            <div className="login_bj" style={bp}>
            <div className="zhuce_body" style={ap}>
                <div className="zhuce_kong">
                    <div className="zc">
                        <div className="bj_bai">
                            <h3>欢迎注册</h3>
                            <form action="" method="get">
                                <input  className="kuang_txt phone" placeholder="用户名"/>
                                <input  className="kuang_txt phone" placeholder="手机号"/>
                                <input className="kuang_txt email" placeholder="邮箱"/>
                                <input className="kuang_txt possword" placeholder="密码"/>
                                <input  className="kuang_txt yanzm" placeholder="验证码"/>
                                <div>
                                    <div className="hui_kuang"><img src={zc_22} width="92" height="31"/></div>
                                    <div className="shuaxin"><a href="javascript:;"><img src={zc_25} width="13" height="14"/></a></div>
                                </div>
                                <div>
                                    <input name="" type="checkbox" value=""/><span>已阅读并同意<a href="javascript:;" target="_blank"><span class="lan">《XXXXX使用协议》</span></a></span>
                                </div>
                                <div>
                                    <input name="注册" type="button" onClick={this.click_1} class="btn_zhuce" value="注册"/>
                                </div>
                            </form>
                        </div>
                        <div className="bj_right">
                            <p>使用以下账号直接登录</p>
                            <a className="zhuce_qq">QQ注册</a>
                            <a className="zhuce_wb">微博注册</a>
                            <a className="zhuce_wx">微信注册</a>
                            <p>已有账号？<Link to="./login">立即登录</Link></p>

                        </div>
                    </div>
                </div>

            </div>
            </div>
        );
    }
}

export default Rejist;