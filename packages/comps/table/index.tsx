import * as React from "react";
import Table, {TableProps} from "antd/es/table";

import "antd/es/table/style/index.css";

export interface ArtTableProps extends TableProps<any>{

}

export default class ArtTable extends React.Component<ArtTableProps, {}> {

  constructor(props: ArtTableProps) {
    super(props);
  }

  render(): React.ReactNode {
    return <Table {...this.props}></Table>
  }

}
