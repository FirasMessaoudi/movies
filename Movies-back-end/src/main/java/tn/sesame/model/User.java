package tn.sesame.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "utilisateur")

@Data
public class User {
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Id
    private String email;
    private String username,password,firstname,lastname;
    private boolean enabled;
    private Date lastPassowrdResetDate;
    @ElementCollection(fetch = FetchType.LAZY)
    @Enumerated(EnumType.STRING)
    private List<Role> roles;

    public User (){}


}
