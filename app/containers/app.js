/**
 * Created by yunlong on 16/9/28.
 */
/**
 * Created by yunlong on 16/9/27.
 */
import React from 'react';
import Sider from '../components/Sider';
import Header from '../components/Header'
import {  Breadcrumb,Card } from 'antd';
class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {msg,data}=this.props;
        return(
            <div>
                <div className="ant-layout-aside">
                    <Sider />
                    <div className="ant-layout-main">
                       <Header/>
                        <Card>
                            <Breadcrumb  separator=">"  {...this.props}/>
                        </Card>

                        <div className="ant-layout-container">
                            <div className="ant-layout-content">
                                <div style={{ height: 590 }}>
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                        <div className="ant-layout-footer">
                            Demo
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;

