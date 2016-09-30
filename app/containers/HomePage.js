/**
 * Created by yunlong on 16/9/30.
 */
import React from 'react';
import { connect } from 'react-redux'
import DataTable from '../components/DataTable'
import fetchData from '../actions/DataTableActions'
class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.loadData=this.loadData.bind(this);
    }
    loadData(){
        this.props.dispatch(fetchData());
    }
    render(){
        const {data}=this.props;
        return(
        <div>
            <DataTable data={data} loadData={this.loadData}></DataTable>
        </div>)

    }
}
 function mapStateToProps(state) {
    const {DataTableReducer }=state;
     console.log(DataTableReducer)
    return {data:DataTableReducer.data};

}
export default  connect(mapStateToProps)(HomePage);