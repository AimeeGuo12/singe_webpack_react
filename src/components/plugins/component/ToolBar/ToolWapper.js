import React from 'react';

import {ToolButton} from '../../public/ToolButton';
import {isEmpty} from '../../utils/utils';

export default function ToolWrapper({id, initTool}) {
    const Tool = function({tool, action, disabled, onClick}) {
        const toolObj = tool && isEmpty(tool.toJS())?tool.toJS(): initTool;
        const {icon,label,style} = toolObj.toolList.find(item=>item.key==toolObj.currentKey) || {};
        return <ToolButton style={style} action={action} disabled={disabled}  icon={icon} tips={ formatDesignMultiLang[label]|| label} onClick={onClick}></ToolButton>
    }
    return Tool
}