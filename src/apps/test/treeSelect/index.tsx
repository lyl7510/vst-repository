import Vst, {Component} from "../../../vst";
import VstTreeSelect , {VstTreeNode} from "../../../comps/treeSelect";

interface ItreeSelectComponentState {
    value:string;
}

export default class TreeSelectComponent extends Component<{} , ItreeSelectComponentState>{

    constructor(props:{}) {
        super(props);
        this.state = {
            value:undefined
        }
    }

    public onChange(value):void{
        this.setState({
            value
        })
    }

    public render(): Vst.Element{
        return (
            <VstTreeSelect
                showSearch
                value={this.state.value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={this.onChange.bind(this)}
            >
                <VstTreeNode value="parent 1" title="parent 1" key="0-1">
                    <VstTreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                        <VstTreeNode value="leaf1" title="my leaf" key="random" />
                        <VstTreeNode value="leaf2" title="your leaf" key="random1" />
                    </VstTreeNode>
                    <VstTreeNode value="parent 1-1" title="parent 1-1" key="random2">
                        <VstTreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
                    </VstTreeNode>
                </VstTreeNode>
            </VstTreeSelect>
        )
    }
}