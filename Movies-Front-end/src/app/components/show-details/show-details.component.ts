import { Component, OnInit, Input } from '@angular/core';
import { TvDetailsModel } from 'src/app/domain/tvshowdetail';
import { ISeason } from 'src/app/domain/season';
import { IEpisode } from 'src/app/domain/episode';
import { IEpisodeDetail } from 'src/app/domain/episodeDetail';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  showDetail: TvDetailsModel;
  seasonNumber = 1;
  season: ISeason;
  nbEpisodes: number;
  episode: IEpisode;
  episodes: IEpisodeDetail[]=[];
  episodeCount=[];
  @Input()
  idtmdb: number;
  link='';
  overview='';
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getTvShowById(this.idtmdb).subscribe(
      res => this.showDetail = res,
       err => console.log('erreur' + this.showDetail),
       () => {
         console.log(this.showDetail.name)
         this.seasonNumber = this.showDetail.last_episode_to_air.season_number;
         this.nbEpisodes = this.showDetail.last_episode_to_air.episode_number;
         console.log(this.nbEpisodes)
         for(let i=1;i<=this.nbEpisodes;i++)
         this.episodeCount.push(i);
         console.log(this.episodeCount)
         let lastSeason=this.showDetail.last_episode_to_air.season_number;
         let lastEpisode=this.showDetail.last_episode_to_air.episode_number;
         this.link ="https://videospider.in/getvideo?key=l6IeT0ahNeECt2IH&tv=1&video_id="+this.idtmdb+"&tmdb=1&s="+lastSeason+"&e="+lastEpisode;
        // this.overview = this

        // this.nbEpisodes = this.showDetail.seasons[0].episode_count;
        // for( let i=1;i<=this.nbEpisodes;i++){
        //   let episodeDetail: IEpisodeDetail;
        //   this.movieService.getEpisodeDetails(this.idtmdb,1,i).subscribe(
        //     res => {
        //       episodeDetail =res;
        //       episodeDetail.link="https://videospider.in/getvideo?key=l6IeT0ahNeECt2IH&tv=1&video_id="+this.idtmdb+"&tmdb=1&s="+episodeDetail.season_number+"&e="+episodeDetail.episode_number;
        //       this.episodes.push(episodeDetail);
        //     },
        //     err => console.log('erreur')
        //   );
        // }

       }
    );
  }
  changeSeason(event){
    this.seasonNumber=event;
    this.season=this.showDetail.seasons[this.seasonNumber];

    console.log(this.seasonNumber);
    console.log(this.season.episode_count);
    /*for(let i=0;i<this.season.episode_count;i++)
    this.nbEpisodes[i]=i+1;*/
    this.nbEpisodes = this.showDetail.seasons[this.seasonNumber].episode_count;
    this.episodeCount=[];
    for(let i=1;i<=this.nbEpisodes;i++)
         this.episodeCount.push(i);

         this.link ="https://videospider.in/getvideo?key=l6IeT0ahNeECt2IH&tv=1&video_id="+this.idtmdb+"&tmdb=1&s="+this.seasonNumber+"&e="+this.nbEpisodes;

    // this.episodes=[];
    //     for( let i=1;i<=this.nbEpisodes;i++){
    //       let episodeDetail: IEpisodeDetail;
    //       this.movieService.getEpisodeDetails(this.idtmdb,this.seasonNumber,i).subscribe(
    //         res => {
    //           episodeDetail =res;
    //           episodeDetail.link="https://videospider.in/getvideo?key=l6IeT0ahNeECt2IH&tv=1&video_id="+this.idtmdb+"&tmdb=1&s="+episodeDetail.season_number+"&e="+episodeDetail.episode_number;
    //           this.episodes.push(episodeDetail);
    //         },
    //         err => console.log('erreur')
    //       );
    //     }
    }
    changeEpisode($event){
      this.link ="https://videospider.in/getvideo?key=l6IeT0ahNeECt2IH&tv=1&video_id="+this.idtmdb+"&tmdb=1&s="+this.seasonNumber+"&e="+$event;

    }

}
