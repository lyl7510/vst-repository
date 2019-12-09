import Vst from '../index';
import * as React from 'react';

export default abstract class Component<P = {}, S = {}> extends React.Component<P, S> {

    constructor(props: P) {
        super(props);
    }

    public abstract render(): Vst.Element;
}