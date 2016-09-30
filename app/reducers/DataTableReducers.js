/**
 * Created by yunlong on 16/9/30.
 */
import {REQUEST_DATA,RECEIVE_DATA_SUCCESS,RECEIVE_DATA_FAIL} from '../actions/DataTableActions'

function DataTableReducers(state={},action) {
    //reduce 会获取上次的state,即prevstate ，根据action的不同 并且参考 action中绑定的数据，返回新的state 通知store进行更新。
    switch (action.type){
        case REQUEST_DATA:
            return Object.assign({},state,{isloading:true});
        case RECEIVE_DATA_FAIL:
            return Object.assign({},state,{isloading:false,data:[]})
        case RECEIVE_DATA_SUCCESS:
            return Object.assign({},state,{isloading:false,data:action.data})//在编写action已经将最终获取的data绑定到action中。
        default:return state
    }

}
export default DataTableReducers