
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

fetch('https://jsonplaceholder.typicode.com/users') //fetch users
.then(usersRetrieved)
.then(userJSONReady);

function commentJSONReady(comments) {
  const commentsDiv = document.getElementById('comments');
  let commentsHTML = '';
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    commentsHTML += `<div> ${comment.name} </div>`;
  }
  commentsDiv.innerHTML = commentsHTML;
}

fetch('https://jsonplaceholder.typicode.com/comments')  //fetch comments
.then(res => res.json())
.then(commentJSONReady);
