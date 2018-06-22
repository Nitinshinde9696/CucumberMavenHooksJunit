$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Java_Programs/MyJava_Project/bin/MyJava_Package/MevanArtifact/CucumberFetures/LoginFeatures.feature");
formatter.feature({
  "line": 1,
  "name": "Verify the login functionality",
  "description": "Description:\r\ntesting the login functionality",
  "id": "verify-the-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 290125,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "user should able to access the url and able login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user open the browser",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Navigate to login window",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginClass.user_open_the_browser()"
});
formatter.result({
  "duration": 160030344,
  "status": "passed"
});
formatter.match({
  "location": "LoginClass.navigate_to_login_window()"
});
formatter.result({
  "duration": 375029,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "test theapp",
  "description": "",
  "id": "verify-the-login-functionality;test-theapp",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user enter \"login\" id and \"password\"",
  "rows": [
    {
      "cells": [
        "nitin",
        "shinde"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "login successfull",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters wrong \"userid\" and \"password\"",
  "rows": [
    {
      "cells": [
        "ram",
        "raje"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "login unsucessfull",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 12
    },
    {
      "val": "password",
      "offset": 27
    }
  ],
  "location": "LoginClass.user_enter_id_and(String,String,DataTable)"
});
formatter.result({
  "duration": 6096463,
  "status": "passed"
});
formatter.match({
  "location": "LoginClass.login_successfull()"
});
formatter.result({
  "duration": 191141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userid",
      "offset": 19
    },
    {
      "val": "password",
      "offset": 32
    }
  ],
  "location": "LoginClass.user_enters_wrong_and(String,String,DataTable)"
});
formatter.result({
  "duration": 266232,
  "status": "passed"
});
formatter.match({
  "location": "LoginClass.login_unsucessfull()"
});
formatter.result({
  "duration": 92157,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "verify Home page",
  "description": "",
  "id": "verify-the-login-functionality;verify-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user login and click Home",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "verify Home image",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "use verify the Title",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on my Profile",
  "keyword": "But "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "verify-the-login-functionality;verify-home-page;",
  "rows": [
    {
      "cells": [
        "Home",
        "Title",
        "Profile"
      ],
      "line": 23,
      "id": "verify-the-login-functionality;verify-home-page;;1"
    },
    {
      "cells": [
        "Facebook",
        "FacebookTitle",
        "NitinShinde"
      ],
      "line": 24,
      "id": "verify-the-login-functionality;verify-home-page;;2"
    },
    {
      "cells": [
        "Twitter",
        "TwitterTitle",
        "Sid kale"
      ],
      "line": 25,
      "id": "verify-the-login-functionality;verify-home-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 80211,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "user should able to access the url and able login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user open the browser",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Navigate to login window",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginClass.user_open_the_browser()"
});
formatter.result({
  "duration": 66558,
  "status": "passed"
});
formatter.match({
  "location": "LoginClass.navigate_to_login_window()"
});
formatter.result({
  "duration": 168955,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verify Home page",
  "description": "",
  "id": "verify-the-login-functionality;verify-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user login and click Home",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "verify Home image",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "use verify the Title",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on my Profile",
  "keyword": "But "
});
formatter.match({
  "location": "LoginClass.user_login_and_click_Home()"
});
formatter.result({
  "duration": 295671,
  "status": "passed"
});
formatter.match({
  "location": "LoginClass.verify_Home_image()"
});
formatter.result({
  "duration": 273059,
  "status": "passed"
});
formatter.match({
  "location": "LoginClass.use_verify_the_Title()"
});
formatter.result({
  "duration": 1111434,
  "status": "passed"
});
formatter.match({
  "location": "LoginClass.click_on_my_Profile()"
});
formatter.result({
  "duration": 105384,
  "status": "passed"
});
formatter.before({
  "duration": 88744,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "user should able to access the url and able login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user open the browser",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Navigate to login window",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginClass.user_open_the_browser()"
});
formatter.result({
  "duration": 70398,
  "status": "passed"
});
formatter.match({
  "location": "LoginClass.navigate_to_login_window()"
});
formatter.result({
  "duration": 69118,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify Home page",
  "description": "",
  "id": "verify-the-login-functionality;verify-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user login and click Home",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "verify Home image",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "use verify the Title",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on my Profile",
  "keyword": "But "
});
formatter.match({
  "location": "LoginClass.user_login_and_click_Home()"
});
formatter.result({
  "duration": 89597,
  "status": "passed"
});
formatter.match({
  "location": "LoginClass.verify_Home_image()"
});
formatter.result({
  "duration": 81918,
  "status": "passed"
});
formatter.match({
  "location": "LoginClass.use_verify_the_Title()"
});
formatter.result({
  "duration": 75945,
  "status": "passed"
});
formatter.match({
  "location": "LoginClass.click_on_my_Profile()"
});
formatter.result({
  "duration": 65704,
  "status": "passed"
});
formatter.before({
  "duration": 120743,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "user should able to access the url and able login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user open the browser",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Navigate to login window",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginClass.user_open_the_browser()"
});
formatter.result({
  "duration": 78931,
  "status": "passed"
});
formatter.match({
  "location": "LoginClass.navigate_to_login_window()"
});
formatter.result({
  "duration": 80638,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "test theapp",
  "description": "",
  "id": "verify-the-login-functionality;test-theapp",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "user enter \"firstname\" and \"lastname\"",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Lastname"
      ],
      "line": 29
    },
    {
      "cells": [
        "Nitin",
        "Shinde"
      ],
      "line": 30
    },
    {
      "cells": [
        "Sid",
        "kale"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 12
    },
    {
      "val": "lastname",
      "offset": 28
    }
  ],
  "location": "LoginClass.user_enter_and(String,String,DataTable)"
});
formatter.result({
  "duration": 605423,
  "status": "passed"
});
});