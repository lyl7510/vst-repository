import Layout, {LayoutProps, SiderProps} from 'antd/es/layout';
import 'antd/es/layout/style'
import './style/index.less';

const VstLayout = Layout;
const {Header, Footer, Sider, Content} = Layout;

export {
    VstLayout,
    Header as VstHeader,
    Footer as VstFooter,
    Sider as VstSider,
    Content as VstContent,
    LayoutProps as IVstLayoutProps,
    SiderProps as IVstSiderProps
};
