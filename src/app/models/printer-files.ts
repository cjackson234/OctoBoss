declare module PrinterFiles {

    export interface Refs {
        resource: string;
        download: string;
    }

    export interface Filament {
        length: number;
        volume: number;
    }

    export interface GcodeAnalysis {
        estimatedPrintTime: number;
        filament: Filament;
    }

    export interface Last {
        date: number;
        success: boolean;
    }

    export interface Print {
        failure: number;
        success: number;
        last: Last;
    }

    export interface Refs2 {
        resource: string;
        download: string;
    }

    export interface Filament2 {
        length: number;
        volume: number;
    }

    export interface GcodeAnalysis2 {
        estimatedPrintTime: number;
        filament: Filament2;
    }

    export interface Last2 {
        date: number;
        success: boolean;
    }

    export interface Print2 {
        failure: number;
        success: number;
        last: Last2;
    }

    export interface Child {
        name: string;
        path: string;
        type: string;
        typePath: string[];
        hash: string;
        size: number;
        date: number;
        origin: string;
        refs: Refs2;
        gcodeAnalysis: GcodeAnalysis2;
        print: Print2;
    }

    export interface File {
        name: string;
        path: string;
        type: string;
        typePath: string[];
        hash: string;
        size: number;
        date: number;
        origin: string;
        refs: Refs;
        gcodeAnalysis: GcodeAnalysis;
        print: Print;
        children: Child[];
    }

    export interface RootObject {
        files: File[];
        free: string;
    }

}

