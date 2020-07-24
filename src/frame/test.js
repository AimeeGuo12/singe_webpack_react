
export default {
    name: 'ab',

    data: {
        recordData: {}, // 浏览时， 用于进入编辑
        conditionSQL: '', //验证公式SQL值
        conditionStr: '', //验证公式字符串值
        showCalOrder: false, // 计算顺序弹窗
        showOrder: false, // 显示顺序弹窗
        showModal: false,
    },
    sync: {
        update(state, payload) {
            return {
                ...state,
                ...payload
            };
        }
    },
    async: {
        // 获取头部年度下拉
        getYear(dispatch, getState, payload) {
            return proFetch({
                // url: '/nccloud/hrys/budgetitemcompose/QueryYearAction.do',
                url: '/nccloud/hrys/budgetitem/BudgetItemYearAction.do',
                body: payload.postData,
            })
        },
        // 查询接口
        // getTableData
        getTableData(dispatch, getState, payload) {
            return proFetch({
                url: '/nccloud/hrys/budgetitem/RefreshBudgetItemAction.do',
                body: payload.postData
            })
        }
    }
}