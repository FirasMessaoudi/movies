package tn.sesame.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
@Data
@AllArgsConstructor
public class MovieUserID implements Serializable {
    private Long idMovie;
    private String email;
    public MovieUserID(){}


}
