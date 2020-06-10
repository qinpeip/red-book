const userAgents = require('../user-agents');

const randomUserAgents = () => {
  return userAgents[
    Math.floor(Math.random() * (0 - userAgents.length) + userAgents.length)
];
}

const randomIp = () => {
  return (
    Math.floor(Math.random() * (10 - 255) + 255) +
    "." +
    Math.floor(Math.random() * (10 - 255) + 255) +
    "." +
    Math.floor(Math.random() * (10 - 255) + 255) +
    "." +
    Math.floor(Math.random() * (10 - 255) + 255)
);
}

module.exports = {
  randomUserAgents,
  randomIp
}