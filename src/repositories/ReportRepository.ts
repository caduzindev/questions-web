import { QuizJson } from "../Entity/Quiz"
import { ReportJson } from "../Entity/Report"

class ReportRepository{
    public createStorage(key:string):void{
        localStorage.setItem(key,JSON.stringify([]))
    }
    public getAllDataOfStorage(key:string):ReportJson[]{
        const data = JSON.parse(localStorage.getItem(key) || "[]")

        return data
    }
    public existsStorage(key:string):boolean{
        return !!localStorage.getItem(key)
    }
    public setStorage(key:string,id:string,name:string,score:number,quiz:QuizJson):void{
        let data = this.getAllDataOfStorage(key)
        
        data.push({
            id,
            name,
            score,
            quiz
        })
        localStorage.setItem(key,JSON.stringify(data))
    }
    public getReport(id:string,key:string):ReportJson{
        const data = this.getAllDataOfStorage(key)

        return data.filter(item=>item.id===id)[0]
    }
}

export default ReportRepository