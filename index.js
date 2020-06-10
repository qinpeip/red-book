const request = require('request');
const zlib = require('zlib');
const { randomIp, randomUserAgents } = require('./utils/random-header');

const url = 'https://www.xiaohongshu.com/fe_api/burdock/qihoo/v2/note/5eda3bfb000000000101e0d0';
const headers = {
  Host: 'www.xiaohongshu.com',
  'User-Agent': randomUserAgents(),
  'X-Sign': 'Xb4d9206dc3fa66f3e327fb69d15d95b8',
  'X-Forwarded-For': randomIp()
}

request.get(url, {
  headers
}, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(body);
})