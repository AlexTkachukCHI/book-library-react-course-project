package com.chicourse.bookreactcourseproject.api.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BookDto {

  private Long id;
  private String name;
  private String author;
  private String description;
  private String genre;
  private Double rating;
}
