package cellphone.contronllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginContronller {
	@GetMapping("login")
	public String getLoginPage() {
		return "login";
	}
	
	@PostMapping("login")
	public String postLogin(@RequestParam("username") String username, @RequestParam("password") String password,Model model) {
		if(username.equals("phong") && password.equals("12345")) {
			model.addAttribute("message", "true");
		}else {
			model.addAttribute("message", "false");
		}
		return "login";
	}
}
