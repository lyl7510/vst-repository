import * as React from 'react';
import VsbPager from "../index";
import "./index.less";

export default class VsbPagerTitle extends VsbPager {

    protected renderTitle(): JSX.Element {
        return (<div className="title">
            {this.renderBtns()}
        </div>)
    }

}
