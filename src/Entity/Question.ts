export interface QuestionJson{
    id:string;
    chosen?:string;
    right?:boolean;
    question: string;
    category: string;
    type: string;
    difficulty: string;
    correct_answer: string;
    incorrect_answers:string[];
    questions:Array<string>;
}
export class Question{
    id;
    chosen;
    question;
    category;
    type;
    difficulty;
    correct_answer;
    incorrect_answers;
    questions;

    constructor(json:QuestionJson){
        this.id = json.id
        this.question = json.question
        this.category = json.category
        this.type = json.type
        this.difficulty = json.difficulty
        this.correct_answer = json.correct_answer
        this.incorrect_answers = json.incorrect_answers
        this.chosen=''
        this.questions = json.questions
    }

    public getAllQuestions():Array<string>{
        return this.questions
    }
    public IsCorrect():boolean{
        return this.chosen === this.correct_answer
    }
    public setChosen(chosen:string):void{
        this.chosen = chosen
    }
}