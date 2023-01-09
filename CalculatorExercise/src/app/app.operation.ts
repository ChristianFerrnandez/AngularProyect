import { DatePipe } from "@angular/common";

export class Operation {


    constructor(result:number, simbol:string) {
        this.result = result
        this.simbol = simbol
    }
    
    result: number;
    simbol: string = "";
    
}