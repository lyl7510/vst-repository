import Vst, {Component} from "../../../vst";
import VstCascader from "../../../comps/cascader";

interface CascaderComponentState {
    options: any[]
}

export default class CascaderComponent extends Component<{}, CascaderComponentState> {

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

    public render(): Vst.Element {
        return <VstCascader options={this.state.options} onChange={this.onChange.bind(this)} changeOnSelect/>;
    }
}