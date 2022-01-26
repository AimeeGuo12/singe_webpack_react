/**
 * plugin注册 插件的生命周期和共用逻辑都封装在plugInConstructor中，采用装饰器的方式提供给组件使用。
 */

 import React, { Component, Fragment } from "react";
 import { isFunction } from "../../public/utils";
//  import { base, actions, connect,toast } from "nc-lightapp-front";
 import {grid} from '../api';
 import "./index.less";

 //默认关闭处理钩子函数
function defaultPluginWillClosed() {
    return true;
}
//默认弹窗提交的钩子
function defaultPluginWillSubmit() {
    return true;
}
function defaultPluginBeforeOpen() {
    return true;
}

function defaultCustomRender() {
    return null
}
//默认应用按钮
function defaultPluginApply() {
    return true;
}

export default function plugInConstructor(config) {
    const { id, label, type, modalConfig = {}, mapStateToProps, tool = {},cancelGridFocus } = config;
    let { showApplication, unModal } = modalConfig;

    return function(Plugin) {
        //插件打开之前的钩子函数
        const pluginBeforeOpen = Plugin.prototype.pluginBeforeOpen || defaultPluginBeforeOpen;
        //插件关闭的钩子函数
        const pluginWillClosed = Plugin.prototype.pluginWillClosed || defaultPluginWillClosed;
        //插件提交的钩子函数
        const pluginWillSubmit = Plugin.prototype.pluginWillSubmit || defaultPluginWillSubmit;
        //修改工具栏状态钩子
        const changePluginConfig = Plugin.prototype.changePluginConfig;
        //劫持shouldComponentUpdate
        const old_shouldComponentUpdate = Plugin.prototype.shouldComponentUpdate;
        //劫持componentWillReceiveProps
        const old_componentWillReceiveProps = Plugin.prototype.componentWillReceiveProps;
        //劫持 
        const old_componentWillMount = Plugin.prototype.componentWillMount;
        //劫持render函数
        const old_render = Plugin.prototype.render;
        // 渲染更多按钮
        const renderMoreBtn = Plugin.prototype.renderMoreBtn;
        // 应用按钮的回调
        const pluginApply = Plugin.prototype.pluginApply || defaultPluginApply;

        //插件自定义渲染
        const customRender = Plugin.prototype.customRender || defaultCustomRender

        //处理 工具栏状态更新
        const changePluginConfigHandler = function () {
            let newconfig = actions.plugin.getPluginConfigById(id) || {};
            if (isFunction(changePluginConfig)) {
                newconfig = changePluginConfig.call(this, newconfig)

            }
            newconfig.express = {}
            actions.plugin.setPluginConfigById(id, newconfig);
        }
        //插件内部主动关闭 
        Plugin.prototype.pluginWantClose = function () {
            changePluginConfigHandler.call(this)
            actions.plugin.removePluginStatus("actionList", id);
            actions.plugin.setCommon(["openId"], "");
            
        }
        Plugin.prototype.componentWillMount = function () {
            this.pluginConfig = actions.plugin.getPluginConfigById(id);
           
            isFunction(old_componentWillMount) && old_componentWillMount.call(this);
        }
        Plugin.prototype.render = function () {
            const props = this.props;
            if (pluginBeforeOpen.call(this)) {
                if (type === "modal") {
                    if (unModal) {
                        modalConfig.className = (modalConfig.className || "") + " modal-no-event";
                        modalConfig.dialogClassName = (modalConfig.dialogClassName || "") + " modal-event";
                        modalConfig.backdrop = false;
                        modalConfig.resizeClassName = id + "_drop";
                        setTimeout(() => {
                            const resizeWrap = document.querySelector("." + modalConfig.resizeClassName);
                            resizeWrap.parentNode.style.pointerEvents = "none";
                            resizeWrap.parentNode.parentNode.style.pointerEvents = "none";
                            resizeWrap.style.pointerEvents = "auto";
                        })


                    }
                    const close = callback => {
                        const result = callback.call(this);
                        if (result) {
                            cancelGridFocus && grid.selectCells(grid.getSelectedCell())
                            actions.plugin.removePluginStatus("actionList", id)
                            actions.plugin.setCommon(["openId"], "");
                            
                            if (typeof result != "boolean" && this.pluginConfig.express && this.pluginConfig.express.callback) {
                                this.pluginConfig.express.callback(result);

                            }

                            changePluginConfigHandler.call(this)

                        }

                    };
                    const { hideFooter } = modalConfig;
                    const _modalConfig = {...modalConfig,...this.modalConfig};
                    return <Fragment>
                        {customRender.call(this)}
                        <NCModal
                            show={this.controlModal ? this.controlModal.call(this) : true}
                            onHide={close.bind(this, pluginWillClosed)}
                            backdrop={"static"}
                            ref={NCModal => (this.NCModal = NCModal)}
                            onEntered={()=>cancelGridFocus && grid.getInstance().deselectCell()}
                            {..._modalConfig }
                        >
                            <NCHotKeys
                                keyMap={{
                                    sureBtnHandler: NCHotKeys.USUAL_KEYS.NC_MODAL_CONFIRM,
                                    cancelBtnHandler: NCHotKeys.USUAL_KEYS.NC_MODAL_CALCEL
                                }}
                                handlers={{
                                    sureBtnHandler: () => {
                                        // 确定按钮的事件 增加top的判断避免所有弹窗逻辑都被触发 by bbqin
                                        if (this.NCModal && this.NCModal.isTopModal()) {
                                            console.log(
                                                this.NCModal.isTopModal()
                                            );
                                            close.call(this, pluginWillSubmit);
                                        }
                                    },
                                    cancelBtnHandler: () => {
                                        // 取消按钮的事件 增加top的判断避免所有弹窗逻辑都被触发  by bbqin
                                        if (this.NCModal && this.NCModal.isTopModal()) {
                                            close.call(this, pluginWillClosed)
                                        }
                                    }
                                }}
                                className="simpleModal-hotkeys-wrapper"
                                focused={true}
                                attach={document.body}
                                display="inline-block"
                            />

                            <NCModal.Header closeButton ><NCModal.Title>{formatDesignMultiLang[label] || label}</NCModal.Title></NCModal.Header>
                            <NCModal.Body className={id}>
                                {old_render.call(this)}
                            </NCModal.Body>
                            {!hideFooter && <NCModal.Footer>
                                {renderMoreBtn && renderMoreBtn.call(this)}
                                <NCTooltip
                                    placement="top"
                                    inverse
                                    overlay={`${formatDesignMultiLang['formatDesign-000040']}  (${
                                        NCHotKeys.USUAL_KEYS.NC_MODAL_CONFIRM
                                        })`}
                                    trigger={["hover", "focus"]}
                                    className="model-helper-overlay"
                                >
                                    <NCButton colors="primary" onClick={close.bind(this, pluginWillSubmit)}>{formatDesignMultiLang['formatDesign-000040']}<span className="text-decoration-underline">(Y)</span></NCButton>
                                </NCTooltip>

                                <NCTooltip
                                    placement="top"
                                    inverse
                                    overlay={`${formatDesignMultiLang['formatDesign-000041']}  (${
                                        NCHotKeys.USUAL_KEYS.NC_MODAL_CALCEL
                                        })`}
                                    trigger={["hover", "focus"]}
                                    className="model-helper-overlay"
                                >
                                    <NCButton onClick={close.bind(this, pluginWillClosed)}>{formatDesignMultiLang['formatDesign-000041']}<span className="text-decoration-underline">(N)</span></NCButton>
                                </NCTooltip>


                                {showApplication ? <NCButton onClick={()=>{
                                    if(pluginApply.call(this)){
                                        //IE性能差，会出现快速闪退，或者不弹的情况
                                        setTimeout(() => {
                                            toast({ content: formatDesignMultiLang['formatDesign-000728'], color: "success" });
                                        }, 50)
                                    }
                                    }}>{formatDesignMultiLang['formatDesign-000042']}</NCButton> : null}
                            </NCModal.Footer>}
                        </NCModal >
                    </Fragment>
                        ;
                } else if (type === "tool" || type ==='custom') {
                    return old_render.call(this);
                } else if (type === "unvisible") {
                    old_render.call(this);
                    //无UI的插件默认是一次性的执行完就关闭
                    actions.plugin.removePluginStatus("actionList", id);
                    actions.plugin.setCommon(["openId"], "");
                    
                    changePluginConfigHandler.call(this);
                    return null;
                }
            } else {
                actions.plugin.removePluginStatus("actionList", id)
                return null;
            }

        }
        Plugin.prototype.componentWillReceiveProps = function (nextProps) {
            isFunction(old_componentWillReceiveProps) && old_componentWillReceiveProps.call(this, nextProps);

        }
        Plugin.prototype.shouldComponentUpdate = function (nextProps) {
            if (isFunction(old_shouldComponentUpdate)) {
                return old_shouldComponentUpdate.call(this, nextProps)
            } else {
                return true;
            }

        }
        //合并组件的 store数据依赖和 固定的依赖参数
        function _mapStateToProps(state) {
            let pluginProps, _pluginProps = {}
            if (isFunction(mapStateToProps)) {
                pluginProps = mapStateToProps(state);
            }
            const param = state.plugin.getIn(["pluginConfigMap", id, "express", "param"])
            //所有插件都要订阅的数据，目前为空
            _pluginProps = {
                param: (param && param.toJS )? param.toJS() : ""
            }
            return Object.assign({}, _pluginProps, pluginProps);
        }
        return connect(_mapStateToProps)(Plugin);

    }
}