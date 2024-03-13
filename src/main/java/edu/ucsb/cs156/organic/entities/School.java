package edu.ucsb.cs156.organic.entities;

import lombok.*;

import javax.persistence.*;


@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity(name = "schools")
public class School {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private String abbrev; //ID

  private String name;
  private String termRegex;
  private String termDescription;
  private String termError;
}
