package tn.sesame.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.sesame.model.Contact;

public interface ContactRepository extends JpaRepository<Contact,Long> {
}
