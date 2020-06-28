declare namespace TMap {
    class LatLng {
        constructor(x: number, y: number);
    }
    class Map {
        constructor(dom: HTMLDivElement, {}: {});
        on(eventName: string, func: Function): void;
    }
    class MultiMarker {
        constructor(options: any);
    }
    class MarkerStyle {
        constructor(options: any);
    }
}
