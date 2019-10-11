export class IMovieUserId {
    idMovie?: number;
    email: string;
    constructor(id: number, email: string) {
        this.idMovie = id;
        this.email = email;
    }
}
