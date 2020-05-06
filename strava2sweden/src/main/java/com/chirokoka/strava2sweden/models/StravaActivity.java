package com.chirokoka.strava2sweden.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * StravaActivity
 */
@Entity
@ToString
public class StravaActivity {

    @ Id
    @ GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    /**
     * name of the sporter that performed the activity
     */
    @Setter(value = AccessLevel.PUBLIC)
    @Getter(value = AccessLevel.PUBLIC)
    @NotBlank
    private String sporter;

    /**
     * Distance in km of the activity
     */
    @Setter(value = AccessLevel.PUBLIC)
    @Getter(value = AccessLevel.PUBLIC)
    @Positive
    private float distance;

    /**
     * Current or ex-leader
     */
    @Setter(value = AccessLevel.PUBLIC)
    @Getter(value = AccessLevel.PUBLIC)
    @NotBlank
    private String chiroGroup;

    /**
     * Skating, running, hiking or cycling
     */
    @Setter(value = AccessLevel.PUBLIC)
    @Getter(value = AccessLevel.PUBLIC)
    @NotBlank
    private String activityType;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;
}
