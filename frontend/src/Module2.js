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
    padding:"0px"

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
window.arr=[];
class Module2 extends Component {
    constructor(props) {
        super(props);
        console.log("module2");
        //console.log(this.props.initialData);
        this.state = {data: this.props.initialData,
            sortby: null,
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
        this._sort_1 = this._sort_1.bind(this);
        this._showEditor = this._showEditor.bind(this);
        this._save = this._save.bind(this);
        this._toggleSearch = this._toggleSearch.bind(this);
        this._search = this._search.bind(this);
        this._download = this._download.bind(this);
        this._renderToolbar = this._renderToolbar.bind(this);
        this._renderSearch = this._renderSearch.bind(this);
        this._renderTable = this._renderTable.bind(this);
        this._rendershow = this._rendershow.bind(this);
        this._searchshow = this._searchshow.bind(this);
        this.findInfo = this.findInfo.bind(this);
        this.click1 = this.click1.bind(this);

    }
    componentWillMount() {
        var self = this;
        var xmlhttp;
        if (window.XMLHttpRequest)
        {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp=new XMLHttpRequest();
        }
        var data2=[];
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                //console.log(xmlhttp.responseText);
                //console.log("lalalalala");
                data2 = JSON.parse(xmlhttp.responseText)
                console.log(self);
                self.setState({data:data2});

            }
        }

        xmlhttp.open("GET","/bookback",true);
        xmlhttp.send();
    }
    /*getInitialState() {
     return {
     data: this.props.initialData,
     sortby: null,
     descending: false,
     edit: null, // [row index, cell index],
     search: false,
     };
     }*/

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
                    window.arr.splice(i, 1);
                    break;
                }
            }
            console.log(window.arr);
            e.target.className = "glyphicon glyphicon-star-empty";
        }
    }
    _sort_1(e) {
        var column = -parseInt(e.target.id);
        var data = this.state.data.slice();
        var descending = this.state.sortby === column
            && !this.state.descending;
        data.sort(function(a, b) {
            return descending ? (a[column] < b[column] ? 1 : -1) : (a[column] > b[column] ? 1 : -1);
        });
        this.setState({
            data: data,
            sortby: column,
            descending: descending,
        });
    }


    _showEditor(e) {
        this.setState({edit: {
            row: parseInt(e.target.dataset.row, 10),
            cell: e.target.cellIndex,
        }});
    }
    _save(e) {
        e.preventDefault();
        var input = e.target.firstChild;
        var data = this.state.data.slice();
        data[this.state.edit.row][this.state.edit.cell]
            = input.value;
        this.setState({
            edit: null,
            data: data,
        });
    }

    _preSearchData =  null;
    _toggleSearch() {
        if (this.state.search) {
            this.setState({
                data: this._preSearchData,
                search: false,
            });
            this._preSearchData = null;
        } else {
            this._preSearchData = this.state.data;
            this.setState({
                search: true,
            });
        }
    }

    _search(e) {
        var needle = e.target.value.toLowerCase();
        if (!needle) {
            this.setState({data: this._preSearchData});
            return;
        }
        var idx = e.target.dataset.idx;
        var searchdata = this._preSearchData.filter(
            function(row) {
                return
                row[idx].toString().toLowerCase().indexOf(needle) > -1;
            });
        this.setState({data: searchdata});
    }

    _download(format, ev) {
        var contents = format === 'json'
            ?JSON.stringify(this.state.data)
            :this.state.data.reduce(function(result, row) {
                return result
                    + row.reduce(function(rowresult, cell, idx) {
                        return rowresult
                            + '"'
                            + cell.replace(/"/g, '""')
                            + '"'
                            + (idx < row.length - 1 ? ',' : '');
                    }, '')
                    + "\n";
            }, '');
        var URL = window.URL || window.webkitURL;
        var blob = new Blob([contents], {type: 'text/' + format});
        ev.target.href = URL.createObjectURL(blob);
        ev.target.download = 'data.' + format;
    }


    _renderToolbar() {
        return (
            <div className="toolbar">
                <a className="btn btn-default" onClick={this._toggleSearch} style={{margin:10}}>Search</a>
                <a className="btn btn-default" onClick={this._download.bind(this, 'json')} href="data.json" style={{margin:10}}>
                    Export JSON
                </a>
                <a className="btn btn-default" onClick={this._download.bind(this, 'csv')} href="data.csv" style={{margin:10}}>
                    Export CSV</a>
            </div>
        );
    }

    _renderSearch() {
        if (!this.state.search) {
            return null;
        }
        return (
            <tr onChange={this._search}>
                {this.props.headers.map(function(_ignore, idx) {
                    return <td key={idx}>
                        <input type="text" data-idx={idx}/>
                    </td>;
                })}
            </tr>
        );
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
        //var rgb = e.target.css('background');
        //console.log(rgb)
        //if (rgb !='#73B6E1')
        //    e.target.css('background',"#494e8f");
        //else
         //   e.target.css('background',"#73B6E1");
    }
    _renderTable() {
        var info3 = this.state.tt
        var cn1 = this.state.cn1? "glyphicon glyphicon-star":"glyphicon glyphicon-star-empty";
        return (
            <div>
                <div>
                    <h2>优秀书籍</h2>
                </div>
                {this.state.data.map(function(row, rowidx) {
                    return (
                        <div className="ibook">
                            <div className="col-md-3 product-left" style={cp}>
                                <div className="product-main simpleCart_shelfItem">
                                    <a href="single.html" className="mask"><img className="img-responsive zoom-img" src={pic1} alt="" style={bp}/></a>
                                    <div className="product-bottom">
                                        <h3>{row[0]}</h3>
                                        <p>{row[1]}</p>
                                        <h4><a className="item_add" href="#"></a><span className=" item_price">$ {row[4]}</span></h4>
                                        <div className="col-md-5 col-xs-6" style={gp}>
                                            <div className="col-md-5 col-xs-5"style={hp}>
                                                <p>数量:</p>
                                            </div>
                                            <div className="col-md-6 col-xs-6" style={gp}>
                                                <input   className="form-control" style={fp} placeholder="0"  onChange={this.findInfo}/>
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

                                                <span id={row[5]} className="glyphicon glyphicon-star-empty" onClick={this.click1} style={kp}></span>

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
    _rendershow() {
        return (
            <div>

                {this.state.show.map(function(row, rowidx) {
                    return (
                        <div>
                            <div>
                            <h2>搜索结果</h2>
                            </div>
                            <div className="col-md-3 product-left" style={cp}>
                                <div className="product-main simpleCart_shelfItem">
                                    <a href="single.html" className="mask"><img className="img-responsive zoom-img" src={pic1} alt="" style={bp}/></a>
                                    <div className="product-bottom">
                                        <h3>{row[0]}</h3>
                                        <p>{row[1]}</p>
                                        <h4><a className="item_add" href="#"></a><span className=" item_price">$ {row[4]}</span></h4>
                                        <div className="col-md-5 col-xs-6" style={gp}>
                                            <div className="col-md-5 col-xs-5"style={hp}>
                                                <p>数量:</p>
                                            </div>
                                            <div className="col-md-6 col-xs-6" style={gp}>
                                                <input   className="form-control" style={fp} placeholder="0" onkeyup="value=value.replace(^[0-9]*[1-9][0-9]*$) "onChange={this.findInfo}/>
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

                                            <span id={row[5]} className="glyphicon glyphicon-star-empty" onClick={this.click1} style={kp}></span>

                                        </div>
                                    </div>
                                    <div className="srch">
                                        <span>-50%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9" style={cp}>
                            </div>
                        </div>

                    );
                }, this)}
            </div>
        );}
        _searchshow(e){
            var text = e.target.value.toLowerCase();
            console.log(text);
            var localarray = [];
            var localshow = this.state.data.slice();
            console.log(localshow);
            localshow.map(function (item,id) {
                if(item[0].toLowerCase() == text)
                    localarray.push(item);

            })
                this.setState({
                   show:localarray,
                    showvalue:e.target.value
                });

        }
    render() {
            var value = this.state.showvalue;
            console.log("module2 successful");
        return (
            <article id="109" className="post tag-android tag-ke-hu-duan">
                <div className="post-head">
                    <h1 className="post-title"><a style={dp}>书籍展示</a></h1>
                    <br/>
                    <br/>
                    <div className="input-group col-md-offset-4 col-md-4 col-xs-offset-2 col-xs-6">
                        <input   className="form-control" style={ap}  onChange={this._searchshow}/>
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-default_2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">排序 <span className="caret"></span></button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li><a id="-4" onClick={this._sort_1}>价格</a></li>
                                <li><a id="-3" onClick={this._sort_1}>出版日期</a></li>
                                <li><a id="-1" onClick={this._sort_1}>作者</a></li>
                                <li><a id="-2" onClick={this._sort_1}>语言</a></li>
                            </ul>
                            <button type="button" className="btn btn-default" tabIndex="-1"><span className="	glyphicon glyphicon-search"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    {this._rendershow()}
                    {this._renderTable()}

                </div>
            </article>

        );
    }
}

export default Module2;