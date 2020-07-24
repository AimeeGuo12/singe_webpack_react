import {connect} from 'react-redux';


const mapStateToProps = state => state; // 将store中的数据映射到props中

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default (component) => {
    return connect(mapStateToProps, mapDispatchToProps)(component)
}