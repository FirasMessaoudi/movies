package tn.sesame.service;

import org.springframework.stereotype.Service;
import tn.sesame.dto.ContactDTO;
import tn.sesame.dto.mapper.ContactMapper;
import tn.sesame.repository.ContactRepository;

@Service
public class ContactService {
    private final ContactRepository contactRepository;
    private final ContactMapper contactMapper;

    public ContactService(ContactRepository contactRepository, ContactMapper contactMapper) {
        this.contactRepository = contactRepository;
        this.contactMapper = contactMapper;
    }
    public ContactDTO addMessage(ContactDTO contact){
        return contactMapper.toDto(contactRepository.save(contactMapper.toEntity(contact)));
    }
}
