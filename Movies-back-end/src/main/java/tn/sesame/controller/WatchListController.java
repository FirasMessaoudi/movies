package tn.sesame.controller;


import org.springframework.web.bind.annotation.*;
import tn.sesame.model.MovieUserID;
import tn.sesame.model.WatchList;
import tn.sesame.service.WatchListService;

import java.util.List;

@RestController
@RequestMapping("/watchlist")
@CrossOrigin(origins = "*" )
public class WatchListController {
private final WatchListService watchListService;


    public WatchListController(WatchListService watchListService) {
        this.watchListService = watchListService;
    }
    @PostMapping("/addToWatchList")
    public WatchList addRemoveWatchList(@RequestBody  WatchList watchList){
        return watchListService.addRemoveWatchList(watchList);
    }
    @PostMapping("/existInWatchList")
    public Boolean existInWatchlist(@RequestBody MovieUserID movieUserID){
        return watchListService.existInWatchlist(movieUserID);
    }
    @PutMapping("/updateWatchList")
    public WatchList UpdateWatchList(@RequestBody  WatchList watchList){
        return watchListService.UpdateWatchList(watchList);

    }
    @PostMapping("/isWatched/")
    public Boolean isWatched(@RequestBody  MovieUserID movieUserID){
        return watchListService.isWatched(movieUserID);
    }
    @GetMapping("/getWatchList/{email}")
    public List<WatchList> findByUser(@PathVariable  String email){
        return watchListService.findByUser(email);
    }
}
