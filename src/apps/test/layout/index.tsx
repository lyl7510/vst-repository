import * as React from 'react';
import Layout from "../../../comps/layout";

export default class LayoutComponent extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render(): JSX.Element {
        return <Layout>
            <Layout.Header>Header</Layout.Header>
            <Layout>
                <Layout.Sider collapsed={true}/>
                <Layout.Content>Content</Layout.Content>
            </Layout>
        </Layout>;
    }
}