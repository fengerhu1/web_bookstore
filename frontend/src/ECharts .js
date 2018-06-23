/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react'
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
var showtu1 = [];
var showtu2 = [];
class ECharts  extends Component {
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
                showtu1 = JSON.parse(xmlhttp.responseText)
            }
        }

        xmlhttp.open("GET","/showtu1",false);
        xmlhttp.send();
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
                showtu2 = JSON.parse(xmlhttp.responseText)
            }
        }

        xmlhttp.open("GET","/showtu2",false);
        xmlhttp.send();
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            // title: { text: '月销量统计' },
            // tooltip: {},
            // xAxis: {
            //     data: showtu1
            // },
            // yAxis: {},
            // series: [{
            //     name: '销量',
            //     type: 'bar',
            //     data: showtu2
            // }]
            color: ['#e67e22'],
            title : {
                text: '已卖出书籍月销量',

            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['月销量']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : showtu1
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'月销量',
                    type:'bar',
                    data:showtu2,
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },

            ]
        });
    }
    render() {
        return (
            <div id="main" style={{ width: 1100, height: 400 ,margin:"auto"}}></div>
        );
    }
}

export default ECharts ;