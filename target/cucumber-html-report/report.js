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
  "duration": 2404605111,
  "status": "passed"
});
formatter.match({
  "location": "Tests.user_clicks_on_add_new_computer()"
});
formatter.result({
  "duration": 265961121,
  "status": "passed"
});
formatter.match({
  "location": "Tests.user_enters_username_and_Password()"
});
formatter.result({
  "duration": 906526819,
  "status": "passed"
});
formatter.match({
  "location": "Tests.success_message_is_displayed()"
});
formatter.result({
  "duration": 181254908,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Update a Computer",
  "description": "",
  "id": "check-crud-operations;update-a-computer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user clicks on \"ACE\" computer",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user updates computer details",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "update success message is displayed for \"ACE\" computer",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.user_is_on_homepage()"
});
formatter.result({
  "duration": 1870588236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACE",
      "offset": 16
    }
  ],
  "location": "Tests.select_computer_with_name(String)"
});
formatter.result({
  "duration": 835190061,
  "status": "passed"
});
formatter.match({
  "location": "Tests.update_computer_with_name()"
});
formatter.result({
  "duration": 474615859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACE",
      "offset": 41
    }
  ],
  "location": "Tests.update_success_message_is_displayed(String)"
});
formatter.result({
  "duration": 109477821,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Delete a Computer",
  "description": "",
  "id": "check-crud-operations;delete-a-computer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user clicks on \"ACE\" computer",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user deletes computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "delete success message is displayed for \"ACE\" computer",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.user_is_on_homepage()"
});
formatter.result({
  "duration": 3748271579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACE",
      "offset": 16
    }
  ],
  "location": "Tests.select_computer_with_name(String)"
});
formatter.result({
  "duration": 806432820,
  "status": "passed"
});
formatter.match({
  "location": "Tests.delete_computer()"
});
formatter.result({
  "duration": 376160412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACE",
      "offset": 41
    }
  ],
  "location": "Tests.delete_success_message_is_displayed(String)"
});
formatter.result({
  "duration": 137734673,
  "status": "passed"
});
});