import { QuizJson } from "../Entity/Quiz";
import { ReportJson } from "../Entity/Report";
import ReportRepository from "../repositories/ReportRepository";

class ReportService{
    private repository;
    
    constructor(repository:ReportRepository){
        this.repository = repository
    }
    public save(id:string,name:string,score:number,quiz:QuizJson):void{
        if(!this.repository.existsStorage('reports')){
            this.repository.createStorage('reports')
        }
        this.repository.setStorage('reports',id,name,score,quiz)
    }
    public existsReports():boolean{
        if(!this.repository.existsStorage('reports')){
            return false
        }

        const data = this.repository.getAllDataOfStorage('reports')
        if(!!data.length){
            return true
        }
        return false
    }
    public getAllReports():ReportJson[]{
        return this.repository.getAllDataOfStorage('reports')
    }
    public getReport(id:string):ReportJson|null{
        const report = this.repository.getReport(id,'reports')

        if(!!report){
            return report
        }
        return null
    }
}

export default new ReportService(new ReportRepository())