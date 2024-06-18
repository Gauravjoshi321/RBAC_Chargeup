async function getData(token) {
  const res = await fetch("http://localhost:4000/data/getAllData", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header
      'token': token
    },
  });

  const data = await res.json();
  if (data.err?.statusCode === 401 || data.err?.statusCode === 403) throw Error(data.err.message);


  return data;
}

export async function checkLoggedIn(token) {

  const res = await fetch("http://localhost:4000/checkLoggedInForFront", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header
      'token': token
    },
  });
  const data = await res.json();

  if (data.err?.statusCode === 401 || data.err?.statusCode === 403) throw Error(data.err.message);


  return data;
}

export default getData;