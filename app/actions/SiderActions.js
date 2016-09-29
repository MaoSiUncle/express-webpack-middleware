/**
 * Created by yunlong on 16/9/29.
 */
import fetch from 'isomorphic-fetch';
export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'

function requestData(){
    return {
        type:REQUEST_DATA
    }
}
function  receiveData(json) {
    return {
        type:RECEIVE_DATA,
        data:json,
        receiveAt:Date.now()
    }
}
export function fetchData(){
    return dispatch=>{
        dispatch(requestData())
        return fetch('/api/getdata')
            .then(response => response.json())
            .then(json => dispatch(receiveData(json)))
    }

}