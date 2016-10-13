/**
 * Created by yunlong on 16/9/30.
 */
import { combineReducers} from 'redux'
import DataTableReducer from './DataTableReducers'
import SiderReducer from './SiderReducers'
import  StatAdsReducers from './StatAdsReducers'
const rootReducer =combineReducers(
    {
        DataTableReducer:DataTableReducer,
        SiderReducer:SiderReducer,
        StatAdsReducers:StatAdsReducers
    }
)
export default  rootReducer;
