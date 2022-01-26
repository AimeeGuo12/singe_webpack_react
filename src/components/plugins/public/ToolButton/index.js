import React, {useEffect, Fragment} from 'react';
import { Popover, Button, Tooltip } from 'antd';

const ToolButton = ({icon, onClick, tips, action, disabled, children, style}) => {
    const [visible, changeVisible] = useState(false)
    const _onClick = () => {
        !disabled && onClick();
    }
    return (
        // <Popover content={tips} trigger="hover" visible={visible} onVisibleChange={changeVisible}>
        //     <Button>Click me</Button>
        // </Popover>
        <Tooltip placement='top' title={tips} visible={visible}>
            <div
				onMouseOver={() => changeVisible(true)}
				onMouseOut={() => changeVisible(false)}
				className={`tool-btn ${action ? 'active' : ''}`}
			>
				<Button style={style} disabled={disabled} shape="icon" bordered onClick={_onClick}>
					{' '}
					<span className={`icon iconfont ${icon || 'icon-bangzhutishi'}`}>{children}</span>
				</Button>
			</div>
        </Tooltip>
    )
} 
const ToolButtonList = ({ children }) => {
	console.log('children', children);
	return <Fragment>{children}</Fragment>;
};

export { ToolButton, ToolButtonList };