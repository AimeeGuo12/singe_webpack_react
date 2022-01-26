export default {
    name: 'pluginData',
    data: {
        actionList: [],
        disabledList: []
    },
    sync: {
        update:(state,payload)=>{
            return {
                ...state,
                ...payload
            };
        }
    },
    // async: {
    // }
}