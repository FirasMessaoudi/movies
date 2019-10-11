import { ICategory } from './icategory';

export interface TvCastModel {
    credit_id: string;
    original_name: string;
    id: number;
    genre_ids: ICategory[];
    character: string;
    name: string;
    poster_path: string;
    vote_count: number;
    vote_average: number;
    popularity: number;
    episode_count: number;
    original_language: string;
    first_air_date: string;
    backdrop_path: string;
    overview: string;
    origin_country: CountryModel[];
}

interface CountryModel {
    name: string;
}
