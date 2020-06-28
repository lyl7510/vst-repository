/// <reference types="react" />
import * as PropTypes from "prop-types";
import BaseComponent, { BaseComponentProps } from "../../vst/page/BaseComponent";
import "./style/index.less";
export interface MapComponentProps extends BaseComponentProps {
    value?: string;
    placeholder?: string;
    onChange?: (event: any) => void;
}
export interface ILocation {
    lat: number;
    lng: number;
}
export interface MapComponentState {
    value?: ILocation;
}
export default class MapComponent extends BaseComponent<MapComponentProps, MapComponentState> {
    static contextTypes: {
        value: PropTypes.Requireable<any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        setResetFieldFun: PropTypes.Requireable<(...args: any[]) => any>;
    };
    private mapDiv;
    private map;
    private marker;
    static defaultProps: {
        value: string;
    };
    constructor(props: MapComponentProps);
    componentWillMount(): void;
    private stringToJson(location);
    onChange(event: any): void;
    private resetField(defaultValue);
    componentDidMount(): void;
    private setCenter(location);
    shouldComponentUpdate(nextProps: Readonly<MapComponentProps>, nextState: Readonly<MapComponentState>, nextContext: any): boolean;
    render(): JSX.Element;
}
