/**
 * Created by yunlong on 16/10/13.
 */
import fetch from 'isomorphic-fetch';
import moment from 'moment';
export const REQUEST_SQ_DATA = 'REQUEST_SQ_DATA'
export const RECEIVE_SQ_DATA_SUCCESS= 'RECEIVE_SQ_DATA_SUCCESS'
export const RECEIVE_SQ_DATA_FAIL='RECEIVE_SQ_DATA_FAIL'
export const REQUEST_AD_DATA = 'REQUEST_AD_DATA'
export const RECEIVE_AD_DATA_SUCCESS= 'RECEIVE_AD_DATA_SUCCESS'
export const RECEIVE_AD_DATA_FAIL='RECEIVE_AD_DATA_FAIL'
function request_sq_data() {
    return {
        type:REQUEST_SQ_DATA
    }
}
function receive_sq_data_success(json) {
    return {
        type:RECEIVE_SQ_DATA_SUCCESS,
        opts:json,
        msg:"Success"
    }

}
function receive_sq_data_fail(status) {
    return {
        type:RECEIVE_SQ_DATA_FAIL,
        opts:[],
        msg:"Fail:"+status
    }

}

function request_ad_data(sqname) {
    return {
        type:REQUEST_AD_DATA,
        loading:true,
        sqname:sqname
    }
}
function receive_ad_data_success(json) {

    return {
        type:RECEIVE_AD_DATA_SUCCESS,
        data:json,
        loading:false,
        msg:"Success"
    }

}
function receive_ad_data_fail(status) {
    return {
        type:RECEIVE_AD_DATA_FAIL,
        data:[],
        loading:false,
        msg:"Fail:"+status
    }

}
export function fetch_sq_data() {
    return dispatch=>{
        dispatch(request_sq_data())
        return fetch('/api/getTable')
            .then(response => {
                if(response.status>400){
                    //处理异常情况
                    dispatch(receive_sq_data_fail(response.status));//获取数据失败 触发failaction
                    return false;
                }
               return response.json()})
            .then(json => dispatch(receive_sq_data_success(json)))
    }
}

export  function  fetch_ad_data(e) {
    var sqid = e.select&&e.select.key;
    if (!sqid) {
        return false;
    }
    var bdate = moment().format('YYYYMMDD');
    var edate = moment().format('YYYYMMDD');
    if (e.daterange && e.daterange.length == 2) {
        bdate = e.daterange[0].format('YYYYMMDD');
        edate = e.daterange[1].format('YYYYMMDD');
    }
    var sqname=e.select.label;
    return (dispatch)=>{
        dispatch(request_ad_data(sqname));
        return fetch('/api/stats/ads/'+sqid+'/'+bdate+'/'+edate)
               .then(response => {
                if(response.status>400){
                    //处理异常情况
                    dispatch(receive_ad_data_fail(response.status));//获取数据失败 触发failaction
                    return false;
                }
               return response.json()
               })
            .then(json => dispatch(
                receive_ad_data_success(json)))
    }

}