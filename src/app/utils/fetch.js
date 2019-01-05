import isomorphicFetch from 'isomorphic-fetch';

const fetch = async (url, method, body, accessToken) => {
  const options = {
    method,
    headers: requestHeaders(accessToken),
    body: method !== 'GET' ? JSON.stringify(body) : null,
  };
  const res = await isomorphicFetch(url, options);

  return parseStatus(res.status, res.json());
};

function parseStatus(status, res) {
  return new Promise((resolve, reject) => {
    if (status >= 200 && status < 300) {
      res.then(response => resolve(response));
    } else {
      res.then(response => reject({ status, message: response.message }));
    }
  });
}

function requestHeaders(token) {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : '',
  };
}

export default fetch;
