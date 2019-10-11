import { MovieCrewModel } from "./moviecrew";
import { IGuest } from "./guestStars";

export interface IEpisodeDetail {
    air_date: string;
    crew :MovieCrewModel[];
    episode_number:number;
    guest_stars:IGuest[];
    name:string;
    overview:string;
    production_code:number;
    id:number;
    season_number:number;
    still_path:string;
    vote_average:number;
    vote_count:number;
    link?:string;

}