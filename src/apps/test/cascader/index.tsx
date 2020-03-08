import * as React from 'react';
import VstCascader from "../../../comps/cascader";

interface CascaderComponentState {
    options: any[]
}

export default class CascaderComponent extends React.Component<{}, CascaderComponentState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            options: [
                {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                        {
                            value: 'hangzhou',
                            label: 'Hanzhou',
                            children: [
                                {
                                    value: 'xihu',
                                    label: 'West Lake',
                                },
                            ],
                        },
                    ],
                },
                {
                    value: 'jiangsu',
                    label: 'Jiangsu',
                    children: [
                        {
                            value: 'nanjing',
                            label: 'Nanjing',
                            children: [
                                {
                                    value: 'zhonghuamen',
                                    label: 'Zhong Hua Men',
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }

    public onChange(value): void {
        console.log(value)
    }

    public render(): JSX.Element {
        return <VstCascader options={this.state.options} onChange={this.onChange.bind(this)} changeOnSelect/>;
    }
}