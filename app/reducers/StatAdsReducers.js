/**
 * Created by yunlong on 16/10/13.
 */
import {REQUEST_SQ_DATA,RECEIVE_SQ_DATA_SUCCESS,RECEIVE_SQ_DATA_FAIL,REQUEST_AD_DATA,RECEIVE_AD_DATA_SUCCESS,RECEIVE_AD_DATA_FAIL} from '../actions/StatAdsActions'
function StatAdsReducers(state={},action) {
    switch (action.type){
        case REQUEST_SQ_DATA:
            return Object.assign({},state,{opts:[]});
        case RECEIVE_SQ_DATA_SUCCESS:
            return Object.assign({},state,{opts:action.opts,msg:action.msg});
        case RECEIVE_SQ_DATA_FAIL:
            return Object.assign({},state,{opts:action.opts,msg:action.msg});
        case REQUEST_AD_DATA:
            return Object.assign({},state,{sqname:action.sqname,data:action.data,loading:action.loading});
        case RECEIVE_AD_DATA_SUCCESS:
            var data=action.data.map(item=>{
                 item['sqname']=state.sqname;
                return item;
            })
            return Object.assign({},state,{data:data,loading:action.loading});
        case RECEIVE_AD_DATA_FAIL:
            return Object.assign({},state,{data:action.data,loading:action.loading});
        default:return state;
    }
}
export default  StatAdsReducers;