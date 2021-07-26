const domain = 'http://fakestoreapi.com';
const port = '';

let serverUrl = `${domain}:${port}`;

if (!port.length) {
  serverUrl = domain;
}

export {
  domain,
  port,
  serverUrl
}