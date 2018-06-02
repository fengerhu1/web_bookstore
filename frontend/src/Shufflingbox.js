/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import pic from './static/img/pic10.jpg'
import pic1 from './static/img/pic11.jpg'
import pic2 from './static/img/pic13.jpg'
const ap ={
    width:"1500px",
    height:"500px",
    margin:"auto"
}
const bp={
    fontfamily: "'Arial','Microsoft YaHei','黑体','宋体',sans-serif",
    color:"#ffffff"
}
const cp={
    fontfamily: "'Arial','Microsoft YaHei','黑体','宋体',sans-serif"
}
class Shufflingbox extends Component {
    render() {
        return (
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img src={pic} alt="九寨沟" style={ap}/>
                            <div className="carousel-caption">
                                <h1 style={bp}>习近平谈治国理政</h1>
                                <p style={cp}>习主席对中国国情的一次深入探讨，总结了习主席对治理国家的理解和精髓，是一本划世纪的社会主义巨作</p>
                            </div>
                    </div>
                    <div className="item">
                        <img src={pic1} alt="丽江" style={ap}/>
                            <div className="carousel-caption">
                                <h1 style={bp}>javascript从入门到放弃</h1>
                                <p style={cp}>还在为写javascript而烦恼吗，不要担心，有此神书在手，保你在代码的海洋中迷失自我</p>
                            </div>
                    </div>
                    <div className="item">
                        <img src={pic2} alt="水帘洞" style={ap}/>
                            <div className="carousel-caption">
                                <h1 style={bp}>共产党宣言</h1>
                                <p style={cp}>与共产主义创始人，伟大的哲学家，社会学家，经济学家马克思进行一场畅谈，理解共产主义的灵魂</p>
                            </div>
                    </div>
                </div>

                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Shufflingbox;