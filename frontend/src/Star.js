/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import './static/css/shopdemo3.css';
import './static/css/shopdemo4.css';
import pic1 from './static/img/pic1.jpg'
import svg1 from './static/svg/cart.svg'
import {Link } from 'react-router-dom'
const dp={
    fontfamily: "'Arial','Microsoft YaHei','黑体','宋体',sans-serif",
}
const cp={
    marginBottom:"50px",
    height:"550px"
}
const bp={
    //position:"relative",
    //left:"50px",
    margin:"auto",
    height:"200px",
    weight:"200px"
}
const ap={
    position:"relative",
    top:"1px",
    border: "1px solid #faedb7",
    outline: "none"
}
const fp={
    width:"35px",
    border: "1px solid #faedb7",
    outline: "none"
}
const ep={
    position:"relative",
    right:"0px",
    color:"#73B6E1"

}
const gp={
}
const hp={
    padding:"0px",
    position:"relative",
    top:"8px",

}
const ip={
    fontSize: "20px",
    color:"#73B6E1"
}
const jp={
    position:"relative",
    top:"0px",
}
const kp={
    position:"relative",
    top:"8px",
    color:"#73B6E1",
    fontSize: "20px"
}
class Star extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descending: false,
            edit: null, // [row index, cell index],
            show:[],
            search: false,
            showvalue:"",
            tt:"",
            tt2:0,
            tt3:"",
            tt4:"",
            cn1:false};
        this._renderTable = this._renderTable.bind(this);

        this.findInfo = this.findInfo.bind(this);
        this.click1 = this.click1.bind(this);

    }

    click1(e){
        console.log(window.arr);
        if (e.target.className == "glyphicon glyphicon-star-empty" ) {
            window.arr .push(parseInt(e.target.id));
            console.log(window.arr);
            e.target.className = "glyphicon glyphicon-star";
        }
        else {
            for(var i=0; i<window.arr.length; i++) {
                if(window.arr[i] == parseInt(e.target.id)) {
                    console.log("print i")
                    console.log(i)
                    window.arr.splice(i, 1);
                    break;
                }
            }
            console.log(window.arr);
            e.target.className = "glyphicon glyphicon-star-empty";
        }
    }
    findInfo(e){
        var t = e.target.parentNode.parentNode.parentNode.childNodes[0].innerText;
        var t2 = e.target.value;
        var t3 = e.target.parentNode.parentNode.parentNode.childNodes[1].innerText;
        var t4 = e.target.parentNode.parentNode.parentNode.childNodes[2].innerText;
        console.log(t2);
        this.setState({tt: t,
            tt2:t2,
            tt3:t3,
            tt4:t4});
        console.log(this.state.tt2);
    }
    _renderTable() {
        var info3 = this.state.tt
        var cn1 = this.state.cn1? "glyphicon glyphicon-star":"glyphicon glyphicon-star-empty";
        return (
            <div>
                <div>
                    <h2>我的收藏</h2>
                </div>
                {window.arr.map(function(row, rowidx) {
                    return (
                        <div>
                            <div className="col-md-3 product-left" style={cp}>
                                <div className="product-main simpleCart_shelfItem">
                                    <a href="single.html" className="mask"><img className="img-responsive zoom-img" src={pic1} alt="" style={bp}/></a>
                                    <div className="product-bottom">
                                        <h3>{window.initarr[row][0]}</h3>
                                        <p>{window.initarr[row][1]}</p>
                                        <h4><a className="item_add" href="#"></a><span className=" item_price">$ {window.initarr[row][4]}</span></h4>
                                        <div className="col-md-5 col-xs-6" style={gp}>
                                            <div className="col-md-5 col-xs-5"style={hp}>
                                                <p>数量:</p>
                                            </div>
                                            <div className="col-md-6 col-xs-6" style={gp}>
                                                <input   className="form-control" style={fp} placeholder="0" onChange={this.findInfo}/>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-xs-2" style={gp}>
                                            <button className="btn btn-default_3" style={ep}>
                                                <Link to={{
                                                    pathname:"/bookdemo",
                                                    state : { info1 :this.state.tt,
                                                        info2 :this.state.tt2,
                                                        info3 :this.state.tt3,
                                                        info4 :this.state.tt4,}
                                                }} >
                                                    <span className="	glyphicon glyphicon-shopping-cart" style={ip}></span></Link>
                                            </button>
                                        </div>
                                        <div className="col-md-1 col-xs-offset-1 col-xs-2">

                                            <span id={window.initarr[row][5]} className="glyphicon glyphicon-star" onClick={this.click1} style={kp}></span>

                                        </div>
                                    </div>
                                    <div className="srch">
                                        <span>-50%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                }, this)}
            </div>
        );}


    render() {
        return (
            <article id="109" className="post tag-android tag-ke-hu-duan">
                <div className="post-head">
                    <br/>
                    <br/>
                </div>
                <div className="post-content">
                    {this._renderTable()}

                </div>
            </article>

        );
    }
}

export default Star;