

export default{
    name: 'emp',
    data: {
        visible: true,
        name: 'Aimee',
        count: 1
    },
    sync: {
        update(state, payload) {
            return {
                ...state,
                ...payload
            }
        }
    },
    async: {
        getData(state, payload) {

        }
    }
}