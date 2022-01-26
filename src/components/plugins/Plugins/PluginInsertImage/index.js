import React, { Component } from "react";
import plugInConstructor from "../plugInConstructor";
// import { namespace } from "../../public/const";
// import { actions, base, toast, immutable } from "nc-lightapp-front";
// const { NCButton, NCTooltip } = base;
// import {
//     grid,
//     openPlugin,
//     getSinglCellFromFormatCellByCoordinate,
//     extendArea
// } from "../../core/api";
// const { fromJS } = immutable;
import "./index.less";

// const keylabel = "com.ufsoft.table.CombinedCell";

function PluginInsertImageWapper({ id, label, isTool }) {
    // const { plugin } = namespace;

    //插件生成器的 配置参数
    const config = {
        id: id, //插件id
        label, //插件名称
        icon: "", //插件图标
        type: "tool",
        // mapStateToProps: function (state) {},
    };
    @plugInConstructor(config)
    class PluginInsertImage extends Component {
        constructor(props) {
            super(props);
        }

        // onChange = (e) => {
        //     const files = e.target.files;
        //     if (!files.length) return;
        //     const file = files[0];
        //     if (file.size > 122880)
        //         return toast({
        //             color: "warning",
        //             content: formatDesignMultiLang["formatDesign-000975"],
        //         });
        //     const { row, col, endRow, endCol } = grid.getSelectedCell();

        //     const minRow = Math.min(row, endRow);
        //     const minCol = Math.min(col, endCol);
        //     const maxRow = Math.max(row, endRow);
        //     const maxCol = Math.max(col, endCol);

        //     const reader = new FileReader();

        //     reader.onload = function (e) {
        //         let img = new Image();
        //         img.src = e.target.result;
        //         img.onload = async function () {
        //             //todo 这里要判断当前是否是合并单元格，然后再是否执行
        //             if (row !== endRow || col !== endCol) {
        //                 //合并并且赋值
        //                 const m_AreaDatas_immutable =
        //                     actions.reportModel.getCommon([
        //                         "m_formatCellsModel",
        //                         "m_AreaDatas",
        //                     ]);
        //                 const m_AreaDatas = m_AreaDatas_immutable
        //                     ? m_AreaDatas_immutable.toJS()
        //                     : {};

        //                 let flag = false;
        //                 Object.keys(m_AreaDatas).forEach((key) => {
        //                     const value = m_AreaDatas[key];
        //                     if (key.includes(keylabel)) {
        //                         const {
        //                             area: {
        //                                 startCell: { row: row1, col: col1 },
        //                                 endCell: { row: row2, col: col2 },
        //                             },
        //                         } = value;
        //                         if (
        //                             minRow == row1 &&
        //                             minCol == col1 &&
        //                             maxRow == row2 &&
        //                             maxCol == col2
        //                         ) {
        //                             flag = true;
        //                         }
        //                     }
        //                 });

        //                 if (!flag) await openPlugin("PluginCombinCell");
        //             }

        //             const cell =
        //                 getSinglCellFromFormatCellByCoordinate({
        //                     row: minRow,
        //                     col: minCol,
        //                 }) || {};

        //             const value = {
        //                 ...cell,
        //                 m_Value: {
        //                     width: this.width,
        //                     height: this.height,
        //                     type: file.type.split("/")[1],
        //                     imageDataJson: e.target.result,
        //                     size: file.size,
        //                 },
        //                 m_nRow: minRow,
        //                 m_nCol: minCol,
        //                 isPrint: false,
        //             };

        //             actions.reportModel.setCommon(
        //                 [
        //                     "m_formatCellsModel",
        //                     "m_cells",
        //                     `${minRow},${minCol}`,
        //                 ],
        //                 fromJS(value)
        //             );
        //             document.getElementById("insertImageFile").value = null;
        //         };
        //     };
        //     reader.readAsDataURL(file);
        // };

        render() {
            return (
                <div>
                    图片
                </div>
                // <NCTooltip
                //     placement="top"
                //     overlay={formatDesignMultiLang["formatDesign-000957"]}
                //     trigger="hover"
                // >
                //     <div className="tool-btn insert-file">
                //         <NCButton
                //             onClick={() => {
                //                 const selectedCell = grid.getSelectedCell();
                //                 const array =
                //                     extendArea.findRange(selectedCell);
                //                 if (array.length)
                //                     return toast({
                //                         color: "warning",
                //                         content:
                //                             formatDesignMultiLang[
                //                                 "formatDesign-000974"
                //                             ],
                //                     });
                //                 document
                //                     .getElementById("insertImageFile")
                //                     .click();
                //             }}
                //             className="nc-button-wrapper button-weishabushezhiyigemoren bt-icon  u-button-icon"
                //         >
                //             <span className="icon iconfont icon-charudanyuantupian" />
                //         </NCButton>

                //         <input
                //             type="file"
                //             id="insertImageFile"
                //             accept="image/*"
                //             onChange={this.onChange}
                //         />
                //     </div>
                // </NCTooltip>
            );
        }
    }
    return PluginInsertImage;
}
export default {
    component: PluginInsertImageWapper,
    label: "formatDesign-000957",
    isTool: true,
};
