/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import Time2 from './Time2'
var headers = ["Username", "phone", "email", "authority","operation"];
var data=[];
const dp={
    fontFamily:"Arial,Helvetica,sans-serif;font-size:100%",
}
class Module1 extends Component {
    constructor(props) {
        super(props);
        this.state = {j:""}
        this.click_1 = this.click_1.bind(this);


    }
    componentWillMount() {
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
                data = JSON.parse(xmlhttp.responseText)
            }
        }

        xmlhttp.open("GET","/addadmin",false);
        xmlhttp.send();

        /*var xmlhttp;
        if (window.XMLHttpRequest)
        {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp=new XMLHttpRequest();
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                window.admin = JSON.parse(xmlhttp.responseText);
                console.log("window.admin");
                console.log(window.admin);
            }
        }

        xmlhttp.open("GET","/admin",false);
        xmlhttp.send();*/
    }
    click_1(){
        this.setState({
            j:window.__yourReactComp__
        });
    }
    render() {
        if (window.admin > 0) {
            return (
                <article id="109" className="post tag-android tag-ke-hu-duan" onClick={this.click_1}>
                    <div className="post-head">
                        <h1 className="post-title"><a style={dp}>管理用户</a></h1>
                    </div>
                    <div className="post-content">
                        <Time2 initialData={data} headers={headers}/>
                    </div>
                </article>
            );
        }
        else
        {
            return(
                <div></div>
            )
        }
    }
}

export default Module1;