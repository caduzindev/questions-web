import { Question, QuestionJson } from "../Entity/Question";

function QuestionFactory(props:QuestionJson):Question{
    return new Question(props)
}

export default QuestionFactory;