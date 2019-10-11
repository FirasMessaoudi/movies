import { IMovieUserId } from "./imovieuserid";

export class IFavorit {
    movieUserID?: IMovieUserId;
    watched?: boolean;
    section?:string;
    note?:number;
    constructor(id:IMovieUserId){
        this.movieUserID = id;
    }
}

