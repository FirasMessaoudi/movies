package tn.sesame.service;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import tn.sesame.dto.ContactDTO;
import tn.sesame.dto.mapper.ContactMapper;
import tn.sesame.repository.ContactRepository;

@Service
@RequiredArgsConstructor
public class ContactService {
    private final ContactRepository contactRepository;
    private final ContactMapper contactMapper;

    public ContactDTO addMessage(ContactDTO contact){
        return contactMapper.toDto(contactRepository.save(contactMapper.toEntity(contact)));
    }
}
