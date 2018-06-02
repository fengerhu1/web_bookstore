/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import { hashHistory } from 'react-router'
import './static/css/login3.css'
import {Link} from 'react-router-dom'
class login2 extends Component {
    constructor(props) {
        super(props);
        this.click_1 = this.click_1.bind(this);

    }
    click_1(e){
        var tt1 = e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1];
        var tt2 = e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[1];
        console.log(tt1.value);
        console.log(tt2.value);
        var username = tt1.value;
        var password = tt2.value;
        var xmlhttp;
        var here = this;
        if (window.XMLHttpRequest)
        {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp=new XMLHttpRequest();
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                //alert(xmlhttp.responseText);
                if( JSON.parse(xmlhttp.responseText))
                {
                    alert("true");
                    hashHistory.push({
                        pathname: '/',
                    })
                }
                else
                    alert("false")
            }
        }
        xmlhttp.open("GET","/loginback?username="+username+"&password="+password,true);
        xmlhttp.send();
    }

    render() {
        return (
            <div className="backpic" style={{width:"1300px",height:"600px"}}>
                <div className="container">
                    <div className="form row">
                        <div className="form-horizontal col-md-offset-3" id="login_form">
                            <h3 className="form-title">LOGIN</h3>
                            <div className="col-md-9">
                                <div className="form-group">
                                    <i className="fa fa-user fa-lg"></i>
                                    <input className="form-control required" type="text"  placeholder="Username" id="username" name="username" autofocus="autofocus" maxlength="20"  />
                                </div>
                                <div className="form-group">
                                    <i className="fa fa-lock fa-lg"></i>
                                    <input className="form-control required" type="password" placeholder="Password" id="password" name="password" maxlength="17"/>
                                </div>
                                <div className="form-group">
                                    <Link className="col-xs-offset-5 col-md-offset-7 form-title" style={{position:"relative",right:"120px",color:"#6950a1" }} to="./regist">REGIST</Link>

                                </div>
                                <div className="form-group col-md-offset-9">
                                    <div>
                                        <button className="btn btn-default pull-right" onClick={this.click_1}>登录</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default login2;