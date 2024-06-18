
const loginApi = async function ({ email, password }) {
  const res = await fetch("http://localhost:4000/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  });


  const data = await res.json();
  if (data.err?.statusCode === 401 || data.err?.statusCode === 403) throw Error(data.err.message);

  return data;
}

export default loginApi;
