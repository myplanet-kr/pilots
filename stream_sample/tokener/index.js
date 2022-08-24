const StreamChat = require("stream-chat").StreamChat;

const api_key = "t7pjgzhcympt";
const api_secret =
  "5tzhxa37r3s3gbfetwzybmt6nt7bv68mjdn6m83smd5q5bdmh49kaahe2qxmpfp9";
const user_id = "luke_moon";

// Initialize a Server Client
const serverClient = StreamChat.getInstance(api_key, api_secret);
// Create User Token
const token = serverClient.createToken(user_id);
console.log(token);
