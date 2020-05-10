import * as React from 'react';
import VsbPager from "../index";
import List from "antd/es/list";
import Avatar from "antd/es/avatar";

import "antd/es/list/style"
import "antd/es/avatar/style"
import "./index.less";

export default class VsbPagerList extends VsbPager {

    protected renderContent() {
        const {dataSource} = this.state;
        return (<List
                    itemLayout="horizontal"
                    dataSource={dataSource}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={"http://106.12.117.171:8899/api/system/image?id=" + item.IMAGE}/>}
                                title={<a href="https://ant.design">{item.TITLE}</a>}
                                description={item.CONTENT}
                            />
                        </List.Item>
                    )}
                />);
    }
}
