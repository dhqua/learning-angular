import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'title'
})
export class TitlePipe implements PipeTransform {
    transform(value: string, args?: any){
        if(!value)
            return null;
        
        value = value.toLowerCase();

        let tempString = value.split(" ")
        let resultString = "";

        for(var i = 0; i < tempString.length ; i++){
            if(i != 0 && tempString[i] == "of" || tempString[i] == "the" )
            {
                resultString += tempString[i] + " "
            }
            else{
                resultString += tempString[i].charAt(0).toUpperCase() + tempString[i].substring(1) + " ";
            }
        }
        return resultString; 
    }
}