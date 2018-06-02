/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import pic1 from './static/img/pic1.jpg'
var orderdata=[];
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
const hp = {
    position:"relative",
    right:"-70px"
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
const ap2={
    position:"relative",
    top:"1px",
    border: "1px solid #faedb7",
    outline: "none"
}
class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:[],
            showvalue:0
            };
        this._rendershow = this._rendershow.bind(this);
        this._searchshow = this._searchshow.bind(this);
        this._sort_1 = this._sort_1.bind(this);
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

                orderdata = JSON.parse(xmlhttp.responseText)
                //console.log(orderdata[0][3]);

            }
        }

        xmlhttp.open("GET","/getorderback",false);
        xmlhttp.send();
    }
    _rendershow(){
        return(
            <div>
                <h2>搜索结果</h2>
                {this.state.show.map(function(row1,row1id){
                    return(
                        <div>
                            <table width="100%" border="0" cellSpacing="0" cellPadding="0" id="shopping" style={cp}>
                                <form >
                                    <tr>
                                        <td className="title_2" colSpan="2" style={cp}>书籍</td>
                                        <td className="title_3"style={cp}>税</td>
                                        <td className="title_4"style={cp}>单价</td>
                                        <td className="title_5"style={cp}>数量</td>
                                        <td className="title_6"style={cp}>总计</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="7" className="line"style={cp}></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="8" className="shopInfo" style={cp}>用户：<a href="#">{row1[1]}</a>    订单号：<a href="#">{row1[0]}</a> 总价：<a href="#">{row1[2]}</a></td>
                                    </tr>
                                    {row1[3].map(function(row, rowidx) {
                                        return(
                                            <tr id="product1" style={ep}>
                                                <td className="cart_td_2"style={cp}><img src={pic1} alt="shopping" style={ap}/></td>
                                                <td className="cart_td_3"style={cp2}><strong>{row[0]}</strong></td>
                                                <td className="cart_td_4"style={dp}>0</td>
                                                <td className="cart_td_5"style={dp}>${row[3].substring(2,row[3].length)}</td>
                                                <td id={rowidx} className="cart_td_6"style={dp}>{row[1]}</td>
                                                <td className="cart_td_7"style={dp}>${parseInt(row[3].substring(2,row[3].length))*parseInt(row[1])}</td>
                                            </tr>
                                        );},this
                                    )}

                                </form>
                            </table>
                        </div>
                    );
                },this)}
            </div>
    )
    }
    _sort_1(e){
        this.setState({
            showvalue:parseInt(e.target.id)
        });
    }
    _searchshow(e){
        var text = e.target.value.toLowerCase();
        console.log(text);
        var localarray = [];
        var localshow = orderdata.slice();
        console.log(localshow);
        if (this.state.showvalue == 0) {
            localshow.map(function (item, id) {
                var pushornot = 0;
                item[3].map(function (row, rowid) {
                    if (row[0].toLowerCase() == text)
                        pushornot = 1;
                })
                if (pushornot == 1)
                    localarray.push(item);
            })
        }
        else
        {
            localshow.map(function (item, id) {
                var pushornot = 0;
                if(item[0] == text)
                    localarray.push(item);
            })
        }
        this.setState({
            show:localarray,
        });
    }
    render() {
        return (
            <div>
                <article id="109" className="post tag-android tag-ke-hu-duan" >
                    <div className="post-head">
                        <h1 className="post-title"><a>订单</a></h1>
                    </div>
                    <div className="post-content">
                        <div className="input-group col-md-offset-4 col-md-4 col-xs-offset-2 col-xs-6">
                            <input   className="form-control" style={ap2}  onChange={this._searchshow}/>
                            <div className="input-group-btn">
                                <button type="button" className="btn btn-default_2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">搜索对象 <span className="caret"></span></button>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a id="0" onClick={this._sort_1}>书名</a></li>
                                    <li><a id="1" onClick={this._sort_1}>订单号</a></li>
                                </ul>
                                <button type="button" className="btn btn-default" tabIndex="-1"><span className="	glyphicon glyphicon-search"></span>
                                </button>
                            </div>
                        </div>
                        <div id="content" className="col-md-offset-2 col-md-10" style={hp}>
                            {this._rendershow()}
                            <br/>
                            <br/>
                            <h2>历史订单</h2>
                            {orderdata.map(function(row1,row1id){
                                return(
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0" id="shopping" style={cp}>
                                        <form >
                                            <tr>
                                                <td className="title_2" colSpan="2" style={cp}>书籍</td>
                                                <td className="title_3"style={cp}>税</td>
                                                <td className="title_4"style={cp}>单价</td>
                                                <td className="title_5"style={cp}>数量</td>
                                                <td className="title_6"style={cp}>总计</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="7" className="line"style={cp}></td>
                                            </tr>
                                            <tr>
                                                <td colSpan="8" className="shopInfo" style={cp}>用户：<a href="#">{row1[1]}</a>    订单号：<a href="#">{row1[0]}</a> 总价：<a href="#">{row1[2]}</a></td>
                                            </tr>
                                            {row1[3].map(function(row, rowidx) {
                                                return(
                                                    <tr id="product1" style={ep}>
                                                        <td className="cart_td_2"style={cp}><img src={pic1} alt="shopping" style={ap}/></td>
                                                        <td className="cart_td_3"style={cp2}><strong>{row[0]}</strong></td>
                                                        <td className="cart_td_4"style={dp}>0</td>
                                                        <td className="cart_td_5"style={dp}>${row[3].substring(2,row[3].length)}</td>
                                                        <td id={rowidx} className="cart_td_6"style={dp}>{row[1]}</td>
                                                        <td className="cart_td_7"style={dp}>${parseInt(row[3].substring(2,row[3].length))*parseInt(row[1])}</td>
                                                    </tr>
                                                );},this
                                            )}

                                        </form>
                                    </table>
                                );
                            },this)}

                        </div>
                    </div>
                </article>

            </div>
        );
    }
}

export default Order;