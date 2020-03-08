import * as React from 'react';

export interface IAsynComponentState {
    component: React.ComponentType<any>;
}

export interface RouterType extends IAsynComponentState {
    path: string;
    children?: RouterType[];
}

export default function asynComponent(importComponent: () => Promise<{ default: React.ComponentType<any> }>): React.ComponentType<any> {
    class AsynComponent extends React.Component<{}, IAsynComponentState> {
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

    return AsynComponent;
}
