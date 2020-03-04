// function that is executed when the fetch call is done retrieving the data
// the function will always be the same
// one argument, one response - return response.json()
function usersRetrieved(response) {
  return response.json();
}

// this function handles the data once the json object is ready
function userJSONReady(users) {
  const usersDiv = document.getElementById("users");
  let usersHTML = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    usersHTML += "<div>" + user.name + "</div>";
  }
  usersDiv.innerHTML = (usersHTML);
}

// fetch call to URL then passing in the usersRetrieved and userJSONReady functions
const fetchCall = fetch("https://jsonplaceholder.typicode.com/users");
const getJsonPromise = fetchCall.then(usersRetrieved);
getJsonPromise.then(userJSONReady);


// function for when comments fetch call is complete
function commentsRetrieved(response){
  return response.json();
}

// function to handle data when the fetch call is complete
function commentsJSONReady(comments){
  const commentsDiv = document.getElementById("comments");
  let commentsHTML = "";
  for (let i = 0; i < comments.length; i++){
    const comment = comments[i];
    commentsHTML += "<div>" + comment.name + "</div>" ;
    }
  commentsDiv.innerHTML = (commentsHTML);
}

// fetch call to comments and format data for webpage
const commentsCall = fetch("https://jsonplaceholder.typicode.com/comments");
const commentsJsonPromise = commentsCall.then(commentsRetrieved);
commentsJsonPromise.then(commentsJSONReady);
