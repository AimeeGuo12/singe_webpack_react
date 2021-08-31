import React, { useContext } from 'react';
import {AppContext} from '../reHooks.js'
function App() {
    const a = useContext(AppContext)
    const {emp, dispatch} = useContext(AppContext)
    const getCount = async() => {
       
        console.log(emp)
        await dispatch({
            type: 'emp/update',
            payload: {
                visible: false
            }
        })
        console.log(emp)
    }
    return (
        <div>
            <div>主页面</div>
            <button type="" onClick={getCount}>点击报数</button>
        </div>

    )
}
export default App;