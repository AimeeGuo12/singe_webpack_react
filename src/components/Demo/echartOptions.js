import React from 'react';
import echarts from 'echarts';

class EchartsDemo extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.setBar()
        this.setLine()
        this.setPie()
    }
    setBar = () => {
        // 初始化化实例对象
        const mapEcharts = echarts.init(document.getElementById('echart-bar1'))
        const xDataArr = ['张三', '李四', '王五', '小红', '大明', '大黄', '小黑']
        const yDataArr1 = [88, 92, 63, 77, 94, 80, 72]
        const yDataArr2 = [84, 97, 62, 74, 98, 87, 76]

        // 配置项
        const options = {
            title: {
                text: '成绩', // 图表标题
                link: 'http://baidu.com', // 标题超链接
                textStyle: { // 标题样式
                    color: 'red',
                    fontStyle: ''
                },
                borderWidth: 5,
                borderColor: 'blue',
                borderRadius: 5,
                left: 30, top: 20
            },
            tooltip: {
                trigger: 'item',  // axis 轴上就能显示
                triggerOn: 'click', // click 点击的时候才显示
                // formatter: '{b}的成绩是{c}'  // 提示框的内容  一般用字符串模板   见官方文档
                formatter: function (arg) { // arg: 包含触发图的参数
                    console.log(arg)
                    return arg.name + '的分数是' + arg.data
                }
            },
            toolbox: {
                feature: {
                    saveAsImage: {}, //可以下载图片
                    dataView: { // 数据视图  将原始数据呈现 并且可以修改

                    },
                    restore: {}, // 重置数据
                    dataZoom: {}, // 区域缩放  鼠标选中后就
                    magicType: { // 动态图表类型切换
                        type: ['bar', 'line']
                    }
                }
            },
            legend: {
                data: ['语文', '数学']
            },
            // 横向柱状图--直接修改x轴和y轴
            xAxis: { // x轴
                type: 'category', // 类目轴   指明类别 x轴
                data: xDataArr
            },
            yAxis: {
                type: 'value', // 数值轴，不用设置值，会自动去series中的data找  没有设置data 值从series来

            },
            series: [ // 系列坐标，每个系列通过type决定自己的图表类型
                {
                    name: '语文',
                    type: 'bar', // 柱状图 图表类型  通过这个设置图形类别  line(折现图) pie(饼图)
                    markPoint: { // 最大/小值
                        data: [
                            {
                                type: 'max', name: '最大值'
                            }, {
                                type: 'min', name: '最小值'
                            }
                        ]
                    },
                    markLine: { // 平均值
                        data: [
                            {
                                type: 'average', name: '平均值'
                            }
                        ]
                    },
                    label: { // 柱状图上显示具体的值
                        show: true,
                        rotate: 60, // 旋转60度
                        position: 'top', // 标签的位置  显示在顶部
                    },
                    barWidth: '30%', // 柱状图的宽度
                    data: yDataArr1
                }, {
                    name: '数学',
                    type: 'bar',
                    data: yDataArr2
                }
            ]
        }
        // 将配置项设置到实例上
        mapEcharts.setOption(options);
        mapEcharts.on('click', function (params) {
            window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name))
        })
    }
    setLine = () => {
        // 初始化化实例对象
        const mapEcharts = echarts.init(document.getElementById('echart-line1'))
        const xDataArr = ['张三', '李四', '王五', '小红', '大明', '大黄', '小黑']
        const yDataArr1 = [88, 92, 63, 77, 94, 80, 72]
        const yDataArr2 = [84, 97, 62, 74, 98, 87, 76]

        // 配置项
        const options = {
            title: {
                text: '成绩', // 图表标题
                link: 'http://baidu.com', // 标题超链接
                textStyle: { // 标题样式
                    color: 'red',
                    fontStyle: ''
                },
            },

            // legend: {
            //     data: ['语文', '数学']
            // },
            // 横向柱状图--直接修改x轴和y轴
            xAxis: { // x轴
                type: 'category', // 类目轴   指明类别 x轴
                data: xDataArr,
                boundaryGap: false, // 与纵坐标没有间隙
            },
            yAxis: {
                type: 'value', // 数值轴，不用设置值，会自动去series中的data找  没有设置data 值从series来
                scale: true, // 如果数值都差不多，显示出差别
            },
            series: [ // 系列坐标，每个系列通过type决定自己的图表类型
                {
                    name: '语文',
                    type: 'line', // 柱状图 图表类型  通过这个设置图形类别  line(折现图) pie(饼图)
                    markPoint: { // 最大/小值
                        data: [
                            {
                                type: 'max', name: '最大值'
                            }, {
                                type: 'min', name: '最小值'
                            }
                        ]
                    },
                    markLine: { // 平均值
                        data: [
                            {
                                type: 'average', name: '平均值'
                            }
                        ]
                    },
                    label: { // 柱状图上显示具体的值
                        show: true,
                        rotate: 60, // 旋转60度
                        position: 'top', // 标签的位置  显示在顶部
                    },
                    barWidth: '30%', // 柱状图的宽度
                    data: yDataArr1,
                    areaStyle: {
                        color: 'pink'
                    }
                }
                // , {
                //     name: '数学',
                //     type: 'line',
                //     data: yDataArr2,
                //     areaStyle: {
                //         color: 'blue'
                //     }
                // }
            ]
        }
        // 将配置项设置到实例上
        mapEcharts.setOption(options);
        mapEcharts.on('click', function (params) {
            window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name))
        })
    }

    setPie = () => {
        const mapEcharts = echarts.init(document.getElementById('echart-pie1'))
        const pieData = [
            {
                value: 11231,
                name: "淘宝",
            },
            {
                value: 22673,
                name: "京东"
            },
            {
                value: 6123,
                name: "唯品会"
            },
            {
                value: 8989,
                name: "1号店"
            },
            {
                value: 6700,
                name: "聚美优品"
            }
        ]
        const option = {
            series: [
                {
                    type: 'pie',
                    data: pieData,
                    radius: ['50%', '70%'], // 圆环  数组的第一项是内半径，第二项是外半径, 
                    label: {
                        show: true, // 显示文字
                        formatter: function (arg) {  // 格式化文字
                            return arg.data.name + '平台' + arg.data.value + '元\n' + arg.percent + '%'
                        }
                    },
                    // roseType: 'radius', // 南丁格尔图指的是每一个扇形的半径随着数据的大小而不同, 数值占比越大, 扇形的半径也就越大
                    // selectedMode: 'multiple', // 选中模式
                    // selectedOffset: 30, // 选中扇形区域的偏移距离
                },
            ]
        }
        mapEcharts.setOption(option)
    }
    render() {
        return (
            <div>
                <div id='echart-bar1' style={{ width: '600px', height: '400px' }}></div>
                <div id='echart-line1' style={{ width: '600px', height: '400px' }}></div>

                <div id='echart-pie1' style={{ width: '600px', height: '400px' }}></div>
                {/* <div id='echart-bar' style={{ width: '600px', height: '400px' }}></div> */}
                {/* <div id='echart-bar' style={{ width: '600px', height: '400px' }}></div> */}

            </div >
        )
    }
}

export default EchartsDemo

// 通用配置：
// 标题： title
// 提示： tooltip
// toolbox: 内置工具栏  导出图片，数据视图， 动态类型切换，数据区域缩放，重置
// 图例： legend 用于筛选系列，需要和series配合使用
// legend中的data是一个数组， data的值需要和series数组中某组数据的name值一致

// 标题：
// 文字样式： title: { textStyle: { xxxx } }
// 标题边框: title: { borderWidth: 5, borderColor: 'blue', borderRadius: 5 }
// 标题位置: titie: { left: 30, top: 20 }  // right bottom

// tooltip: 鼠标滑过的时候的提示

// 触发类型： trigger-- item  axis

// 触发时机： triggerOn-- mouseover click


// 格式化： formatter-- 字符串模板 回调函数



