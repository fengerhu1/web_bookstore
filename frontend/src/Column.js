/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import { hashHistory } from 'react-router'
import {Link } from 'react-router-dom'
import pic6 from './static/img/pic6.png'
class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {cn1:true,cn2:false,cn3:false,cn4:false,cn5:true,name:"Who are you"};
        this.click1 = this.click1.bind(this);
        this.click2 = this.click2.bind(this);
        this.click3 = this.click3.bind(this);
        this.click4 = this.click4.bind(this);
        this.click5 = this.click5.bind(this)
    }

    componentWillMount() {
        var self = this;
        var xmlhttp;
        if (window.XMLHttpRequest)
        {
            xmlhttp=new XMLHttpRequest();
        }
        var name;
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                name = xmlhttp.responseText;
                if (name == "nulll")
                    name = "who are you";
                console.log(self);
                self.setState({name:name});

            }
        }

        xmlhttp.open("GET","/getuserback",true);
        xmlhttp.send();
    }
    click1(){
        this.setState({cn1: !this.state.cn1,
            cn2: false,
            cn3: false});
    }
    click5(){
        var variet = []

        if (window.persondata.length !== 0)
        {
            hashHistory.push({
                pathname: '/personaldata',
            })
        }

    }
    click2(){
        this.setState({cn1: false,
            cn2: !this.state.cn2,
            cn3: false});
    }
    click3(){
        this.setState({cn1: false,
            cn2: false,
            cn3: !this.state.cn3});
    }
    click4(){
        this.setState({
            cn4: !this.state.cn4,
            cn5: !this.state.cn5});
    }
        render() {
        var cn1 = this.state.cn1 ? "nav-current":"";
        var cn2 = this.state.cn2 ? "nav-current":"";
        var cn3 = this.state.cn3 ? "nav-current":"";
        var cn4 = this.state.cn4 ? "visible":"invisible";
        var cn5 = this.state.cn5 ? "visible":"invisible";
        return (
            <nav className="main-navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="navbar-header">
                        <span className="nav-toggle-button collapsed" data-toggle="collapse" data-target="#main-menu">
                        <span className="sr-only">Toggle navigation</span>
                        <i className="fa fa-bars"></i>
                        </span>
                            </div>
                            <div className="collapse navbar-collapse" id="main-menu">
                                <ul className="menu">
                                    <li className={cn1} role="presentation"onClick={this.click1}style={{position:"relative" ,right:"-170px"}}><Link to="./">首页</Link></li>
                                    <li  className={cn2} role="presentation"onClick={this.click2}style={{position:"relative" ,right:"-170px"}}><Link to="./starhome">我的收藏</Link></li>
                                    <li  className={cn3} role="presentation"onClick={this.click3}style={{position:"relative" ,right:"-170px"}}><Link to="./order">我的订单</Link></li>
                                    <li  role="presentation"style={{position:"relative" ,right:"-170px"}}><Link to="./shopcar"><button type="button" className="btn btn-default" tabIndex="-1"><span className="	glyphicon glyphicon-shopping-cart"></span><span>购物车</span>
                                    </button></Link></li>
                                    <li  className={cn4}role="presentation" onClick={this.click4}style={{position:"relative" ,right:"-250px"}}><Link to='/regist'>注册</Link></li>
                                    <li  className={cn4}role="presentation" onClick={this.click4}style={{position:"relative" ,right:"-250px"}}><Link to='/login'>登录</Link></li>
                                    <li className={cn5} role="presentation" style={{position:"relative" ,right:"-250px"}}><a onClick={this.click5}>{this.state.name}</a></li>
                                    <li  className={cn5}role="presentation" onClick={this.click4}style={{position:"relative" ,right:"-250px"}}><a >退出</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Column;