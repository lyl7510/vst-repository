import * as React from "react";
import Table, {TableProps} from "antd/es/table";

import "antd/es/table/style/index.css";
import ComponentConfig from "@packages/config/ComponentConfig";

export interface ArtTableProps extends TableProps<any> {

}

export default class ArtTable extends React.Component<ArtTableProps, {}> {

    public static defaultProps = ComponentConfig.defaultProps.table;

    constructor(props: ArtTableProps) {
        super(props);
    }

    render(): React.ReactNode {
        return <Table {...this.props}></Table>
    }

}
