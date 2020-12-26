import * as React from "react";
import Pagination, {PaginationProps} from "antd/es/pagination";
import ComponentConfig from "@packages/config/ComponentConfig";

import "antd/es/pagination/style/index.css";
import "./style/index.css";


export default class ArtPagination extends React.Component<PaginationProps, {}> {

    public static defaultProps = ComponentConfig.defaultProps.pagination;

    constructor(props: PaginationProps) {
        super(props);
    }

    render(): React.ReactNode {
        return <Pagination {...this.props}></Pagination>
    }

}
