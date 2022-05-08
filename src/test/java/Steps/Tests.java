package Steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.concurrent.TimeUnit;

public class Tests {

    public static WebDriver driver;
    String name = "apple123";

    @Given("^user is on homepage$")
    public void user_is_on_homepage() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://computer-database.gatling.io/computers");
        driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
    }

    @When("^user clicks on \"Add a new computer\" button$")
    public void user_clicks_on_add_new_computer() throws Throwable {
        driver.findElement(By.id("add")).click();
    }

    @When("^adds new computer details$")
    public void user_enters_username_and_Password() throws Throwable {
        driver.findElement(By.id("name")).sendKeys(name);
        driver.findElement(By.id("introduced")).sendKeys("2012-01-01");
        driver.findElement(By.id("discontinued")).sendKeys("2021-01-01");
        driver.findElement(By.id("company")).sendKeys("Apple Inc.");
        driver.findElement(By.xpath("//*[@id=\"main\"]/form/div/input")).click();
    }

    @Then("^success message is displayed$")
    public void success_message_is_displayed() throws Throwable {
        String exp_message = "Done ! Computer "+name+ " has been created";
        String actual = driver.findElement(By.xpath("//*[@id=\"main\"]/div[1]")).getText();
        Assert.assertEquals(exp_message, actual);
        driver.quit();
    }

    @When("^user clicks on \"([^\"]*)\" computer$")
    public void select_computer_with_name(String computerName) throws Throwable {
        driver.findElement(By.id("searchbox")).sendKeys(computerName);
        driver.findElement(By.id("searchsubmit")).click();
        driver.findElement(By.xpath("/html/body/section/table/tbody/tr[1]/td[1]/a")).click();
    }

    @When("^user updates computer details$")
    public void update_computer_with_name() throws Throwable {
        driver.findElement(By.id("introduced")).sendKeys("2012-01-01");
        driver.findElement(By.xpath("//*[@id=\"main\"]/form/div/input")).click();
    }

    @Then("^update success message is displayed for \"([^\"]*)\" computer$")
    public void update_success_message_is_displayed(String computerName) throws Throwable {
        String exp_message = "Done ! Computer "+computerName+ " has been updated";
        String actual = driver.findElement(By.xpath("//*[@id=\"main\"]/div[1]")).getText();
        Assert.assertEquals(exp_message, actual);
        driver.quit();
    }
}
