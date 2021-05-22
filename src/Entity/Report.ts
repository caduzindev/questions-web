import { QuestionJson } from "./Question";

export interface ReportJson{
    id?:string;
    name?:string;
    hitValue:number;
    score?:number;
    totalHits: number;
    totalErrors: number;
    questions:QuestionJson[]
}

export class Report{
    id;
    name;
    score;
    hitValue;
    totalHits;
    totalErrors;
    questions;

    constructor(json:ReportJson){
        this.id = json.id
        this.name = json.name
        this.score = json.score
        this.hitValue = json.hitValue
        this.totalHits = json.totalHits
        this.totalErrors = json.totalErrors
        this.questions = json.questions
    }
}