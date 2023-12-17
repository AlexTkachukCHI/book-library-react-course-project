package com.chicourse.bookreactcourseproject.service;

import com.chicourse.bookreactcourseproject.api.dto.BookDto;
import com.chicourse.bookreactcourseproject.mapper.BookMapper;
import com.chicourse.bookreactcourseproject.persistence.entity.Book;
import com.chicourse.bookreactcourseproject.persistence.repository.BookRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookService {

  private final BookMapper bookMapper;
  private final BookRepository bookRepository;

  public List<BookDto> findAll() {
    return bookRepository.findAll().stream()
        .map(bookMapper::toDto)
        .collect(Collectors.toList());
  }

  public BookDto findById(Long id) {
    Book foundBook = bookRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Book is not found with id " + id));
    return bookMapper.toDto(foundBook);
  }

  public BookDto create(BookDto bookDto) {
    Book book = bookMapper.toEntity(bookDto);
    return bookMapper.toDto(bookRepository.save(book));
  }

  public BookDto update(Long id, BookDto bookDto) {
    Book foundBook = bookRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Book is not found with id " + id));

    if (!bookDto.getName().isBlank() && !bookDto.getName().equals(foundBook.getName())) {
      foundBook.setName(bookDto.getName());
    }

    if (!bookDto.getAuthor().isBlank() && !bookDto.getAuthor().equals(foundBook.getAuthor())) {
      foundBook.setAuthor(bookDto.getAuthor());
    }

    if (!bookDto.getDescription().isBlank() && !bookDto.getDescription().equals(foundBook.getDescription())) {
      foundBook.setDescription(bookDto.getDescription());
    }

    if (!bookDto.getGenre().isBlank() && !bookDto.getGenre().equals(foundBook.getGenre())) {
      foundBook.setGenre(bookDto.getGenre());
    }

    if (bookDto.getRating() > 0 && !bookDto.getRating().equals(foundBook.getRating())) {
      foundBook.setRating(bookDto.getRating());
    }

    return bookMapper.toDto(bookRepository.save(foundBook));
  }

  public void deleteById(Long id) {
    bookRepository.deleteById(id);
  }
}
