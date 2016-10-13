/**
 * Created by yunlong on 16/10/8.
 */
/**
 * Created by yunlong on 16/9/30.
 */
import fetch from 'isomorphic-fetch';
export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA_SUCCESS= 'RECEIVE_DATA_SUCCESS'
export const RECEIVE_DATA_FAIL='RECEIVE_DATA_FAIL'

function request_data() {
    return {
        type:REQUEST_DATA
    }
}
function receive_data_success(json) {
    return {
        type:RECEIVE_DATA_SUCCESS,
        receiveAt:Date.now(),
        data:json
    }
}
function receive_data_fail(status) {
    return{
        type:RECEIVE_DATA_FAIL,
        receiveAt:Date.now(),
        data:status
    }
}

export default function fetchData() {
    //自动注入 dispatch
    return dispatch=>{
        dispatch(request_data())//分发action 发送请求action发出
        //实际发送请求
        fetch('/api/getTable').then(response=>{
            if(response.status>400){
                //处理异常情况
                dispatch(receive_data_fail(response.status));//获取数据失败 触发failaction
                return false;
            }
            return response.json();//返回数据 json化
        }).then(json=>{
            dispatch(receive_data_success(json))//获取数据成功 触发success action 将json数据传入 绑定至action对象中。
        })
    }
}