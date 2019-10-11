package tn.sesame.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ContactDTO {
    private Long id;
    private String name,email,subject,message,response;
    private Date dateMessage;
}




