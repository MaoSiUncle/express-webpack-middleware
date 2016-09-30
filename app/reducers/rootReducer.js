/**
 * Created by yunlong on 16/9/30.
 */
import { combineReducers} from 'redux'
import DataTableReducer from './DataTableReducers'
import SiderReducer from './SiderReducers'

const rootReducer =combineReducers(
    {DataTableReducer:DataTableReducer,SiderReducer:SiderReducer}
)
export default  rootReducer;
