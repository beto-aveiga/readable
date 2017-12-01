import uuid from "uuid";
const url = "http://localhost:3001/";

const Authorization = 1;

const headers = {
  headers: {
    Authorization
  }
};

const headersPOST = {
  Authorization,
  method: "POST"
};

const server = {};

// Function to handle required parameters
const req = () => {
  throw new Error("Missing parameter");
};

// server does not update or create categories, so I only call once getCategories and store it
let categories = false;
server.getCategories = () => (!categories ? fetch(url + "categories", headers).then(response => (categories = response.json())) : Promise.resolve(categories));

// Getting Posts and Comments
server.getPosts = () => fetch(url + "posts", headers).then(response => response.json());
server.getComments = (postId = req()) => fetch(url + "posts/" + postId + "/comments", headers).then(response => response.json());

// Getting specific post or comment
server.getPost = id => fetch(url + "posts/" + id, headers).then(response => response.json());
server.getComment = id => fetch(url + "comments/" + id, headers).then(response => response.json());

// Creating a post
server.createPost = ({ title = req(), body = req(), author = req(), category = req() } = {}) => {
  const id = uuid();
  const timestamp = Date.now();
  const params = { headers: { ...headersPOST }, id, timestamp, title, body, author, category };
  return fetch(url + "posts", params);
};

// Upvote | Downvote
server.vote = (entity, id, option) => fetch(url + entity + "s" + "/" + id, { option }).then(response => response.json());
server.upVotePost = id => server.vote("post", id, "upVote");
server.downVotePost = id => server.vote("post", id, "downVote");
server.upVoteComment = id => server.vote("comment", id, "upVote");
server.downVoteComment = id => server.vote("comment", id, "downVote");

// Creating a comment
server.createComment = ({ body = req(), author = req(), parentId = req() } = {}) => {
  const id = uuid();
  const timestamp = Date.now();
  const params = { headers: { ...headersPOST }, id, timestamp, body, author, parentId };
  return fetch(url + "posts", params);
};

export default server;
