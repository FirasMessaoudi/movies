import { ICategory } from "./icategory";

export interface MovieModel {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: ICategory[];
    id: number;
    original_name?:string;
    first_air_date?:string;
    origin_country?:object;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
    name:string;
}
