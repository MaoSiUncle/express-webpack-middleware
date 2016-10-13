/**
 * Created by yunlong on 16/10/13.
 */
/**
 * Created by yunlong on 16/10/13.
 */
import React from 'react';
import {Form, Input, Button, DatePicker, notification, Select} from 'antd';
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;
class StatSearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        //Form表单点击查询 触发handleChange 由父组件传入 handleSubmit
        e.preventDefault();
        var data = this.props.form.getFieldsValue();
        this.props.handleSubmit(data)
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {opts} =this.props;
        console.log(this.props);
        const options = opts&&opts.map(item=> {
            return <Option key={item._id} value={item._id}>{item.name}</Option>
        })
        return (
            <Form inline onSubmit={this.handleChange}>
                <label htmlFor="">社区名称:</label>
                {getFieldDecorator('select')(
                    <Select labelInValue size="small" showSearch
                            style={{width: 200, marginTop: -4 + "px", marginLeft: 10 + 'px'}}
                            placeholder="社区"
                            optionFilterProp="children"
                            notFoundContent="Nothing found"
                    >
                        {options}
                    </Select>
                )}
                <label htmlFor="" style={{marginLeft: 10 + 'px'}}>日期:</label>
                {getFieldDecorator('daterange')(
                    <RangePicker size="small" style={{width: 200, marginLeft: 10 + 'px'}}/>
                )}
                <Button type="primary" htmlType="submit"
                        style={{marginTop: -5 + "px", marginLeft: 10 + 'px'}}>查询</Button>
            </Form>
        )
    }
}
StatSearchBox = Form.create()(StatSearchBox);
export default StatSearchBox;