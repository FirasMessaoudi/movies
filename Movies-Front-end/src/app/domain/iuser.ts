import { IFavorit } from './ifavorit';

export class IUser {
    email: string;
    username: string;
    password: string;
    firstname:string;
    lastname:string;
    enabled:boolean;
    id:number;
    lastPasswordResetDate: Date;
    favorites: IFavorit[];
    roles:string[];
    constructor(firstname:string,lastname:string,username:string,email:string,password:string){
        this.firstname=firstname;
        this.password=password;
        this.username=username;
        this.lastname=lastname;
        this.email=email;
        this.roles=['ROLE_USER'];
    }
}
