package com.example.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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
//	String tag ="";
//	@RequestMapping(value = "/sanpham/dienthoai/{brank}", method = RequestMethod.GET)
//	public String saveCourse(Model model,@PathVariable(name = "brank")String brank) {
//		List<SanPham> ds = new ArrayList<>();
//		String reqTag= brank;
//		System.out.println("barnk:"+reqTag);
//		if(reqTag != null){
//			tag += reqTag;
//		}
//		String [] arrBrank = tag.split("&");
//		Set<String> tagSet = new HashSet<String>(Arrays.asList(arrBrank));
//		tagSet.forEach(e->{
//			ds.addAll(service.findBySlug(e));
//		});
//
//		model.addAttribute("sanphams", ds);
//		System.out.println(ds);
//
//		System.out.println(tag);
//		model.addAttribute("tags", tag);
//
//		return "home";
//	}
	Set<String> tags = new HashSet<String>();
	@RequestMapping(value = "/sanpham/dienthoai/{brank}?{action}",method = RequestMethod.GET)
	public String postFillter(HttpServletRequest req,Model model,@RequestParam(name = "brank",required=false)String brank,@RequestParam(name = "action",required=false)String action) {
		Set<SanPham> dssanpham = new HashSet<SanPham>();
		if(action != null) {
			if(action.equals("1")) {
				tags.add(brank);
			}
			if(action.equals("0")) {
				tags.remove(brank);
			}
		}
		String tag="";
		if(tags.size() > 0) {
			for (String e : tags) {
				tag=tag+e+"&";
				dssanpham.addAll(service.findBySlug(e));
			}
		}
		if(tags.size() == 0) {
			dssanpham.addAll(service.findAll());
		}
		model.addAttribute("tags", tag);
		model.addAttribute("sanphams", dssanpham);
		return "home";
	}

//	@RequestMapping(value = "/show/{tenSanpham}")
//	public String showSP(Model model,@PathVariable(name = "tenSanpham")String tenSanpham) {
//		List<SanPham> ds = new ArrayList<>();
//		ds = service.findBytenSanpham(tenSanpham);
//		model.addAttribute("sanpham", ds);
//		return "show";
//	}
//	
//	@RequestMapping(value = "/sanphams/{iphone}")
//	public String collectIphone(Model model,@PathVariable(name = "iphone")String iphone) {
//		List<SanPham> ds = new ArrayList<>();
//		ds = service.findBySlug(iphone);
//		ds.forEach(e -> System.out.println(e));
//		model.addAttribute("sanphams", ds);
//		model.addAttribute("fillter", "iphone");
//		return "home";
//	}
}
