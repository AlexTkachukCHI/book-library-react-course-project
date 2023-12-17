package com.chicourse.bookreactcourseproject.mapper;

import com.chicourse.bookreactcourseproject.api.dto.BookDto;
import com.chicourse.bookreactcourseproject.persistence.entity.Book;
import org.mapstruct.Mapper;

@Mapper
public interface BookMapper {

  Book toEntity(BookDto bookDto);

  BookDto toDto(Book book);
}
