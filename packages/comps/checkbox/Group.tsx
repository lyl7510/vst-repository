import * as React from "react";
import * as PropTypes from "prop-types";
import Checkbox from "antd/es/checkbox";
import {CheckboxGroupProps, CheckboxGroupState, CheckboxValueType} from "antd/es/checkbox/Group";

import ComponentConfig from "@packages/config/ComponentConfig";

export default class ArtGroup extends React.Component<CheckboxGroupProps, CheckboxGroupState> {

  public static contextTypes = {
    onChange: PropTypes.func
  };

  public static defaultProps = ComponentConfig.defaultProps.checkboxGroup;

  constructor(props: CheckboxGroupProps) {
    super(props);
  }

  /**
   * change改变的事件
   * @param {RadioChangeEvent} event
   */
  protected onChange(checkedValue: Array<CheckboxValueType>) {
    this.context.onChange && this.context.onChange(checkedValue);
    this.props.onChange && this.props.onChange(checkedValue);
  }

  public render(): JSX.Element {
    return <Checkbox.Group {...this.props} onChange={this.onChange.bind(this)}>
      {this.props.children}
    </Checkbox.Group>
  }

};
