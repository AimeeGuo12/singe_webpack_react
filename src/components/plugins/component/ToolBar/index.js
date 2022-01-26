/**
 * 工具栏
 */

import React, {useEffect, Fragment, useContext} from 'react';
import getConfig from '../../utils/globalConfig';
import ToolWapper from './ToolWapper';
import { AppContext } from "../../reHook";
import './index.less'

const {tool} = getConfig
function ToolBar(props) {
    console.log(props)
    const {disabledList,actionList} = props.props
    const {pluginData, dispath} = useContext(AppContext)
    const toolButtonClick= (value)=>{
        dispath({
            type: 'pluginData/update',
            payload: {
                actionList: {
                    ...pluginData.actionList,
                    value
                }
            }
        })
        // actions.plugin.addPluginStatus("actionList",value);
    }
    useEffect(()=>{
        let actionList = []
        tool.filter(item=>item.isTool).forEach(item=>{
            actionList.push(item)
            // actions.plugin.addPluginStatus("actionList",item);
        })
        dispath({
            type: 'pluginData/update',
            payload: {
                actionList: {
                    actionList
                }
            }
        })
    },[])
    return <Fragment>
            {tool.map(row=>{
                return <div className="operate-content">
                    {row.map(group=>{
                        return <div className="tool-group">{
                            group.map(value=>{
                                const item = plugigList[value];
                                if(item.isTool){
                                    const Com = item.component;
                                    return <Com/>
                                }else if(item.tool){
                                    //toJS() 将一个Immutable数据转换为JS类型的数据
                                    const action = actionList.toJS().includes(value);
                                    const disabled = disabledList.toJS().includes(value);
                                    const Tool = ToolWapper({initTool:item.tool,id:value})
                                    return <Tool action={action} disabled={disabled} onClick={toolButtonClick.bind(this,value)}></Tool>
                                    
                                }
                            }).filter(item=>item)
                            }<span className="gap"></span>
                            </div>
                        
                    })}
            </div>
            })}
    </Fragment>
}
export default ToolBar // connect(function(state){
//     return {
//         actionList:state.plugin.getIn([ "actionList" ]),
//         disabledList:state.plugin.getIn([ "disabledList" ]),
//     }
// })(ToolBar);
