package com.chicourse.bookreactcourseproject.persistence.repository;

import com.chicourse.bookreactcourseproject.persistence.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByEmail(String email);

}
