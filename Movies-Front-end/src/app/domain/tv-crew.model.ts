import { ICategory } from './icategory';

export interface TvCrewModel {
    id: number;
    department: string;
    original_language: string;
    episode_count: number;
    job: string;
    overview: string;
    origin_country: CountryModel[];
    original_name: string;
    genre_ids: ICategory[];
    name: string;
    first_air_date: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    vote_average: number;
    poster_path: string;
    credit_id: string;
}

interface CountryModel {
    name: string;
}
