package com.chirokoka.strava2sweden.services;

import com.chirokoka.strava2sweden.repositories.MyRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyService {

    @Autowired
    MyRepository repo;

    private static final int ONE_TRIP_DISTANCE = 1482; 

    private static float round (double value, int precision) {
        int scale = (int) Math.pow(10, precision);
        return (float) Math.round(value * scale) / scale;
    }

    public float getTotalDistanceCurrentLeaders() {
        float sum = 0;
        sum += repo.getDistanceRidingCurrent() / 10f;
        sum += repo.getDistanceSkatingCurrent() / 5f;
        sum += repo.getDistanceRunningCurrent();
        sum += repo.getDistanceWalkingCurrent();
        return round(sum % ONE_TRIP_DISTANCE,1);
    }

    public float getTotalDistanceExLeadders() {
        float sum = 0;
        sum += repo.getDistanceRidingEx() / 10f;
        sum += repo.getDistanceSkatingEx() / 5f;
        sum += repo.getDistanceRunningEx();
        sum += repo.getDistanceWalkingEx();
        return round(sum % ONE_TRIP_DISTANCE,1);
    }    
}