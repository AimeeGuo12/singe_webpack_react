import React, {useState, useEffect} from 'react';
import ToolBar from './component/ToolBar'
import model from './model/index';
import Start from './rehook';
function Frame (props) {

    return (
        // React.Fragment
        <div>
            <ToolBar {...props}/>
        </div>
    )
}

export default <Start model= {model}><Frame/></Start>;