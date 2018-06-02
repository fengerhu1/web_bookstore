/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import './static/css/homepage.css';
import {Link } from 'react-router-dom';
import pic15 from './static/img/pic17.jpg'
import pic4 from './static/img/pic4.png'
import Head from './Head'


import './static/css/regist.css'
const bp = {
    display:"block"
}
const ap = {
    display:"none"
}
const cp={
    textAlign:"center",
}
const dp={
    width:"140px",
    height:"140px"
}
const ep={
    border:"0px solid #ffffff",
    borderBottom:"1px solid #e67e22",
    backgroundColor:"#ffffff",
}
const ep1={
    tableLayout:"fixed",
    border:"0px solid #ffffff",
    borderBottom:"1px solid #e67e22",
    backgroundColor:"#ffffff"
}
const fp={
    borderBottom:"1px solid #e67e22"
}
const gp={
    border: "1px solid #faedb7",
    height: "36px",
    padding: "6px 12px",
    fontSize: "14px",
    lineHeight: "1.42857143",
    color: "#555",
    backgroundColor: "#fff",
    backgroundImage: "none",
    borderRadius: "4px",
    boxShadow: "inset 0 1px 1px rgba(0,0,0,.075)",
    transition: "border-color ease-in-out .15s,box-shadow ease-in-out .15s",
}

const tp={
    background:"url("+pic15+")",
}
const up={
    background:"url("+pic4+")",
}
const sp={
    color:"#ffffff"
}
const sp1={
    color:"#ffffff",
    position:"relative",
    top:"25px",
}
const sp2={
    color:"#ffffff",
    position:"relative",
    top:"45px",
}
const sp3={
    color:"#ffffff",
    position:"relative",
    top:"68px",
}
const sp4={
    color:"#ffffff",
    position:"relative",
    top:"85px",
}
const yp={
    color:"#000000",
    position:"relative",
    top:"10px",
}
class Personaldata extends Component {

    constructor(props) {
        super(props);
        this.state = {cn1:true,cn2:false,cn3:true,cn4:false,cn5:true,cn6:false,cn7:true,cn8:false,cn9:true,cn10:false,
        name1:window.persondata[0][0],name2:window.persondata[0][1],name3:window.persondata[0][2],name4:window.persondata[0][3],name5:window.persondata[0][4]};
        this.click1 = this.click1.bind(this);
        this.click2 = this.click2.bind(this);
        this.click3 = this.click3.bind(this);
        this.click4 = this.click4.bind(this);
        this.click5 = this.click5.bind(this);
        this.click6 = this.click6.bind(this);
        this.click7 = this.click7.bind(this);
        this.click8 = this.click8.bind(this);
        this.click9 = this.click9.bind(this);
        this.click10 = this.click10.bind(this);
        this.click11 = this.click11.bind(this);
    }
    click11(){
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

        xmlhttp.open("GET","/savepersonback?username="+this.state.name1+"&email="+this.state.name2+"&password="+this.state.name3+"&phone="+this.state.name4+"&address="+this.state.name5,true);
        xmlhttp.send();
    }
    click1(){
        console.log("click")
        this.setState({cn1: !this.state.cn1,
            cn2: !this.state.cn2});
    }
    click2(e)
    {
        var nameValue = e.target.parentNode.childNodes[0].value;
        this.setState({cn1: !this.state.cn1,
            cn2: !this.state.cn2,
        name1:nameValue});
    }
    click3(){
        console.log("click")
        this.setState({cn3: !this.state.cn3,
            cn4: !this.state.cn4});
    }
    click4(e)
    {
        var nameValue = e.target.parentNode.childNodes[0].value;
        this.setState({cn3: !this.state.cn3,
            cn4: !this.state.cn4,
            name2:nameValue});
    }
    click5(){
        console.log("click")
        this.setState({cn5: !this.state.cn5,
            cn6: !this.state.cn6});
    }
    click6(e)
    {
        var nameValue = e.target.parentNode.childNodes[0].value;
        this.setState({cn5: !this.state.cn5,
            cn6: !this.state.cn6,
            name3:nameValue});
    }
    click7(){
        console.log("click")
        this.setState({cn7: !this.state.cn7,
            cn8: !this.state.cn8});
    }
    click8(e)
    {
        var nameValue = e.target.parentNode.childNodes[0].value;
        this.setState({cn7: !this.state.cn7,
            cn8: !this.state.cn8,
            name4:nameValue});
    }
    click9(){
        console.log("click")
        this.setState({cn9: !this.state.cn9,
            cn10: !this.state.cn10});
    }
    click10(e)
    {
        var nameValue = e.target.parentNode.childNodes[0].value;
        this.setState({cn9: !this.state.cn9,
            cn10: !this.state.cn10,
            name5:nameValue});
    }
    render() {
        var bp1 = this.state.cn1?{display:'block'}:{display:'none'};
        var bp2 = this.state.cn2?{display:'block'}:{display:'none'};
        var bp3 = this.state.cn3?{display:'block'}:{display:'none'};
        var bp4 = this.state.cn4?{display:'block'}:{display:'none'};
        var bp5 = this.state.cn5?{display:'block'}:{display:'none'};
        var bp6 = this.state.cn6?{display:'block'}:{display:'none'};
        var bp7 = this.state.cn7?{display:'block'}:{display:'none'};
        var bp8 = this.state.cn8?{display:'block'}:{display:'none'};
        var bp9 = this.state.cn9?{display:'block'}:{display:'none'};
        var bp10 = this.state.cn10?{display:'block'}:{display:'none'};
        return(
            <article id="109" className="post tag-android tag-ke-hu-duan">

                <div className="post-content">
                    <nav className="navbar navbar-inverse navbar-fixed-top" style={up}>
                        <div className="container-fluid col-md-4" >
                            <div className="navbar-header">
                            </div>
                        </div>
                        <div className="container-fluid col-md-offset-2 col-md-4">
                            <div className="navbar-header">
                            </div>
                        </div>
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 sidebar" style={tp}>
                                <ul className="nav nav-sidebar">
                                    <li  style={sp}><Link to="./personaldata" style={sp}>个人资料 <span className="sr-only">(current)</span></Link></li>
                                    <li  style={sp1}><Link to="./" style={sp}>首页</Link></li>
                                    <li  style={sp2}><Link to="./shopcar" style={sp}>我的购物车</Link></li>
                                    <li  style={sp3}><Link to="./starhome" style={sp}>我的收藏</Link></li>
                                    <li  style={sp4}><a href="#" style={sp}>我的订单</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-9 col-sm-offset-3 col-md-7 col-md-offset-2 main">
                                <table className="table table-hover" style={ep1}>
                                    <tbody>
                                        <tr style={ep}>
                                            <td style={ep}>
                                                用户名
                                            </td>
                                            <td style={ep}>
                                                <div style={bp1}>{this.state.name1}</div>
                                                <div style={bp2}>
                                                    <input className="col-md-5 "value={this.state.name1} placeholder={this.state.name1} style={gp}/>
                                                    <button className="btn btn-default" onClick={this.click2}>完成</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <br/>
                                        <br/>
                                        <tr style={ep}>
                                            <td style={ep}>
                                                邮箱
                                            </td>
                                            <td style={ep}>
                                                <div style={bp3} onClick={this.click3}>{this.state.name2}</div>
                                                <div style={bp4}>
                                                    <input className="col-md-5 "  placeholder={this.state.name2} style={gp}/>
                                                    <button className="btn btn-default" onClick={this.click4}>完成</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <br/>
                                        <br/>
                                        <tr style={ep}>
                                            <td style={ep}>
                                                密码
                                            </td>
                                            <td style={ep}>
                                                <div style={bp5} onClick={this.click5}>{this.state.name3}</div>
                                                <div style={bp6}>
                                                    <input className="col-md-5 "  placeholder={this.state.name3} style={gp}/>
                                                    <button className="btn btn-default" onClick={this.click6}>完成</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <br/>
                                        <br/>
                                        <tr style={ep}>
                                            <td style={ep}>
                                                手机号
                                            </td>
                                            <td style={ep}>
                                                <div style={bp7} onClick={this.click7}>{this.state.name4}</div>
                                                <div style={bp8}>
                                                    <input className="col-md-5 "  placeholder={this.state.name4} style={gp}/>
                                                    <button className="btn btn-default" onClick={this.click8}>完成</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <br/>
                                        <br/>
                                        <tr style={ep}>
                                            <td style={ep}>
                                                收货地址
                                            </td>
                                            <td style={ep}>
                                                <div style={bp9} onClick={this.click9}>{this.state.name5}</div>
                                                <div style={bp10}>
                                                    <input className="col-md-5 " placeholder={this.state.name5} style={gp}/>
                                                    <button className="btn btn-default" onClick={this.click10}>完成</button>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <button className="btn btn-default" onClick={this.click11}>储存</button>
                            <aside className="col-md-offset-10 col-md-2 sidebar">

                                <div className="widget">
                                    <h4 className="title">官方</h4>
                                    <div className="content community">
                                        <p>QQ群：2748250768</p>
                                        <p><a href="http://wenda.ghostchina.com/" title="Ghost中文网问答社区" target="_blank" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '问答社区'])"><i className="fa fa-comments"></i> 问答社区</a></p>
                                        <p><a href="http://weibo.com/ghostchinacom" title="Ghost中文网官方微博" target="_blank" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '官方微博'])"><i className="fa fa-weibo"></i> 官方微博</a></p>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </article>
        );

    }
}


export default Personaldata;