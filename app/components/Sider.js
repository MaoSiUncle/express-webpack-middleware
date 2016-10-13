
import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from "react-router";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            'current':'1'
        }

    }
    render() {
        const {handleClick}=this.props;
        const menuArr=[
            {
                text:"基础数据",
                type:"pie-chart",
                key:"1",
                children:[
                    {
                        text:"社区列表",
                        key:"1.1",
                        href:"/basic/communities"
                    }
                ]
            },
            {
                text:"统计数据",
                type:"area-chart",
                key:"2",
                children:[
                    {
                        text:"广告数据",
                        key:"2.1",
                        href:"/stat/ads"
                    }
                ]
            }
        ];
        const items=menuArr.map(function (item) {
            if(item.children.length>0){
                ///有子节点
                var childrenItems=item.children.map(function (child) {
                    return <Menu.Item key={child.key} ><Link to={child.href}>{child.text}</Link></Menu.Item>
                });
                return <SubMenu key={item.key} title={<span><Icon type={item.type} />{item.text}</span>}>{childrenItems}</SubMenu>
            }
        });
        return (
            <aside className="ant-layout-sider">
                <div className="ant-layout-logo">
                </div>
                <Menu mode="inline" theme="dark"
                      defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} onClick={handleClick} >
                      {items}
                </Menu>
            </aside>
        );
    }
};
export default Sider;