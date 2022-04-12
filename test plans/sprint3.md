# INTRODUCTION

This is an application created for logging in and signup up users. The landing page leads to the login page for current users to sign in and also leads to a sign up page for new members, and after setting page navigates to Catgories, that users will select the specific topic of their interest to display latest news.

# Test Items
- Web application(UX) 
- API
- Database 

# Features to be Tested
- Landing page with news
- Logging in and displaying news on portal
- Settins to choose the category
- Login and logout to show it works


# Approach
We have approached this sprint by first creating the UX for the web application and working on creating an API to connect with the Database. We have created various test cases for the same.

# Pass/Fail Criteria

### Landing Page 
- When the user comes on the landing page, it would display general news
- Navigation Bar is added
- Pagination is added

### Refresh page
- When the user clicks on refresh, it would refresh the page and display updated news

### Setting page
- If the user wants to see specific category then user can change the settings
- Will land on the setting page choose the category, clicks radio button, it would display the news
- It would have a save button, to store save categories


### Login and Logout
- User can check successfully login and logout and check for the news
-
### Integration Testing
- Integration testing has been used to check the integration of the modules and components and to test that they are all running as expected
- when an unauthenticated user is on the landing page, they should be able to access the login page with status 200 ok
- After entering the correct login details the user whould be able to access the dashboard with status 200 ok
- Log Out
- Save
- API
- Dasboard

# Testing Tasks
- Unit Testing by each Team member on their own machine

# Responsibilities
- UX testing
- API Testing
- Database testing
