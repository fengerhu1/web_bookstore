import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Link ,Route} from 'react-router-dom'
import { Router, hashHistory } from 'react-router'
import './index.css';
import Home from './Home';
import Login from './Login';
import Shopcar from './Shopcarhome'
import Bookdemo from './Bookdemo'
import Regist from './Regist'
import Starhome from './Starhome'
import Personaldata from './Personaldata'
import registerServiceWorker from './registerServiceWorker';
import login2 from './login2'
import Backend from './Backend'
import Orderhome from './Orderhome'

/*class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={Home}>
                    <Route path='list' component={Home}/>

                </Route>
            </Router>
        )
    }
}*/

//export default RouteMap

//<Time initialData= {data} headers= {headers}/>
/*var Ex = ReactDOM.render(
    <Home/>,
    document.getElementById('app')
);*/

//ReactDOM.render(<App />, document.getElementById('app'));
//function tick() {
//    ReactDOM.render(<Time />, document.getElementById('root2'));
//}
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={login2}/>
            <Route path='/regist' component={Regist}/>
            <Route path='/shopcar' component={Shopcar}/>
            <Route path='/bookdemo' component={Bookdemo}/>
            <Route path='/starhome' component={Starhome}/>
            <Route path="/personaldata" component={Personaldata}/>
            <Route path="/login2" component={login2}/>
            <Route path="/backend" component={Backend}/>
            <Route path="/order" component={Orderhome}/>
        </Switch>
    </main>
)
{
    var self = this;
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            window.shoppingcart = JSON.parse(xmlhttp.responseText)
            console.log("window.shoppingcart")
            //console.log(window.shoppingcart)
        }
    }

    xmlhttp.open("GET", "/shopcartback", false);
    xmlhttp.send();
}
var self1 = this;
var xmlhttp1;
if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp1 = new XMLHttpRequest();
}
xmlhttp1.onreadystatechange = function () {
    if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
        window.persondata = JSON.parse(xmlhttp1.responseText)
        console.log("window.persondata")
        console.log(window.persondata)
    }
}

xmlhttp1.open("GET", "/personback", false);
xmlhttp1.send();

var Ex = ReactDOM.render(
    <HashRouter history={hashHistory}>
        <Main />
    </HashRouter>,
    document.getElementById('app')
)

registerServiceWorker();
