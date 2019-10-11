import {MovieModel} from'../domain/moviemodel';
export interface IMovie {
    page: number;
    results: MovieModel[];
    dates?: {
        maximum: string;
        minimum: string;
    }
    total_pages: number;
    total_results: number;
}
