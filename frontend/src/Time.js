/**
 * Created by lenovo on 2018/3/14.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const bg2 = {

    margin:"10px",
};
const dp={
    fontFamily:"Arial,Helvetica,sans-serif;font-size:100%",
}
class Time extends Component {
        /*propTypes: {
            headers: React.PropTypes.arrayOf(
                React.PropTypes.string
            ),
            initialData: React.PropTypes.arrayOf(
                React.PropTypes.arrayOf(
                    React.PropTypes.string
                )
            ),
        },*/
    constructor(props) {
        super(props);
        this.state = {data: this.props.initialData,
            sortby: null,
            descending: false,
            edit: null, // [row index, cell index],
            search: false,};
        this._sort = this._sort.bind(this);
        this._showEditor = this._showEditor.bind(this);
        this._save = this._save.bind(this);
        this._toggleSearch = this._toggleSearch.bind(this);
        this._search = this._search.bind(this);
        this._download = this._download.bind(this);
        this._renderToolbar = this._renderToolbar.bind(this);
        this._renderSearch = this._renderSearch.bind(this);
        this._renderTable = this._renderTable.bind(this);
        this.submit = this.submit.bind(this);
        this.modify = this.modify.bind(this);
        this.delete = this.delete.bind(this);
    }
    submit(e)
    {
        var book = document.getElementById('book').value;
        var author = document.getElementById('author').value;
        var language = document.getElementById('language').value;
        var published = document.getElementById('published').value;
        var sales = document.getElementById('sales').value;
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
 ;
            }
        }

        xmlhttp.open("GET","/addbook?book="+book+"&author="+author+"&language="+language+"&published="+published+"&sales="+sales,true);
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


        _sort(e) {
            var column = e.target.cellIndex;
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

        render() {
            return (
                <div>
                    {this._renderToolbar()}
                    {this._renderTable()}
                </div>
            );
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
                    <a className="btn btn-default" data-toggle="modal" data-target="#myModal">
                        添加
                    </a>
                    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                        &times;
                                    </button>
                                    <h4 className="modal-title" id="myModalLabel">
                                        Add a book
                                    </h4>
                                </div>
                                <div className="modal-body">
                                    <form className="bs-example bs-example-form" role="form">
                                        <div className="input-group">
                                            <span className="input-group-addon">Book</span>
                                            <input id="book" type="text" className="form-control" placeholder="twitterhandle"/>
                                        </div>
                                        <br/>
                                        <div className="input-group">
                                            <span className="input-group-addon">Author</span>
                                            <input id="author" type="text" className="form-control" placeholder="twitterhandle"/>
                                        </div>
                                        <br/>
                                        <div className="input-group">
                                            <span className="input-group-addon">Lauguage</span>
                                            <input id="language" type="text" className="form-control" placeholder="twitterhandle"/>
                                        </div>
                                        <br/>
                                        <div className="input-group">
                                            <span className="input-group-addon">Published</span>
                                            <input id="published" type="text" className="form-control" placeholder="twitterhandle"/>
                                        </div>
                                        <br/>
                                        <div className="input-group">
                                            <span className="input-group-addon">Sales</span>
                                            <input id="sales" type="text" className="form-control" placeholder="twitterhandle"/>
                                        </div>
                                        <br/>

                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">关闭
                                    </button>
                                    <button type="button" className="btn btn-default" onClick={this.submit}>
                                        提交更改
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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

        modify(e)
        {
            var book = e.target.parentNode.parentNode.parentNode.childNodes[0].innerText;
            var author = e.target.parentNode.parentNode.parentNode.childNodes[1].innerText;
            var language = e.target.parentNode.parentNode.parentNode.childNodes[2].innerText;
            var published = e.target.parentNode.parentNode.parentNode.childNodes[3].innerText;
            var sales = e.target.parentNode.parentNode.parentNode.childNodes[4].innerText;
            var id = e.target.parentNode.parentNode.parentNode.childNodes[5].innerText;
            console.log(e.target.parentNode.parentNode.parentNode.childNodes[0].innerText);
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

                }
            }

            xmlhttp.open("GET","/modifybook?book="+book+"&author="+author+"&language="+language+"&published="+published+"&sales="+sales+"&id="+id,true);
            xmlhttp.send();
        }
        delete(e)
        {
            var removebook = e.target.parentNode.parentNode.parentNode;
            console.log(removebook);
            removebook.remove();
            var id = e.target.parentNode.parentNode.parentNode.childNodes[5].innerText;
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

                }
            }

            xmlhttp.open("GET","/deletebook?id="+id,true);
            xmlhttp.send();
        }
        _renderTable() {
            return (
                <table className="table table-bordered table-hover">
                    <thead onClick={this._sort}>
                    <tr>{
                        this.props.headers.map(function(title, idx) {
                            if (this.state.sortby === idx) {
                                title += this.state.descending ? ' \u2191' : ' \u2193';
                            }
                            return <th className="warning"key={idx}>{title}</th>;
                        }, this)
                    }</tr>
                    </thead>
                    <tbody onDoubleClick={this._showEditor}>
                    {this._renderSearch()}
                    {this.state.data.map(function(row, rowidx) {
                        return (
                            <tr key={rowidx}>{
                                row.map(function(cell, idx) {
                                    var content = cell;
                                    var edit = this.state.edit;
                                    if (edit && edit.row === rowidx
                                        && edit.cell === idx) {
                                        content = (
                                            <form onSubmit={this._save}>
                                                <input type="text" class="form-control" style={{border: "1px solid #e67e22"}}defaultValue={cell} />
                                            </form>
                                        );
                                    }
                                    return <td className="success" key={idx} data-row={rowidx} style={dp}>{content}</td>;
                                }, this)}
                                <td className="success"  data-row={rowidx} style={dp}>
                                    <button className="btn btn-default" onClick={this.modify}><span >修改</span></button>
                                    <br/>
                                    <br/>
                                    <button className="btn btn-default" onClick={this.delete}><span >删除</span></button>
                                </td>
                            </tr>
                        );
                    }, this)}
                    </tbody>
                </table>
            );}
    }

export default Time;