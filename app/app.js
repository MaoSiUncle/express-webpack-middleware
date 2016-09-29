/**
 * Created by yunlong on 16/9/28.
 */
/**
 * Created by yunlong on 16/9/27.
 */
import React from 'react';
import Sider from './components/Sider';
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import {fetchData} from './actions/SiderActions'
import { connect } from 'react-redux'
class App extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
       this.props.dispatch(fetchData());//分发actions
    }
    render(){
        const {msg,data}=this.props;
        return(
            <div>
                <div className="ant-layout-aside">
                    <Sider onClick={this.handleClick}/>
                    <div className="ant-layout-main">
                       <Header/>
                        <Breadcrumb />
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
function mapStateToProps(state) {
  const {fetchData}=state;
    const {data,msg}=fetchData;
    return {fetchData,msg,data};

}
export default connect(mapStateToProps)(App);

