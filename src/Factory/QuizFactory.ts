import { QuizJson,Quiz } from '../Entity/Quiz'

function QuizFactory(props:QuizJson){
    return new Quiz(props)
}

export default QuizFactory