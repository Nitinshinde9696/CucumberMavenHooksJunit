package main_package;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(dryRun=false,
features ="D:\\Java_Programs\\MyJava_Project\\bin\\MyJava_Package\\MevanArtifact\\CucumberFetures\\LoginFeatures.feature",
format="html:output",
glue ="testpackage",
monochrome =true,
strict=true
		)
public class CucumberRunner {
	

}
