
function usersRetrieved(response) {
  return response.json();
}

function userJSONReady(users) {
  const usersDiv = document.getElementById("users");
  let usersHTML = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    usersHTML += "<div>" + user.name + "</div>";
  }
  usersDiv.innerHTML = (usersHTML);
}

function commentJsonReady(comments) {
  const commentsDiv = document.getElementById("comments");
  let commentsHTML = "";
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    commentsHTML += "<div>" + comment.name + "</div>";
  }
  commentsDiv.innerHTML = (commentsHTML);
}

const userswebRequestPromise = fetch("https://jsonplaceholder.typicode.com/users");
const usersgetJsonPromise = userswebRequestPromise.then(usersRetrieved);
usersgetJsonPromise.then(userJSONReady);

const commentswebRequestPromise = fetch("https://jsonplaceholder.typicode.com/comments");
const commentsgetJsonPromise = commentswebRequestPromise.then(usersRetrieved);
commentsgetJsonPromise.then(commentJsonReady);
