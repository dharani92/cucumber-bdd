Feature: Check CRUD operations
  To verify whether all the basic Operations are working as required

  @Regression
  Scenario: Create a new Computer
    Given user is on homepage
    When user clicks on "Add a new computer" button
    And adds new computer details
    Then success message is displayed

  @Regression
    Scenario: Update a Computer
      Given user is on homepage
      When user clicks on "ACE" computer
      And user updates computer details
      Then update success message is displayed for "ACE" computer
