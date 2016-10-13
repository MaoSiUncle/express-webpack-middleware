/**
 * Created by yunlong on 16/10/13.
 */
import React from 'react';
import { connect } from 'react-redux'
import {fetch_sq_data,fetch_ad_data} from '../actions/StatAdsActions';
import StatAds from '../components/StatAds'

class StatAdsContainer extends React.Component{

    constructor(props){
        super(props);
        this.loadData=this.loadData.bind(this);
    }
    loadData(e){
        console.log(e);
        this.props.dispatch(fetch_ad_data(e));
    }
    componentWillMount(){
        this.props.dispatch(fetch_sq_data())
    }
    render(){
        const {opts,data,loading}=this.props;


        return(
            <div>
                <StatAds opts={opts} data={data}  loading={loading} fetchTableData={this.loadData}></StatAds>
            </div>
        )

    }
}
function mapStateToProps(state) {
    const {StatAdsReducers }=state;
    console.log(StatAdsReducers);
    return {data:StatAdsReducers.data,loading:StatAdsReducers.loading,opts:StatAdsReducers.opts};

}
export default connect(mapStateToProps)(StatAdsContainer);
