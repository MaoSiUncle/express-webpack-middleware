/**
 * Created by yunlong on 16/9/30.
 */
import React from 'react'
import {Table,Icon} from 'antd'
const columns = [{
    title: '社区名称',
    dataIndex: 'name',
    key: 'name',
    sorter:(a,b)=>(a.name.length-b.name.length)
}, {
    title: '类型',
    dataIndex: 'scene',
    key: 'scene',
    render:function(text,record,index){
        var _scene="";
        var sceneMap = {
            'community' : '小区',
            'airport'   : '机场',
            'school'    : '学校',
            'station'   : '车站',
            'operator'  : '运营商',
            'sight'     : '景区',
            'hotel'     : '酒店',
            'market'    : '购物商场',
            'officeBuilding':'写字楼',
            'factory':'工厂',
            'hospital'  : '医院',
            'duplicate':'多类型'
        }
        if(typeof text == "object"){
            if(text.length>1){
                _scene = "多类型";
            }else{
                _scene = sceneMap[ text ];
            }
        }else{

            _scene = sceneMap[ text ];
        }
        return _scene;
    }
}, {
    title: '地区',
    dataIndex: 'location',
    key: 'location',
    render:function (text,record,index) {
        return text.join(',');
    }
}, {
    title: '设备数',
    dataIndex: 'devices',
    key: 'devices',
    render:function(text,record,index){
        return text.length;
    },
    sorter:function (a,b) {
        return a.devices.length-b.devices.length;
    }
}, {
    title: '推广类型',
    dataIndex: 'deviceType',
    key: 'deviceType',
    render:function(text,record,index){
        var deviceTypeName='设备';
        var kvForDevice={
            //'js':'JS',
            'js':"厂商JS",
            'test':"媒体JS",
            'test1':"特殊JS"
        }
        if(record.setting && record.setting['deviceType']){
            var deviceTypeKey=record.setting['deviceType'];
            deviceTypeName=kvForDevice[deviceTypeKey]?kvForDevice[deviceTypeKey]:'设备';
        };
       return deviceTypeName;

    }
}, {
    title: '操作',
    key: 'operation',
    render: function (text,record) {
        return text;
    },
}];

class DataTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: [],
            pagination: {}
        }
    }
    componentWillMount(){
        this.props.loadData();
    }
    render(){
        const {data,isloading}=this.props;
        console.log(isloading)
        return (
            <Table columns={columns} loading={isloading} dataSource={data} />
        )
    }
}
export default DataTable;