/**
 * Created by yunlong on 16/10/11.
 */
import React from 'react';
import { Form, Input, Button,Select, Checkbox, Radio, Col, Icon } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const InputGroup = Input.Group;
const Option=Select.Option;
const selectAfter = (
    <Select defaultValue="人" style={{ width: 70 }}>
        <Option value="户">户</Option>
        <Option value="人">人</Option>
    </Select>
);

class CommunityInfo extends React.Component{
    handleSubmit(e) {
        e.preventDefault();
        console.log('Received values of form:', this.props.form.getFieldsValue());
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 3},
            wrapperCol: { span: 10 },
        }
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
        var scenes=[];
        for(var i in sceneMap){
            scenes.push(
                <RadioButton key={i} value={i}>{sceneMap[i]}</RadioButton>
            )
        }
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="社区名称"
                >
                    <Input type="text" placeholder="" />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="地址"
                >
                    {getFieldDecorator('pass', { initialValue: '' })(
                        <Input type="text" placeholder="Address/地址" />
                    )}
                </FormItem>
                <FormItem
                    label="小区规模"
                    labelCol={{ span: 3 }}
                >
                        <RadioGroup>
                            {scenes}
                        </RadioGroup>

                </FormItem>

                <FormItem
                    label="客服电话"
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 16 }}
                >
                    <InputGroup>
                        <Col span="4">
                            <Input id="tel1" defaultValue="086" />
                        </Col>
                        <Col span="1">
                            <p className="ant-form-split">-</p>
                        </Col>
                        <Col span="6">
                            <Input id="tel1" />
                        </Col>
                    </InputGroup>
                </FormItem>
                <FormItem
                    label="小区人数"
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 10 }}
                >
                    <Input addonAfter={selectAfter} placeholder="1"  />
                </FormItem>
                <FormItem wrapperCol={{ span: 4, offset: 3 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit">更新社区</Button>
                </FormItem>
            </Form>
        );
    }
};

CommunityInfo = Form.create()(CommunityInfo);

export default  CommunityInfo;