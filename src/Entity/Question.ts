export interface QuestionJson{
    question: string;
    category: string;
    type: string;
    difficulty: string;
    correct_answer: string;
    incorrect_answers:string[];
}
export class Question{
    question;
    category;
    type;
    difficulty;
    correct_answer;
    incorrect_answers;
    questions:Array<string>;

    constructor(json:QuestionJson){
        this.question = json.question
        this.category = json.category
        this.type = json.type
        this.difficulty = json.difficulty
        this.correct_answer = json.correct_answer
        this.incorrect_answers = json.incorrect_answers
        this.questions = []
    }

    public getAllQuestions():Array<string>{
        return [this.correct_answer,...this.incorrect_answers]
    }
}