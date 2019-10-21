declare module PrintJob {

    export interface File {
        name: string;
        origin: string;
        size: number;
        date: number;
    }

    export interface Filament {
        length: number;
        volume: number;
    }

    export interface Job {
        file: File;
        estimatedPrintTime: number;
        filament: Filament;
    }

    export interface Progress {
        completion: number;
        filepos: number;
        printTime: number;
        printTimeLeft: number;
    }

    export interface RootObject {
        job: Job;
        progress: Progress;
        state: string;
    }

}



