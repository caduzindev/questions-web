import { ReportJson } from "../Entity/Report"

class ReportRepository{
    public createStorage(key:string):void{
        localStorage.setItem(key,JSON.stringify([]))
    }
    private getAllDataOfStorage(key:string):ReportJson[]{
        return JSON.parse(localStorage.getItem(key) || '[]')
    }
    public existsStorage(key:string):boolean{
        return !!localStorage.getItem(key)
    }
    public setStorage(key:string,id:string,name:string,score:number,quiz:ReportJson):void{
        const data = this.getAllDataOfStorage(key)

        const obj = [
            ...data,
            {
                id,
                name,
                score,
                quiz
            }
        ]

        localStorage.setItem(key,JSON.stringify(obj))
    }
}

export default ReportRepository