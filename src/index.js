// fnc that is executed when data retrieved from the web.
function usersRetrieved(response) {
  return response.json();
}

// next fnc handles when json data is ready
// you control what you want to do with data here. manipulate, console log, etc
function userJSONReady(users) {
  const usersDiv = document.getElementById("users");
  let usersHTML = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    usersHTML += "<div>" + user.name + "</div>";
  }
  usersDiv.innerHTML = (usersHTML);
}

// decide what URL to use to call the data
// call the fetch fnc to start web request that returns a promise
// you decide what happens when web request is done. 

fetch("https://jsonplaceholder.typicode.com/users")
.then (usersRetrieved)
.then(userJSONReady);


// fnc that is executed when data retrieved from the web.
function commentsRetrieved(response) {
  return response.json();
}

// next fnc handles when json data is ready
// you control what you want to do with data here. manipulate, console log, etc
function commentJSONReady(comments) {
  const commentsDiv = document.getElementById("comments");
  let commentsHTML = "";
  for (let i = 0; i < 10; i++) {
    const comment = comments[i];
    commentsHTML += "<div>" + comment.name + "</br>" + "</br>" + "</div>";
  }
  commentsDiv.innerHTML = (commentsHTML);
}


fetch("https://jsonplaceholder.typicode.com/comments")
.then (commentsRetrieved)
.then (commentJSONReady);


