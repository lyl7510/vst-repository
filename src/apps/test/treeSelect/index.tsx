import * as React from 'react';
import TreeSelect from "../../../comps/treeSelect/index";

interface ItreeSelectComponentState {
    value:string;
}

export default class TreeSelectComponent extends React.Component<{} , ItreeSelectComponentState>{

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

    public render(): JSX.Element{
        return (
            <TreeSelect
                showSearch
                value={this.state.value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={this.onChange.bind(this)}
            >
                <TreeSelect.TreeNode value="parent 1" title="parent 1" key="0-1">
                    <TreeSelect.TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                        <TreeSelect.TreeNode value="leaf1" title="my leaf" key="random" />
                        <TreeSelect.TreeNode value="leaf2" title="your leaf" key="random1" />
                    </TreeSelect.TreeNode>
                    <TreeSelect.TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                        <TreeSelect.TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
                    </TreeSelect.TreeNode>
                </TreeSelect.TreeNode>
            </TreeSelect>
        )
    }
}