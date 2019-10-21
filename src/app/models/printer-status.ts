declare module PrinterStatus {

    export interface Tool0 {
        actual: number;
        target: number;
        offset: number;
    }

    export interface Tool1 {
        actual: number;
        target?: any;
        offset: number;
    }

    export interface Bed {
        actual: number;
        target: number;
        offset: number;
    }

    export interface Tool02 {
        actual: number;
        target: number;
    }

    export interface Tool12 {
        actual: number;
        target?: any;
    }

    export interface Bed2 {
        actual: number;
        target: number;
    }

    export interface History {
        time: number;
        tool0: Tool02;
        tool1: Tool12;
        bed: Bed2;
    }

    export interface Temperature {
        tool0: Tool0;
        tool1: Tool1;
        bed: Bed;
        history: History[];
    }

    export interface Sd {
        ready: boolean;
    }

    export interface Flags {
        operational: boolean;
        paused: boolean;
        printing: boolean;
        cancelling: boolean;
        pausing: boolean;
        sdReady: boolean;
        error: boolean;
        ready: boolean;
        closedOrError: boolean;
    }

    export interface State {
        text: string;
        flags: Flags;
    }

    export interface RootObject {
        temperature: Temperature;
        sd: Sd;
        state: State;
    }

}

