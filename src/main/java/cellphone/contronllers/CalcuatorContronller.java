package cellphone.contronllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CalcuatorContronller {

	@GetMapping("cal")
	public String getFromCal() {
		return "calculator";
	}

	@PostMapping(value = "cal/resul", params = "addition")
	public String postCal(@RequestParam("numbera") int num1, @RequestParam("numberb") int num2,Model model) {
		int resul = num1+num2;
		model.addAttribute("resul", resul);
		return "calresul";
	}
}
