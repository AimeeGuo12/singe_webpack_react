import React from 'react';
import echarts from 'echarts';

class EchartsDemo2 extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.set()
    }
    set = () => {
        //基于准备好的dom，初始化ECharts图表
        let myChart1 = echarts.init(document.getElementById("echart-pie"));
        let option1 = {  //指定第1个图表option1的配置项和数据
            color: ['red', 'Lime', 'blue', 'DarkGreen', 'DarkOrchid', 'Navy'],
            backgroundColor: 'rgba(128, 128, 128, 0.1)',  //配置背景色，rgba设置透明度0.1
            title: { text: '某大学各专业历年招生情况分析', x: 'center', y: 12 },
            tooltip: { trigger: "item", formatter: "{a}<br/>{b}:{c}({d}%)" },
            legend: {
                orient: 'vertical', x: 15, y: 15,
                data: ['2016', '2017', '2018', '2019', '2020']
            },
            series: [{  //配置第1个图表的数据系列
                name: '总人数:', type: 'pie',
                radius: '70%', center: ['50%', 190],
                data: [
                    { value: 1695, name: '2016' }, { value: 1790, name: '2017' },
                    { value: 2250, name: '2018' }, { value: 2550, name: '2019' },
                    { value: 2570, name: '2020' }]
            }]
        };
        myChart1.setOption(option1);  //使用指定的配置项和数据显示饼图

        //基于准备好的dom，初始化ECharts图表
        let myChart2 = echarts.init(document.getElementById("echart-bar"));
        let option2 = {  //指定第2个图表的配置项和数据
            color: ['red', 'Lime', 'blue', 'DarkGreen', 'DarkOrchid', 'Navy'],
            backgroundColor: 'rgba(128, 128, 128, 0.1)',  //配置背景色，rgba设置透明度0.1
            tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },  //配置提示框组件
            legend: {  //配置图例组件
                left: 42, top: 25,
                data: ['大数据', 'Oracle', '云计算', '人工智能', '软件工程']
            },
            toolbox: {  //配置第2个图表的工具箱组件
                show: true, orient: 'vertical', left: 550, top: 'center',
                feature: {
                    mark: { show: true }, restore: { show: true }, saveAsImage: { show: true },
                    magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] }
                }
            },
            xAxis: [{
                type: 'category',
                data: ['2016', '2017', '2018', '2019', '2020']
            }],  //配置第2个图表的x轴坐标系
            yAxis: [{ type: 'value', splitArea: { show: true } }],  //配置第2个图表的y轴坐标系
            series: [  //配置第2个图表的数据系列
                {
                    name: '大数据', type: 'bar', stack: '总量',
                    data: [301, 334, 390, 330, 320], barWidth: 45,
                },
                { name: 'Oracle', type: 'bar', stack: '总量', data: [101, 134, 90, 230, 210] },
                { name: '云计算', type: 'bar', stack: '总量', data: [191, 234, 290, 330, 310] },
                { name: '人工智能', type: 'bar', stack: '总量', data: [201, 154, 190, 330, 410] },
                { name: '软件工程', type: 'bar', stack: '总量', data: [901, 934, 1290, 1330, 1320] }
            ]
        };
        myChart2.setOption(option2);  //使用指定的配置项和数据显示堆叠柱状图


        let myChart3 = echarts.init(document.getElementById('echart-line'))
        let option3 = {  //指定第2个图表的配置项和数据
            color: ['red', 'Lime', 'blue', 'DarkGreen', 'DarkOrchid', 'Navy'],
            backgroundColor: 'rgba(128, 128, 128, 0.1)',  //配置背景色，rgba设置透明度0.1
            tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },  //配置提示框组件
            legend: {  //配置图例组件
                left: 42, top: 25,
                data: ['大数据', 'Oracle', '云计算', '人工智能', '软件工程']
            },
            toolbox: {  //配置第2个图表的工具箱组件
                show: true, orient: 'vertical', left: 550, top: 'center',
                feature: {
                    mark: { show: true }, restore: { show: true }, saveAsImage: { show: true },
                    magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] }
                }
            },
            xAxis: [{
                type: 'category',
                data: ['2016', '2017', '2018', '2019', '2020']
            }],  //配置第2个图表的x轴坐标系
            yAxis: [{ type: 'value', splitArea: { show: true } }],  //配置第2个图表的y轴坐标系
            series: [  //配置第2个图表的数据系列
                {
                    name: '大数据', type: 'line', stack: '总量',
                    data: [301, 334, 390, 330, 320], barWidth: 45,
                },
                { name: 'Oracle', type: 'line', stack: '总量', data: [101, 134, 90, 230, 210] },
                { name: '云计算', type: 'line', stack: '总量', data: [191, 234, 290, 330, 310] },
                { name: '人工智能', type: 'line', stack: '总量', data: [201, 154, 190, 330, 410] },
                { name: '软件工程', type: 'line', stack: '总量', data: [901, 934, 1290, 1330, 1320] }
            ]
        };
        myChart3.setOption(option3);  //使用指定的配置项和数据显示堆叠柱状图
        // 多图表联动配置方法1：分别设置每个echarts对象的group值
        // myChart1.group = 'group1';
        // myChart2.group = 'group1';
        // echarts.connect('group1');
        // 多图表联动配置方法2：直接传入需要联动的echarts对象myChart1，myChart2
        echarts.connect([myChart1, myChart2, myChart3]);
    }
    render() {
        return (
            <div>
                <div id='echart-pie' style={{ width: '600px', height: '400px' }}></div>
                <div id='echart-bar' style={{ width: '600px', height: '400px' }}></div>
                <div id='echart-line' style={{ width: '600px', height: '400px' }}></div>

                {/* <div id='echart-bar' style={{ width: '600px', height: '400px' }}></div> */}
                {/* <div id='echart-bar' style={{ width: '600px', height: '400px' }}></div> */}

            </div >
        )
    }
}

export default EchartsDemo2

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



