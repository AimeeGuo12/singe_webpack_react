
class EchartsDemo extends React.Component {
    constructor() {

    }
    setE = () => {
        // 初始化化实例对象
        const mapEcharts = echarts.init(document.getElementById('echart-box'))
        // 配置项
        const options = {
            title: {
                text: '成绩', // 图表标题
                link: 'http://baidu.com', // 标题超链接
                textStyle: { // 标题样式
                    color: 'red',
                    fontStyle: ''
                }
            },
            tooltip: {
                trigger: 'item',  // axis 轴上就能显示
                triggerOn: 'mouseover', // click 点击的时候才显示
                // formatter: '{b}的成绩是{c}'  // 提示框的内容  一般用字符串模板   见官方文档
                formatter: function (arg) { // arg: 包含触发图的参数
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
            // 横向柱状图--直接修改x轴和y轴
            xAxis: { // x轴
                type: 'category', // 类目轴   指明类别 x轴
                data: ['小明', '小红', '小王']
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
                    data: [70, 92, 87]
                }
            ]
        }
        // 将配置项设置到实例上
        mapEcharts.setOption(options)
    }

    render() {
        return (
            <div>
                <div id='echart-box' style={{ width: '600px', height: '400px' }}></div>
            </div>
        )
    }
}


通用配置：
标题： title
提示： tooltip
toolbox: 内置工具栏  导出图片，数据视图， 动态类型切换，数据区域缩放，重置
图例： legend 用于筛选系列，需要和series配合使用

标题：
文字样式： title: { textStyle: { xxxx } }
标题边框: title: { borderWidth: 5, borderColor: 'blue', borderRadius: 5 }
标题位置: titie: { left: 30, top: 20 }  // right bottom

tooltip: 鼠标滑过的时候的提示

触发类型： trigger-- item  axis

触发时机： triggerOn-- mouseover click


格式化： formatter-- 字符串模板 回调函数



