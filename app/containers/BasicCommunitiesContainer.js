/**
 * Created by yunlong on 16/10/8.
 */
import React from 'react';
import { connect } from 'react-redux'
import BasicCommunitiesList from '../components/BasicCommunitiesList'
import fetchData from '../actions/BasicCommunitiesActions'
class BasicCommunitiesContainer extends React.Component{
    constructor(props){
        super(props);
        this.loadData=this.loadData.bind(this);
    }
    loadData(){
        this.props.dispatch(fetchData());
    }
    render(){
        const {data,isloading}=this.props;
        return(
            <div>
                <BasicCommunitiesList data={data}  loading={isloading} loadData={this.loadData}></BasicCommunitiesList>
            </div>)

    }
}
function mapStateToProps(state) {
    const {DataTableReducer }=state;
    console.log(DataTableReducer.isloading)
    return {data:DataTableReducer.data,isloading:DataTableReducer.isloading};

}
export default connect(mapStateToProps)(BasicCommunitiesContainer);