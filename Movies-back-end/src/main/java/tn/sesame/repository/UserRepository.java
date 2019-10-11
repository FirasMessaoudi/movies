package tn.sesame.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.sesame.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    User findByUsername(String username);
    boolean existsByUsername(String username);

}
