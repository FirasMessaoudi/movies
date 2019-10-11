export class ICategory {
    id?:number;
    idCategory?: number;
    name?: string;
    nameAr?:string;
    nameFr?:string;
    constructor(name:string){
        this.name = name;
    }
   
}
export class Genre {
    genres:ICategory[];
}
