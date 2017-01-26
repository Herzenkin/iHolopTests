package com.nixsolutions;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Holop
{
  @Id
  @GeneratedValue
  private long id;
  private String holopName;
  private String master;
  private String dateFrom;
  private String dateTo;
}
