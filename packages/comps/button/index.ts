import Button from "antd/es/button";

import "antd/es/button/style/index.css";
import ComponentConfig from "@packages/config/ComponentConfig";

Button.defaultProps = ComponentConfig.defaultProps.button;

export default Button;
