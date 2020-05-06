package com.chirokoka.strava2sweden.controllers;

import com.chirokoka.strava2sweden.repositories.MyRepository;
import com.chirokoka.strava2sweden.services.MyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {


    @Autowired
    private MyService service;

    @Autowired
    private MyRepository repo;


    @GetMapping(value = "/")
    public ModelAndView getHomePage() {
        ModelAndView page = new ModelAndView();
        page.setViewName("home");
        page.addObject("athletes", repo.findTop4ByOrderByTimestampDesc());
        page.addObject("distanceExLeaders", service.getTotalDistanceExLeadders());
        page.addObject("distanceCurrentLeaders", service.getTotalDistanceCurrentLeaders());
        return page;
    }
}