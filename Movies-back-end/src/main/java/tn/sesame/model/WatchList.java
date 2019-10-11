package tn.sesame.model;

import lombok.Data;

import javax.persistence.EmbeddedId;
import javax.persistence.*;

@Entity
@Data
public class WatchList {
    @EmbeddedId
    private MovieUserID movieUserID;
    private boolean watched;



}
