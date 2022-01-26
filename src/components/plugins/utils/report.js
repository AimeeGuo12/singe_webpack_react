// import { undo, redo } from '../../plugIn/PlugInUndo/method';
// import save from '../../plugIn/PlugInSave/method';
import { actions } from 'nc-lightapp-front';
// import { changeReportType } from '../../plugIn/PluginChangeReportType';

// 菜单栏
export const menu = [
    {
        id: 'file',
        label: 'formatDesign-000019',
        plugin: [
            {
                id: 'PlugInSave',
                label: 'formatDesign-000550',
                subLabel: 'Ctrl+S',
                onClick: () => {console.log('save')},//save,
                disabled: () => {
                    const group = actions.plugin.getCommon(['actionGroup']).toJS();
                    return !(group.past.length > 1 && window.isReportEdit)
                },
            },
            "PlugInPrintSetting",
        ],
    },
    {
        id: 'edit',
        label: 'formatDesign-000020',
        plugin: [
            {
                id: 'undo',
                label: 'formatDesign-000021',
                subLabel: 'Ctrl+Z',
                onClick: () => {console.log('undo')},//undo,
                disabled: () => {
                    const group = actions.plugin.getCommon(['actionGroup']).toJS();
                    return !(group.past.length > 1)
                },
            },
            {
                id: 'redo',
                label: 'formatDesign-000022',
                subLabel: 'Ctrl+Shift+Z',
                onClick: () => {console.log('redo')},//redo,
                disabled: () => {
                    const group = actions.plugin.getCommon(['actionGroup']).toJS();
                    return !(group.future.length > 0)
                },
            },
            // ()=>({
            //     label:'formatDesign-000006',
            //     children:[
            //         "PlugInSave",
            //         {
            //             label:'formatDesign-000023',
            //             onClick:()=>{},
            //             visible:()=>true,
            //             disabled:()=>true,
            //         },
            //     ],
            // }),
            "FreeRepEditPluginCut",
            "PluginCopy",
            "PluginPaste",
        ],
    },
    {
        id: 'format',
        label: 'formatDesign-000024',
        plugin: ["PluginExAreaDefine", "PluginExAreaCombine", "PluginExAreaSeperateRow", "PluginExAreaSeperateCol", "PluginExAreaDelete", "UnitFormula", "AnaCellAttributePlugin", "PluginConditionalFormat", "PluginAccuracy"],
    },
    {
        id: 'data',
        label: 'formatDesign-000025',
        plugin: ["PlugInSortManage", "PlugInGroupManage", "AnaFilterPlugin", "Dimension", "ReportParameters", "ExtensionAreaConfig", "PluginVariable", "PluginReportFieldAttribute", 'PluginReportAttributeSetting', "PlugInOrg",'PluginHiddenField', "PluginRegister"],
    },
    {
        id: 'more',
        label: 'formatDesign-000026',
        plugin: [
            "AnaReportNccloudDrillPlugin",
            'PluginDynamicDimension',
            "PluginSiderSet",
            "PrintDataSetting", 
            "GeneratorPrintTem",
            {
                id: 'switchCombineOrExtend',
                label: () => {
                    let reportType = actions.reportModel.getCommon(['reportType']);
                    return reportType === '0'
                        ? formatDesignMultiLang["formatDesign-000818"] /*组合区*/
                        : formatDesignMultiLang["formatDesign-000819"] /*扩展区*/

                },
                onClick: () => {console.log('changeReportType')}//changeReportType,
            },
            
        ],
    }
   
];

// 表格右键菜单
export const gridMenu = [
    //放在数组里表示这几个插件属于一组，会显示分割线
    [
        "PluginExAreaDefine",
        "PluginExAreaDelete",
        "PluginExAreaCombine",
        "PluginExAreaSeperateCol",
        "PluginExAreaSeperateRow",
    ],
    [
        "UnitFormula",
        "AnaCellAttributePlugin",
        "PluginConditionalFormat",
    ],
    [
        "FreeRepEditPluginCut",
        "PluginCopy",
        "PluginPaste",
    ],
    [
        "PluginHideColumn",
        "PluginUnHide",
    ],
];
//!PluginInsertImage 插入图片插件已完成，需要后端提供补丁，如果项目需要的话
// 工具栏
export const tool = [
    [
        ["PlugInSave", 'PluginPreview', "PlugInPrintSetting"],
        ["FreeRepEditPluginCut", "PluginCopy", "PluginPaste"],
        ['PlugInSortChange', 'PlugInSortManage', 'AnaFilterPlugin'],
        ['PluginFixMember', 'PluginImg2Field','PluginTopN', 'PlugInGroupChange', 'PlugInGroupManage'],
        ['PluginStatistic', 'PluginUnStatistic'],
        ['PluginComposeField', 'PluginAreaSetAssist'],
        ['PluginRegionCrossing', 'PluginUnRegionCrossing', 'PluginCrossAreaCalculate', 'PluginRevertCrossAreaCalculate'],
        // ['PluginTreeShape', 'PluginPaging'],
        ['PluginPaging'],
    ],
    [
        ["PlugInTool", 'FreeRepEditPluginFormat', "FreeRepEditPluginDelete"],
        ['PluginChangeTableStyle', 'CellAttributeToolBarPlugIn'],
        ['PluginCombinCell', 'PluginCombine', 'PluginConditionalFormat','PluginHiddenField'],
    ],
];

