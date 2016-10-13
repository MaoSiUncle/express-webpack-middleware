/**
 * Created by yunlong on 16/10/11.
 */
import React from 'react';
import {Tabs} from 'antd';

import CommunityInfo from './CommunityInfo'

const TabPane=Tabs.TabPane;
class BasicCommunitiesInfo extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <Tabs>
                <TabPane tab="社区信息" key="1">
                    <CommunityInfo/>
                </TabPane>
                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
            </Tabs>

        )

    }



}

export default BasicCommunitiesInfo;