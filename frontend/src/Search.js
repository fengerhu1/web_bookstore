/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
const ap={
    position:"relative",
    top:"1px",
    border: "1px solid #faedb7",
    outline: "none"
}
const dp={
    position:"relative",
    top:"-37px",
}
var num = 0;
class Search extends Component {
    render() {
        return (
            <div>
                <div className="input-group col-md-offset-4 col-md-4 col-xs-offset-2 col-xs-6">
                    <input  type="text" className="form-control" style={ap}/>
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-default_2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">全部分类 <span className="caret"></span></button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li><a href="#">儿童书</a></li>
                                <li><a href="#">成人书</a></li>
                                <li><a href="#">教科书</a></li>
                                <li><a href="#">英文原本书</a></li>
                            </ul>
                            <button type="button" className="btn btn-default" tabIndex="-1"><span className="	glyphicon glyphicon-search"></span>
                            </button>
                        </div>
                    </div>
                <br/>
                <br/>

            </div>

        );
    }
}

export default Search;