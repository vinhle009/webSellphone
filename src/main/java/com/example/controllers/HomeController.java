package com.example.controllers;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.mdoel.SanPham;
import com.example.services.SanPhamService;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class HomeController {
	
	@Autowired
	SanPhamService service;

	@RequestMapping(value = "/",method = RequestMethod.GET)
	public String getHomePage(Model model) {
		model.addAttribute("sanphams", service.findAll());
		return "home";
	}
	

}
