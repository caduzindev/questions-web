import { QuestionJson } from "./Question";

export interface QuizJson{
    hitValue:number;
    totalHits: number;
    totalErrors: number;
    questions:QuestionJson[]
}

export class Quiz{
    hitValue;
    totalHits;
    totalErrors;
    questions;

    constructor(json:QuizJson){
        this.hitValue = json.hitValue
        this.totalHits = json.totalHits
        this.totalErrors = json.totalErrors
        this.questions = json.questions
    }
}