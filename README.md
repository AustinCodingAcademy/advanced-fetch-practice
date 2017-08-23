### Setup
  *- Fork, clone, yarn install, yarn start
### Let's fetch users
  * Go to this URL in your browser, https://jsonplaceholder.typicode.com/users
  * Study the JSON format to understand what type of data it returns
  * Now you need your running code to be able to retrieve this data so that you can use it to make a webpage.
  * In index.js, make a fetch call to the url
  * Specify the callback function usersRetrieved to handle when the fetch call is done, .then()
  * Specify the callback function userJSONReady to handle when the json is ready, .then()
### Let's fetch comments
  * Go to this URL in your browser, https://jsonplaceholder.typicode.com/comments
  * Study the JSON format to understand what type of data it returns
  * In index.js, make a fetch call to the url
  * Try using inline functions as the callbacks to the .then()
  * Use usersRetreived as an example of how to put the data into the webpage
  * Loop through the comments array and create a div for each one that shows the comment name.
  * Set the innerHTML of a div with id = comments
