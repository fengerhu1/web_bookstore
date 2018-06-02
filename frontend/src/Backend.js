/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import './name.txt'
class Backend extends Component {
    constructor(props) {
        super(props);
        this.click_1 = this.click_1.bind(this);
        this.click_2 = this.click_2.bind(this);
        this.click_3 = this.click_3.bind(this);
    }
    click_1(e){
        console.log(e.target)
        var tt = e.target;
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
                tt.innerHTML=xmlhttp.responseText;

            }
        }
        xmlhttp.open("GET","/resource/name.txt",true);
        xmlhttp.send();
    }
    click_2(e){
        console.log(e.target)
        var tt = e.target;
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
                //tt.innerHTML=xmlhttp.responseText;

            }
        }
        xmlhttp.open("GET","/firstsession",true);
        xmlhttp.send();
    }
    click_3(e){
        console.log(e.target)
        var tt = e.target;
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
                tt.innerHTML=xmlhttp.responseText;

            }
        }
        xmlhttp.open("GET","/secondsession",true);
        xmlhttp.send();
    }


    render() {
        return (
                <div id="myDiv">
                    <h2 onClick={this.click_1}>使用 AJAX 修改该文本内容</h2>
                    <h2 onClick={this.click_2}>第一次访问session</h2>
                    <h2 onClick={this.click_3}>第二次访问session</h2>
            </div>
        );
    }
}

export default Backend;