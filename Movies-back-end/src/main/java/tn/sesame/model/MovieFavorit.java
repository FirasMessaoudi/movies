package tn.sesame.model;

import lombok.Data;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity
@Data
public class MovieFavorit {
    @EmbeddedId
    private MovieUserID movieUserID;


}
