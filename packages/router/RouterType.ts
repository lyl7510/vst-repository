import * as React from "react";

export interface RouterType {
    path: string;
    exact?: boolean;
    component: React.ComponentType<any>;
    children?: RouterType[];
}


