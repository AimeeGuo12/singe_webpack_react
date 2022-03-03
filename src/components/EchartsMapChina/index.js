import React, {useEffect, useState} from 'react';
import echarts from 'echarts';
function Map() {
    const [mapData, cahngeMapData] = useState([])
    useEffect(() => {
        renderMap()
        return () => {
            renderMap()
        };
    }, []);
    finallyData=(data,mapEcharts,dark)=>{
        const Maxsize = this.size;
        let fontColor = dark?'#fff':'#000';
        let borderColor = dark ? '#2b2b30':'#ffffff';
        let areaColor = dark?'#EAEAEF':'#3086E3';
        let emphasisArea = dark?'#DCE2F1':'#65AFFF';
        let shineIng = dark?'#449EFF':'#FCD349';
        mapEcharts.setOption(
            {
                title: {
                    text: language['ys6003-000189'],
                    left: 'left',
                    textStyle: {
                        color: fontColor,
                    },
                },
                tooltip: {
                    padding: 0,
                    enterable: true,
                    transitionDuration: 1,
                    textStyle: {
                        color: fontColor,
                        decoration: 'none',
                    },
                    // position: function (point, params, dom, rect, size) {
                    //   return [point[0], point[1]];
                    // },
                    formatter:(params)=> {
                        console.log('params',params)
                        var tipHtml = '';
                        var empty = ''
                        let tipName = params.data?params.data.address:null
                        let selfV = params.data?params.data.value[2]:null
                        let executeV = params.data?params.data.executeV:null
                        tipHtml = '<div style="width:250px;height:90px;background:rgba(250,250,250,0.8);box-shadow:3px 3x 2px #e6e6e6;">'
                        // +'<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(200,200,200,0.7);padding:0 20px">'+'<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;">'+'</i>'
                        // +'<span style="margin-left:10px;color:#555555;font-size:16px;">'+tipName+'</span>'+'</div>'
                        // '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">'+'</i>'
                        +'<div style="padding:10px">'
                        +'<p style="color:#555555;font-size:12px;">'+'<i style="display:inline-block;width:10px;height:10px;background:#3086E3;border-radius:40px;margin:0 8px">'+'</i>'
                        +this.props.language['ys6003-000168']+'：'+'<span style="color:#555555;margin:0 6px;">'+tipName+'</span></p>'
                        +'<p style="color:#555555;font-size:12px;">'+'<i style="display:inline-block;width:10px;height:10px;background:#3086E3;border-radius:40px;margin:0 8px">'+'</i>'
                        +this.props.language['ys6003-000169']+'：'+'<span style="color:#555555;margin:0 6px;">'+selfV+'</span></p>'
                        +'<p style="color:#555555;font-size:12px;">'+'<i style="display:inline-block;width:10px;height:10px;background:#3086E3;border-radius:40px;margin:0 8px">'+'</i>'
                        +this.props.language['ys6003-000170']+'：'+'<span style="color:#555555;margin:0 6px;">'+executeV+'</span></p>'
                        +'</div>'+'</div>';
                        // setTimeout(function() {
                        //     tooltipCharts(params.name);
                        // }, 10);
                        if(tipName){
                            return tipHtml;
                        }else{
                            return empty
                        }
                       
                    }
                    
                },
               
                visualMap: {
                    show: false,
                    min: 0,
                    max: 200,
                    left: '10%',
                    top: 'bottom',
                    calculable: true,
                    seriesIndex: [1],
                    inRange: {
                        color: ['#04387b', '#467bc0'] // 蓝绿
                    }
                },
                geo: {
                    show: true,
                    map: 'china',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: areaColor,
                            borderColor: borderColor,
                        },
                        emphasis: {
                            areaColor:emphasisArea,
                        }
                    }
                },
                series: [{
                        name: '散点',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: this.convertData(data),
                        symbolSize: function(val) {
                            if(val[2] == 0){
                                return 5
                            }else{
                                if(val[2] / 100 < 5){
                                    return 5
                                }else{
                                    return val[2] / Maxsize;
                                }
                            }
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: shineIng
                            }
                        }
                    },
                    {
                        type: 'map',
                        map: 'china',
                        geoIndex: 0,
                        aspectScale: 0.75, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#3B5077',
                            },
                            emphasis: {
                                areaColor: '#2B91B7'
                            }
                        },
                        animation: false,
                        data: data
                    },
                    {
                        name: '点',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        zlevel: 6,
                    },
                    {
                        name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: this.convertData(data.sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 10)),
                        symbolSize: function(val) {
                            if(val[2] == 0){
                                return 5
                            }else{
                                if(val[2] / 100 < 5){
                                    return 5
                                }else{
                                    return val[2] / Maxsize;
                                }
                            }
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'left',
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: shineIng,
                                shadowBlur: 10,
                                shadowColor: shineIng
                            }
                        },
                        zlevel: 1
                    },
            
                ]
            }
        );
   }
    renderMap = () => {
        if(document.getElementById('geomap')){
            var mapEcharts = echarts.init(document.getElementById('geomap'))
            let data = [
                // {lng:121.15,lat:31.89, executeV: 9,orgPk:'1qwswq1',orgName:'saitu Asika',value:322},
                // {lng:109.781327,lat:39.608266,orgPk:'shsnaaja',orgName: '鄂尔多斯', value: 12,executeV: 9},
                // {lng:120.38,lat:37.35,orgName: '招远',orgPk:'xxs', value: 12,executeV: 9},
                // {lng:120.62,lat:31.32,orgName: '苏州',orgPk:'showdow', value: 50,executeV: 9},
                // {lng:110.88,lat:21.68,orgName: '茂名',orgPk:'kkp', value: 520,executeV: 9},
                // {lng:115.89,lat:28.68,orgName: '南昌',orgPk:'maybe', value: 54,executeV: 9},
                // {lng:116.46,lat:39.92,orgName: '北京',orgPk:'mircle',value: 79,executeV: 9},
                // {lng:87.68,lat:43.77,orgName: '乌鲁木齐', orgPk:'midone',value: 84,executeV: 9},
            ];
            if(bd.gridTotalData.length != 0){
                data = bd.gridTotalData
            }
            gridTotalData
            // setTimeout(() => {
                mapEcharts.getDom().style.height = '100%';
                mapEcharts.getDom().childNodes[0].style.height = '100%';
                let dark = false
                this.finallyData(data,mapEcharts,dark);
                mapEcharts.resize()
                // if(document.getElementById('geomap').childNodes[0]){
                //     // document.getElementById('BaiduMap').childNodes[0].
                //     document.getElementById('geomap').childNodes[0].style.setProperty('height','0')
                // }
            // }, 1000);
                mapEcharts.off('click');
                mapEcharts.on('click', 'series',pointClick);
                // mapEcharts.on('click', 'series.scatter', pointClick);
        }
    }
    return (
        <div>
            <div id='geomap'></div>
        </div>
    )
}