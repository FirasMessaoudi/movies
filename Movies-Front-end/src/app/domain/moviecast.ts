import { MovieCrewModel } from "./moviecrew";

export interface MovieCastModel {
    id?: number;
    cast: MovieCast[];
    crew :MovieCrewModel[];
}
    export interface MovieCast {
    cast_id?: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profile_path: string;
    }
