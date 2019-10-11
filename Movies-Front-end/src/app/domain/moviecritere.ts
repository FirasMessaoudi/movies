export class IMovieCritere{
    title:string;
    note:number;
    dateRelease:Date
    country:string;
    section:string;
    constructor(title:string,note:number,country:string,section:string,dateRelease:Date){
        this.title=title;
        this.note=note;
        this.country=country;
        this.section=section;
        this.dateRelease=dateRelease;
    }
}
