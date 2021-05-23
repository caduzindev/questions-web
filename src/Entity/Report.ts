import { QuizJson } from "./Quiz";

export interface ReportJson{
    id:string;
    name:string,
    score:number;
    quiz:QuizJson
}

export class Report{
    id;
    name;
    score;
    quiz;

    constructor(json:ReportJson){
        this.id = json.id
        this.name = json.name
        this.score = json.score
        this.quiz = json.quiz
    }
}