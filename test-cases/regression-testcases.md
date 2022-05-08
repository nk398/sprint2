| Test ID | Task | Prerequisite| Description/ Steps | Expected Output|
| ------- | ---- | ------------| ------------------ | -------------- |
| 1 | Test to see if landing page is loading  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser  | landing page should be visible  |
| 2 | Test to see if the landing page displays general news | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser | Landing page should display news from the general category |
| 3 | Test to see if the login button opens up login page | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button | Login page should be visible |
| 4 | Test to see if register button opens registration page | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser 2. Click on register button | Registration page should be visible |
| 5 | Test to see if search bar on landing page leads to login page | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Enter keyword in search bar and click on search | Login page should be displayed as only registered users can search for articles |
| 6 | Test to see if error message is displayed if password entered in the registration page does not have atleast 8 characters, one uppercase, one number and one special character | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on register button <br> 3. Enter password in with wrong specifications| Error message should be displayed |
| 7 | Test to see if user can be registered | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on register button <br> 3. Enter details with proper specifications <br> 4. click on the register button | User credentials should be reflected in the database |
| 8 | Test to see if entering wrong details in login page throws error message | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on the login button <br> 3. Enter incorrect user details | Error message should be displayed |
| 9 | Test to see if entering correct details in login page leads to the dashboard page | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on the login button <br> 3. Enter correct user credentials | User specific dashboard should be visible |
| 10 | Test to see if dashboard has a navigation bar with different news category tabs| Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details | Dashboard should have a navigation bar with different tabs |
| 11 | Test to see if each tab on the navigation bar displays news of that category only | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details <br> Select different tabs on the bar| Each tab should display news of that particular category only |
| 12 | Test to see if refresh button displays latest news | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. Click on login button <br> 3. Enter correct user details <br> 4. Click on the refresh button | The news displayed should be the latest news available |
| 13 | Test to see if the error message is given when no settings are saved | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. Click on login button <br> 3. Enter correct user details <br> 4. Click on the settings button <br> 5. Unselect all selections | Error message should be given |
| 14 | Test to see if the news in Home tab is based on the categories chosen in settings | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details <br> 4. Verify news titles in the home tab with the categories selected in settings | News displayed should only be from the selections made in settings |
| 15 | Test to see if the articles are sorted in descending order of publishing date | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details <br> 4. Observe the publishing date and time of articles| The articles should be in descending order of publishing date and time |
| 16 | Test to see if pagination works | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details <br> 4. Select the pagination numbers on the bottom of the page | The links on the numbers shoul lead to another page with older articles still in descending order for each category |
| 17 |  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details |  |
| 18 |  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details |  |
| 19 |  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details |  |
| 20 |  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details |  |
| 21 |  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details |  |
| 22 |  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details |  |
| 23 |  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details |  |
| 24 |  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details |  |
| 25 |  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details |  |
| 26 |  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details |  |
| 27 |  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details |  |
| 28 |  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details |  |
| 29 |  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details |  |
| 30 |  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details |  |
| 31 |  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Click on login button <br> 3. Enter correct user details |  |
| 32 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 33 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 34 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 35 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 36 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 37 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 38 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 39 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 40 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 41 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 42 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 43 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 44 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 45 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 46 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 47 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
| 48 |  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser |  |
