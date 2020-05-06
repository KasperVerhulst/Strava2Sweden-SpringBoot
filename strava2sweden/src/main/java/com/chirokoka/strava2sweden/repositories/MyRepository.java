package com.chirokoka.strava2sweden.repositories;

import java.util.List;

import com.chirokoka.strava2sweden.models.StravaActivity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;



public interface MyRepository extends JpaRepository<StravaActivity, Long> {

    @Query("SELECT COALESCE(SUM (distance),0) FROM StravaActivity WHERE chiroGroup='Oud-leiding' AND activityType='Wandelen'")
    float getDistanceWalkingEx();

    @Query("SELECT COALESCE(SUM (distance),0) FROM StravaActivity WHERE chiroGroup='Leiding' AND activityType='Wandelen'")
    float getDistanceWalkingCurrent();

    @Query("SELECT COALESCE(SUM (distance),0) FROM StravaActivity WHERE chiroGroup='Oud-leiding' AND activityType='Lopen'")
    float getDistanceRunningEx();

    @Query("SELECT COALESCE(SUM (distance),0) FROM StravaActivity WHERE chiroGroup='Leiding' AND activityType='Lopen'")
    float getDistanceRunningCurrent();

    @Query("SELECT COALESCE(SUM (distance),0) FROM StravaActivity WHERE chiroGroup='Oud-leiding' AND activityType='Skaten'")
    float getDistanceSkatingEx();

    @Query("SELECT COALESCE(SUM (distance),0) FROM StravaActivity WHERE chiroGroup='Leiding' AND activityType='Skaten'")
    float getDistanceSkatingCurrent();

    @Query("SELECT COALESCE(SUM (distance),0) FROM StravaActivity WHERE chiroGroup='Oud-leiding' AND activityType='Fietsen'")
    float getDistanceRidingEx();

    @Query("SELECT COALESCE(SUM (distance),0) FROM StravaActivity WHERE chiroGroup='Leiding' AND activityType='Fietsen'")
    float getDistanceRidingCurrent();

    // @Query(value="SELECT a FROM StravaActivity a ORDER BY timestamp DESC LIMIT 4", nativeQuery=true)
    // List<StravaActivity> get4MostRecentActivities();

    List<StravaActivity> findTop4ByOrderByTimestampDesc();
}