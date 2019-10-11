package tn.sesame.service;

import org.springframework.stereotype.Service;
import tn.sesame.model.WatchList;
import tn.sesame.model.MovieUserID;
import tn.sesame.repository.WatchListRepository;

import java.util.List;
import java.util.Optional;

@Service
public class WatchListService {
    private final WatchListRepository watchListRepository;

    public WatchListService(WatchListRepository watchListRepository) {
        this.watchListRepository = watchListRepository;
    }
    public WatchList addRemoveWatchList(WatchList watchList){
        Optional<WatchList> watchList1 = watchListRepository.findById(watchList.getMovieUserID());
        if(watchList1.isPresent()){
            watchListRepository.deleteById(watchList.getMovieUserID());
            return watchList;
        }else{
            return watchListRepository.save(watchList);
        }
    }
    public Boolean existInWatchlist(MovieUserID movieUserID){
        Optional<WatchList> watchList = watchListRepository.findById(movieUserID);
        if (watchList.isPresent())
            return true;
        else
            return false;

    }
    public List<WatchList> findByUser(String email){
        return watchListRepository.getWatchListsByUser(email);
    }
    public Boolean isWatched(MovieUserID movieUserID){
        Optional<WatchList> watchList = watchListRepository.findById(movieUserID);
        if(watchList.isPresent()){
            return watchList.get().isWatched();
        }
        return false;

    }
    public WatchList UpdateWatchList(WatchList watchList){
        watchList.setWatched(!watchList.isWatched());
        return watchListRepository.save(watchList);
    }
}
