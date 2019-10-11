import { ICategory } from "./icategory";
import { MovieCrewModel } from "./moviecrew";
import { IEpisode } from "./episode";
import { ISeason } from "./season";

export interface TvDetailsModel { 
    backdrop_path?: string;
    created_by?:MovieCrewModel[]; 
    episode_run_time?: number[];
    first_air_date?: string;
    genres?: ICategory[];
    homepage?: string;
    id?: number;
    in_production?:boolean;
    languages?:string[];
    last_air_date?:string;
    last_episode_to_air?:IEpisode;
    name?:string;
    next_episode_to_air?:IEpisode;
    networks?: CompaniesModel[];
    number_of_episodes?:number;
    number_of_seasons?:number;
    origin_country?:string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: CompaniesModel[];
    seasons?:ISeason[];
    status?: string;
    type?: string;
    vote_average?: number;
    vote_count?: number
   
    
}

export interface CompaniesModel {
    name: string;
    id: number;
    logo_path:string;
    origin_country:string;
}
