package testpackage;

import java.util.List;
import java.util.Map;

import org.junit.After;

import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginClass {
	
	@Before
	public void beforeHook()
	{
		System.out.println("First before Hook");
	}
	@After
	public void afterHook()
	{
		System.out.println("After hook");
	}
	
	@When("^user open the browser$")
	public void user_open_the_browser() {
		System.out.println("user_open_the_browser");

	}

	@Then("^Navigate to login window$")
	public void navigate_to_login_window() {
		System.out.println("navigate_to_login_window");

	}

	@Then("^login successfull$")
	public void login_successfull() {
		System.out.println("login_successfull");

	}

	@When("^user enter \"([^\"]*)\" id and \"([^\"]*)\"$")
	public void user_enter_id_and(String arg1, String arg2, DataTable arg3) {
		for (List<String> str : arg3.raw()) {
			for (int i = 0; i < str.size(); i++)
				System.out.print(str.get(i));

		}

	}

	@When("^user enters wrong \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_wrong_and(String arg1, String arg2, DataTable arg3) {
		for (List<String> str : arg3.raw()) {
			for (int i = 0; i < str.size(); i++)
				System.out.print(str.get(i));

		}
	}

	@Then("^login unsucessfull$")
	public void login_unsucessfull() {
		System.out.println("login_unsucessfull");

	}
	@When("^user login and click Home$")
	public void user_login_and_click_Home(){
		System.out.println("user_login_and_click_Home");
	}

	@Then("^verify Home image$")
	public void verify_Home_image(){
		System.out.println("verify_Home_image");
	}

	@Then("^use verify the Title$")
	public void use_verify_the_Title(){
		System.out.println("use_verify_the_Title");
	}

	@Then("^click on my Profile$")
	public void click_on_my_Profile(){
		System.out.println("click_on_my_Profile");
	}
	@When("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and(String arg1, String arg2, DataTable arg3) {
		System.out.print("user_enter_and ");
		for( Map<String, String> data : arg3.asMaps(String.class, String.class))
		{
			String val1 = data.get("FirstName");
			String val2 = data.get("Lastname");
			System.out.println(val1+"  "+val2);
					
		}
			
	}

}
