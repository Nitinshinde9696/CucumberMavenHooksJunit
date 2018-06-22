Feature: Verify the login functionality
Description:
testing the login functionality

Background: user should able to access the url and able login
When user open the browser
Then Navigate to login window

 Scenario: test theapp
 When user enter "login" id and "password"
 |nitin|shinde|
 Then login successfull
 When user enters wrong "userid" and "password"
 |ram|raje|
 Then login unsucessfull
 
  Scenario Outline: verify Home page
 When user login and click Home
 Then verify Home image
 And use verify the Title
 But click on my Profile
 Examples:
 |Home|Title|Profile|
 |Facebook|FacebookTitle|NitinShinde|
 |Twitter|TwitterTitle|Sid kale|
 
  Scenario: test theapp
 When user enter "firstname" and "lastname"
 |FirstName|Lastname|
 |Nitin|Shinde|
 |Sid|kale|