import * as React from "react";

export type ImportComponentFun = () => Promise<{ default: React.ComponentType<any> }>;

interface AsyncComponentState {
    component: React.ComponentType<any>;
}

export default function asyncComponent(importComponent: ImportComponentFun): React.ComponentType<any> {

    class AsyncComponent extends React.Component<{}, AsyncComponentState> {

        constructor(props: {}) {
            super(props);
            this.state = {
                component: null
            }
        }

        componentDidMount(): void {
            importComponent().then((mod: { default: React.ComponentType<any> }) => {
                this.setState({
                    component: mod.default ? mod.default : null
                })
            });
        }

        render(): JSX.Element {
            const Comps = this.state.component;
            return Comps ? <Comps {...this.props}>{this.props.children}</Comps> : null;
        }

    }

    return AsyncComponent;
}
