import Vst, {Component} from "../../vst";
import Icon, {IconProps} from 'antd/es/icon';

interface VstIconProps extends IconProps {

}

export default class VstIcon extends Component<VstIconProps> {

    render(): Vst.Element {
        return <Icon {...this.props}/>;
    }

}