/**
 * Created by yunlong on 16/9/29.
 */
import {REQUEST_DATA,RECEIVE_DATA } from '../actions/SiderActions';
function SiderReducers(state={},action) {
    switch (action.type){
        case REQUEST_DATA:
            return Object.assign({},state,{msg:"loading",data:"nodata"});
        case RECEIVE_DATA:
            return Object.assign({},state,{msg:"loaded",data:action.data});
        default:return state
    }
}
export default SiderReducers
