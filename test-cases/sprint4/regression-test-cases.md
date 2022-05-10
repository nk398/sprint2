| Test ID | Task | Prerequisite| Description/ Steps | Expected Output | Result - Pass/Fail |
| ------- | ---- | ------------| ------------------ | --------------- | ------------------ |
| Landing_1 | Test to see if landing page is loading  | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser  | landing page should be visible  | Pass |
| Landing_2 | Test to see if the landing page displays news | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser | Landing page should display news | Pass |
| Landing_3 | Test to see if the news on the landing page are from the general category | Web Application server should be running | Enter the url https://www.localhost:3000/1 in the browser  | landing page should display general category news  | Pass |
| Landing_4 | Test to see the functionality of the login button  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Select the Login button | Application should navigate to the Login page | Pass |
| Landing_5 | Test to see the functionality of the register button  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Select the Register Button  | Application should navigate to the Registeration page  | Pass |
| Landing_6 | Test to see functionality of refresh button  | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser <br> 2. Select the refresh button | Refresh button should reload the page | Pass |
| Landing_7 | Test to see functionality of the News app button | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the News App button | News App Button should display the landing page | Pass |
| Landing_8 | Test to see if the new articles can be expanded further | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. Click on any news article | Clicking in the headline should lead to an external page containing the entire article | Pass |
| Register_1 | Test the functionality when the correct format of credentials are entered | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Register button <br> 3. Enter the correct format of credentials | User should be redirected to login page with the message Succesfully registered! | Pass |
| Register_2 | Test the functionality when the incorrect format of email is entered | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Register button <br> 3. Enter the incorrect format of email <br> 4. Select register | Registeration page is reloaded with the email field highlighted in red with error message Please enter a valid Email Address! | Pass |
| Register_3 | Test the functionality when the username entered has less than 8 characters | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Register button <br> 3. Enter the username with less than 8 characters <br> 4. Select register | Registeration page is reloaded with the username field highlighted in red with error message Please enter a valid 8 Character Username! | Pass |
| Register_4 | Test the functionality when the password typed does not have atleast 8 characters with lowercase, uppercase and symbols | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Register button <br> 3. Enter a password which does not have atleast 8 characters with lowercase, uppercase and symbols  <br> 4. Select register | Registeration page is reloaded with the password fields highlighted in red with error message Passwords should match and be atleast 8 characters with lowercase, uppercase and symbols. | Pass |
| Register_5 | Test the functionality when the confirmed password does not match the pasword initially typed | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Register button <br> 3. Enter a password in the confirm password field that does not match the pasword typed in the previous field  <br> 4. Select register | Registeration page is reloaded with the confirm password field highlighted in red with error message Passwords should match and be atleast 8 characters with lowercase, uppercase and symbols. | Pass |
| Login_1 | Test the functionality when the correct credentials are entered | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Login button <br> 3. Enter the correct credentials | User should be redirected to dashboard with the message Welcome "username" | Pass |
| Login_2 | Test the functionality when the incorrect credentials are entered | Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Login button <br> 3. Enter the incorrect credentials | Registeration page is reloaded with the input fields highlighted in red with error message Incorrect Email or Password! | Pass |
| Setting_1 | Test the functionality of the settings button |  Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Login button <br> 3. Enter the correct credentials <br> 4. Click on settings button | Settings button should redirect the page to settings page which contains multiple categories with select and unselect checkboxes <br> Default selection for new user should be General | Pass |
| Setting_2 | Test the functionality of the settings button |  Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Login button <br> 3. Enter the correct credentials <br> 4. Click on settings button <br> Click on the select button for preferred settings and unselect the unselect buttons for the corresponding  | Settings button should redirect the page to settings page which contains multiple categories with select and unselect checkboxes <br> Default selection for new user should be General | Pass |
| Setting_3 | Test the functionality of the settings button |  Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Login button <br> 3. Enter the correct credentials <br> 4. Click on settings button <br> Click on the select button for preferred settings and unselect the unselect buttons for the corresponding  | Settings button should redirect the page to settings page which contains multiple categories with select and unselect checkboxes <br> Default selection for new user should be General | Pass |
| Setting_4 | Test the functionality of the settings button |  Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Login button <br> 3. Enter the correct credentials <br> 4. Click on settings button <br> Click on the select button for preferred settings and unselect the unselect buttons for the corresponding  | Settings button should redirect the page to settings page which contains multiple categories with select and unselect checkboxes <br> Default selection for new user should be General | Pass |
| Setting_5 | Test the functionality of the settings button |  Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Login button <br> 3. Enter the correct credentials <br> 4. Click on settings button <br> Click on the select button for preferred settings and unselect the unselect buttons for the corresponding  | Settings button should redirect the page to settings page which contains multiple categories with select and unselect checkboxes <br> Default selection for new user should be General | Pass |
| Dash_1 | Test to see if the dashboard loads |  Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Login button <br> 3. Enter the correct credentials | Login page is redirected to the  dashboard which has a navigation bar for news customization, search bar, settings and pagination | Pass |
| Dash_2 | Test to see if news in the home tab is sorted in descending order of publishing date and time |  Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Login button <br> 3. Enter the correct credentials | News should be displayed in descending order of publishing date and time | Pass |
| Dash_3 | Test to see pagination for the news in the home tab |  Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Login button <br> 3. Enter the correct credentials <br> 4. Select any pagination number link | a new page should be displayed whch shows older articles in descending order | Pass |
| Dash_4 | Test to see if the merged news in the home tab reflects the categories selected in settings |  Web Application server should be running | 1. Enter the url https://www.localhost:3000/1 in the browser  <br> 2. select the Login button <br> 3. Enter the correct credentials | The merged news articles in the home tab should only display articles from the categories selected in settings | Pass |