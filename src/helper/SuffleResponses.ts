export function SuffleResponses(array:Array<string>){
    let index_now:number = array.length
    let value_random:string
    let index_random:number
    
    while (0 !== index_now) {
    
        index_random = Math.floor(Math.random() * index_now);
        index_now -= 1;
    
        value_random = array[index_now];
        array[index_now] = array[index_random];
        array[index_random] = value_random;
    }
    
    return array;
}