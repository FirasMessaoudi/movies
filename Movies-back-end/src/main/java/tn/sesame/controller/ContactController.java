package tn.sesame.controller;

import org.springframework.web.bind.annotation.*;
import tn.sesame.dto.ContactDTO;
import tn.sesame.service.ContactService;

@RestController
@CrossOrigin(origins = "*" )
@RequestMapping("/contact")
public class ContactController {
    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }
    @PostMapping("/addContact")
    public ContactDTO addMessage(@RequestBody ContactDTO contact){
        return contactService.addMessage(contact);
    }
}
