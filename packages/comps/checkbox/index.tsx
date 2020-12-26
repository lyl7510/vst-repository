import * as React from "react";
import Checkbox, {CheckboxProps} from "antd/es/checkbox";
import {CheckboxGroupProps, CheckboxGroupState} from "antd/es/checkbox/Group";
import ArtGroup from "./Group";

import "antd/es/checkbox/style/index.css";

export default class ArtCheckbox extends React.Component<CheckboxProps, {}> {

  public static Group: React.ComponentClass<CheckboxGroupProps, CheckboxGroupState> = ArtGroup;

  constructor(props: CheckboxProps) {
    super(props);
  }

  public render(): JSX.Element {
    return <Checkbox {...this.props}>
      {this.props.children}
    </Checkbox>
  }

};
