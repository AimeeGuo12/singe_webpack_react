import {ADD1, ADD2} from './action-type';

const add1 = (data) => {
    ({
        type: ADD1, data: data
    })
}

const add2 = () => {
    ({
        type: ADD2, data1: name
    })
}

const addNameAsync = (name) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(addNameCreater(name))
        },2000);
    }
}
export {
    add1,
    add2,
    addNameAsync
}