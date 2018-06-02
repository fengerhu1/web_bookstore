/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="widget">
                                <h4 className="title">友链</h4>
                                <div className="content tag-cloud friend-links">
                                    <a href="http://www.bootcss.com" title="Bootstrap中文网"  target="_blank">Bootstrap中文网</a>
                                    <a href="https://www.jquery123.com/" title="jQuery中文文档"  target="_blank">jQuery中文文档</a>
                                    <a href="https://www.webpackjs.com/" title="Webpack中文网" target="_blank">Webpack中文网</a>
                                    <a href="https://www.nodeapp.cn/" title="Node.js中文文档"  target="_blank">Node.js中文文档</a>
                                    <a href="https://www.npmjs.com.cn/" title="NPM中文文档"  target="_blank">NPM中文文档</a>
                                    <a href="http://www.sasschina.com/" title="SASS中文网"  target="_blank">SASS中文网</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="widget">
                                <h4 className="title">标签云</h4>
                                <div className="content tag-cloud">
                                    <a>在线书城</a>
                                    <a>新版本发布</a>
                                    <a>前端页面</a>

                                    <a>...</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="widget">
                                <h4 className="title">合作伙伴</h4>
                                <div className="content tag-cloud friend-links">
                                    <a>小老虎</a>
                                </div>
                            </div></div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;