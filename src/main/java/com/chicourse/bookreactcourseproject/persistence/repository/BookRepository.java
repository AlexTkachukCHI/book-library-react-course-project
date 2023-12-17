package com.chicourse.bookreactcourseproject.persistence.repository;

import com.chicourse.bookreactcourseproject.persistence.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

}
