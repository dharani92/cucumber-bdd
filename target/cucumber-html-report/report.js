$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Crud.feature");
formatter.feature({
  "line": 1,
  "name": "Check CRUD operations",
  "description": "To verify whether all the basic Operations are working as required",
  "id": "check-crud-operations",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Create a new Computer",
  "description": "",
  "id": "check-crud-operations;create-a-new-computer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"Add a new computer\" button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "adds new computer details",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.user_is_on_homepage()"
});
formatter.result({
  "duration": 2489310489,
  "status": "passed"
});
formatter.match({
  "location": "Tests.user_clicks_on_add_new_computer()"
});
formatter.result({
  "duration": 293220696,
  "status": "passed"
});
formatter.match({
  "location": "Tests.user_enters_username_and_Password()"
});
formatter.result({
  "duration": 859407803,
  "status": "passed"
});
formatter.match({
  "location": "Tests.success_message_is_displayed()"
});
formatter.result({
  "duration": 189904248,
  "status": "passed"
});
});