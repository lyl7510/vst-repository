import * as React from "react";
import {ButtonProps} from "antd/es/button";
import Button from "../button/index";

import "./style/index.css";

export interface IButton extends ButtonProps {
  text: string;
}

export interface TitleProps {
  text?: string;
  btns?: IButton[];
  render?: () => React.ReactNode;
}

export default class ArtTitle extends React.Component<TitleProps, {}> {

  constructor(props: TitleProps) {
    super(props);
  }

  /**
   * 渲染button
   * @returns {JSX.Element}
   */
  protected renderBtns(): JSX.Element {
    const {btns} = this.props;
    return btns && btns.length > 0 ? <div className="buttonGroup">
      {btns.map((btn: IButton, index: number) => {
        return <Button key={index} type={btn.type} icon={btn.icon} onClick={btn.onClick}>{btn.text}</Button>
      })}
    </div> : null;
  }

  public render(): React.ReactNode {
    return <div className={"title"}>
      {this.props.text ? this.props.text : null}
      {this.renderBtns()}
      {this.props.render ? this.props.render() : null}
    </div>
  }

}
