import * as React from 'react';
import * as PropTypes from "prop-types";
import BaseComponent, {BaseComponentProps} from "../../vst/page/BaseComponent";
import {toFixed} from "./../../utils/NumberUtils";
import * as marker from "./../../../static/img/marker.png";

import "./style/index.less";

export interface MapComponentProps extends BaseComponentProps{
    value?: string;
    placeholder?: string;
    onChange?: (event: any) => void;
}

export interface ILocation {
    lat: number;
    lng: number;
}

export interface MapComponentState {
    value?: ILocation
}

export default class MapComponent extends BaseComponent<MapComponentProps, MapComponentState> {

    public static contextTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func,
        setResetFieldFun: PropTypes.func
    };

    private mapDiv: HTMLDivElement = null;
    private map: any = null;
    private marker: any = null;

    public static defaultProps = {
        value: "34.746303, 113.658294"
    };


    public constructor(props: MapComponentProps) {
        super(props);
        this.state = {
            value: this.stringToJson(this.props.value)
        }
    }

    public componentWillMount(): void {
        const {value, setResetFieldFun} = this.context;
        if (value) {
            this.setState({
                value: this.stringToJson(value)
            });
        }
        if (setResetFieldFun) {
            setResetFieldFun(this.resetField.bind(this));
        }
    }

    private stringToJson(location: string): ILocation {
        if (location) {
            const locaArray = location.split(",");
            return {
                lat: toFixed(parseFloat(locaArray[0]), 6),
                lng: toFixed(parseFloat(locaArray[1]), 6)
            }
        } else {
            return {
                lat: 34.746303,
                lng: 113.658294
            }
        }
    }

    public onChange(event: any): void {
        const lat: number = toFixed(event.latLng.lat, 6);
        const lng:number = toFixed(event.latLng.lng, 6);
        if (this.state.value.lat == lat && this.state.value.lng == lng) {
            return;
        }
        const {onChange} = this.context;
        this.setState({
            value: event.latLng
        });
        onChange && onChange(lat + "," + lng, true);
        this.props.onChange && this.props.onChange(event);
    }

    private resetField(defaultValue: any): void {
        this.setState({
            value: this.stringToJson(defaultValue)
        });
        const {onChange} = this.context;
        onChange && onChange(defaultValue, false);
    }

    public componentDidMount(): void {
        const {value} = this.state;
        const center = new TMap.LatLng(value.lat, value.lng);
        this.map = new TMap.Map(this.mapDiv, {
            center: center,//设置地图中心点坐标
            zoom: 15,   //设置地图缩放级别
            pitch: 20
        });
        this.marker = new TMap.MultiMarker({
            map: this.map,
            styles: { //点标注的相关样式
                "marker": new TMap.MarkerStyle({
                    "width": 35,
                    "height": 35,
                    "anchor": {x: 16, y: 32},
                    "src": marker
                })
            },
            geometries: [{ //点标注数据数组
                "id": "marker",
                "styleId": "marker",
                "position": new TMap.LatLng(34.74630347429718, 113.65829488471252)
            }]
        });
        this.map.on("click", (event) => {
            this.setCenter(event.latLng)
            this.onChange(event);
        });
    }

    private setCenter(location: ILocation): void {
        const center = new TMap.LatLng(location.lat, location.lng);
        if (this.map) {
            this.map.setCenter(center);
            this.marker.updateGeometries([
                {
                    "id": "marker",
                    "styleId": "marker",
                    "position": center
                }
            ]);
        }

    }

    public shouldComponentUpdate(nextProps: Readonly<MapComponentProps>, nextState: Readonly<MapComponentState>, nextContext: any): boolean {
        this.setCenter(nextState.value);
        return false;
    }

    public render(): JSX.Element {
        return <div className="map" ref={(node) => this.mapDiv = node}/>
    }
}