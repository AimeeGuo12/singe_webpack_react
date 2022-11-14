
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


// 通用配置：
// 标题： title
// 提示： tooltip
// toolbox: 内置工具栏

// 标题：
// 文字样式： title: { textStyle: { xxxx } }
// 标题边框: title: { borderWidth: 5, borderColor: 'blue', borderRadius: 5 }
// 标题位置: titie: { left: 30, top: 20 }  // right bottom

// tooltip: 鼠标滑过的时候的提示

// 触发类型： trigger-- item  axis

// 触发时机： triggerOn-- mouseover click


// 格式化： formatter-- 字符串模板 回调函数



