package com.app.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Member {

    @Id
    @GeneratedValue
    Long id;
    String name;

}
