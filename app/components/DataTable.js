/**
 * Created by yunlong on 16/9/30.
 */
import React from 'react'
import {Table,Icon} from 'antd'
const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
        <span>
      <a href="#">操作一{record.name}</a>
      <span className="ant-divider" />
      <a href="#">操作二</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        更多 <Icon type="down" />
      </a>
    </span>
    ),
}];

class DataTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: [],
            pagination: {},
            loading: false,
        }
    }
    componentWillMount(){
        this.props.loadData();
    }
    render(){
        const {data}=this.props;
        return (
            <Table columns={columns} dataSource={data} />
        )
    }
}
export default DataTable;