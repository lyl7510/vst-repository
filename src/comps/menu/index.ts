import Menu, {MenuProps , ClickParam} from 'antd/es/menu';
import "antd/es/menu/style";

const VstMenu = Menu;
const {Item, SubMenu, ItemGroup} = VstMenu;

export {
    VstMenu,
    Item as VstItem,
    SubMenu as VstSubMenu,
    ItemGroup as VstItemGroup,
    MenuProps as VstMenuProps,
    ClickParam
}
