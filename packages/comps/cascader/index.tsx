import * as React from "react";
import Cascader, {CascaderOptionType, CascaderProps} from "antd/es/cascader";
import * as PropTypes from "prop-types";
import ComponentConfig from "../../config/ComponentConfig";

import "antd/es/cascader/style/index.css";
import "./style/index.css";

export default class ArtCascader extends React.Component<CascaderProps, {}> {

  public static contextTypes = {
    onChange: PropTypes.func
  };

  public static defaultProps = ComponentConfig.defaultProps.cascader;

  constructor(props: CascaderProps) {
    super(props);
  }

  /**
   * change改变的事件
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  protected onChange(value: string[], selectedOptions?: CascaderOptionType[]) {
    this.context.onChange && this.context.onChange(value);
    this.props.onChange && this.props.onChange(value, selectedOptions);
  }

  public render(): React.ReactNode {
    return <Cascader {...this.props} onChange={this.onChange.bind(this)}>
    </Cascader>
  }

};
