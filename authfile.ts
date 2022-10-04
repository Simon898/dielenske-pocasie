import createAuth0Client from '@auth0/auth0-spa-js';

let auth = await createAuth0Client({
  domain: 'dev-ykr-5d4h.us.auth0.com',
  client_id: 'YxCOFhEru75biUuBBan9gxORv8467GD8',
  redirect_uri: window.location.origin,
});

export default auth;
