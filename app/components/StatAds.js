/**
 * Created by yunlong on 16/10/13.
 */
import React from 'react';
import StatSearchBox from './StatSearchBox'
import moment from 'moment'
import {Form, Input, Button,Card, Table} from 'antd';
const columns = [
    {
        title: "详情",
        children: [
            {
                title: '社区名称',
                dataIndex: 'sqname',
                key: 'sqname'
            },
            {
                title: '日期',
                dataIndex: 'date',
                key: 'date',
                render: function (text) {
                    var unix = moment.unix(text).format("YYYY-MM-DD")
                    return unix;
                }
            },
            {
                title: '类型',
                dataIndex: 'type',
                key: 'type'
            }
        ]
    },
    {
        title: "PC",
        children: [
            {
                title: '请求数',
                dataIndex: 'ad_pc_req',
                key: 'ad_pc_req',
                sorter: (a, b) => a.ad_pc_req - b.ad_pc_req,
            },
            {
                title: '请求数',
                dataIndex: 'ad_pc_show',
                key: 'ad_pc_show',
                sorter: (a, b) => a.ad_pc_show - b.ad_pc_show
            },
            {
                title: '点击数',
                dataIndex: 'ad_pc_click',
                key: 'ad_pc_click',
                sorter: (a, b) => a.ad_pc_click - b.ad_pc_click
            }
        ]
    },
    {
        title: "MOBILE",
        children: [
            {
                title: '请求数',
                dataIndex: 'ad_mobile_req',
                key: 'ad_mobile_req',
                sorter: (a, b) => a.ad_mobile_req - b.ad_mobile_req
            },
            {
                title: '请求数',
                dataIndex: 'ad_mobile_show',
                key: 'ad_mobile_show',
                sorter: (a, b) => a.ad_mobile_show - b.ad_mobile_show
            },
            {
                title: '点击数',
                dataIndex: 'ad_mobile_click',
                key: 'ad_mobile_click',
                sorter: (a, b) => a.ad_mobile_click - b.ad_mobile_click
            }
        ]
    }


];
const pagination = {
    showSizeChanger: true,
    onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
    },
    onChange(current) {
        console.log('Current: ', current);
    },
};

class StatAds extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        this.props.fetchTableData(e);
    }

    render() {
        const {opts,data,loading}=this.props;
        return (
            <div>
                <Card title="广告数据" style={{width: "100%"}}>
                    <StatSearchBox opts={opts} handleSubmit={this.handleSubmit}/>
                </Card>
                    <Table size="small" columns={columns} dataSource={data}
                           loading={loading} pagination={pagination}/>
            </div>
        )
    }
}

export default StatAds;