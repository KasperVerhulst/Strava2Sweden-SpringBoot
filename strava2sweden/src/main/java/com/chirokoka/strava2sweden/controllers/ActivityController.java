package com.chirokoka.strava2sweden.controllers;

import com.chirokoka.strava2sweden.models.StravaActivity;
import com.chirokoka.strava2sweden.repositories.MyRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class ActivityController {
    

    @Autowired
    private MyRepository repo;


    @GetMapping
    public String showAdminPage(Model model) {
        model.addAttribute("activity", new StravaActivity());
        return "admin";
    }

    @PostMapping
    public String addActivity(@ModelAttribute("activity") StravaActivity activity, Model model) {
        System.out.println(activity.toString());
        repo.save(activity);
        model.addAttribute("activity", activity);
        return "result";
    }
}