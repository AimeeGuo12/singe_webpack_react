/*global formatDesignMultiLang, */
import React, { Component } from "react";
import plugInConstructor from "../plugInConstructor";
import "./index.less";
import { Modal, Button } from 'antd';
// 预览插件
function PluginPreviewWapper({ id, label }) {
    //插件生成器的 配置参数
    const config = {
        id: id, //插件id
        label, //插件名称
        icon: "", //插件图标
        type: "tool",
        //对store里面的数据的订阅，当这些数据发生变化时，组件会重新渲染
        // mapStateToProps: function () {
        //     return {
        //         reportId: actions.reportModel.getReportId(),
        //     };
        // },
    };
    @plugInConstructor(config)
    class PluginPreview extends Component {
        constructor(props) {
            super(props);
            if (props.use) {
                props.use.search('light_report')
            }
            this.customSearchRef = null
            this.state = {
                visible: false,
                confirmLoading: false,
                modalText: 'Content of the modal'
            };
        }

        showModal = () => {
            this.setState({
                visible: true
            });
        };

        handleOk = () => {
            this.setState({
                visible: false
            });
            // setModalText('The modal will be closed after two seconds');
            // setConfirmLoading(true);
            // setTimeout(() => {
            //   setVisible(false);
            //   setConfirmLoading(false);
            // }, 2000);
        };

        handleCancel = () => {
            console.log('Clicked cancel button');
            this.setState({
                visible: false
            });
        };
        render() {
            const {visible, confirmLoading, modalText} = this.state;
            return (
                <div>

                    <Button type="primary" onClick={this.showModal}>
                        Open Modal with async logic </Button>
                    <Modal
                        title="Title"
                        visible={visible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                    >
                        <p>{modalText}</p>
                    </Modal>
                    {/* <NCTooltip placement='top' overlay={formatDesignMultiLang["formatDesign-000719"]} trigger='hover'>
                        <div className='tool-btn active'>
                            <NCButton shape='icon' bordered onClick={() => this.checkPreview()}>
                                <span className='icon iconfont icon-yulan' />
                            </NCButton>
                        </div>
                    </NCTooltip>
                    {this.state.show && (
                        <NCModal
                            show={true}
                            onHide={() => this.show(false)}
                            size='xlg'
                            backdrop={"static"}
                            maxHeight={800}
                            className='previewModal'>
                            <NCModal.Header closeButton>
                                <NCModal.Title>{formatDesignMultiLang["formatDesign-000719"]}</NCModal.Title>
                            </NCModal.Header>
                            <NCModal.Body>{this.createPreviewContent()}</NCModal.Body>
                        </NCModal>
                    )}
                    <div style={{
                        display: 'none',
                    }}>
                    {this.props.search.NCCreateSearch('light_report', {
                        searchBtnName: '确定',
                        // onlyShowAdvArea: false,
                        showAdvSearchPlanBtn: true,
                        // showAdvBtn: false, // 是否显示高级查询按钮和查询方案按钮 ,默认显示
                        // showClearBtn: false, // 是否显示清空按钮
                        // showAdvSearchPlanBtn: false, 
                        replaceAdvBody: this.renderCustomSearchBody,
                        clickSearchBtn: this.checkPreview2
                    })}
                    </div> */}
                </div>
            );
        }
    }
    // return createPage({})(PluginPreview);
    return PluginPreview
}
export default {
    component: PluginPreviewWapper,
    label: "formatDesign-000719",
    isTool: true,
    checkDisabled: () => {
        return false;
    },
};
