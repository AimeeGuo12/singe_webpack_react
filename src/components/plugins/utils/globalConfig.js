import { menu as menuReport ,tool as toolReport, gridMenu as gridMenuReport} from './report';
// import { menu as menuHr ,tool as toolHr, gridMenu as gridMenuHr} from './hr';
// import {getSearchParam} from '../../public/utils';

function getConfig(){
    // const _module = getSearchParam('module');
    let config = {}
    // if(_module==='hr'){
    //     config={
    //         menu:menuHr,
    //         tool:toolHr,
    //         gridMenu:gridMenuHr
    //     }
    // }else{
        config={
            menu:menuReport,
            tool:toolReport,
            gridMenu:gridMenuReport
        }
    // }
    return config
}


export default getConfig;