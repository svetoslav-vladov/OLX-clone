const domain = 'https://fakestoreapi.com';
const port = '';

let serverUrl = `${domain}:${port}`;

if (!port.length) {
  serverUrl = domain;
}

export default {
  domain,
  port,
  serverUrl
}