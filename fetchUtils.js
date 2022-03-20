export function makeOptions(method, body, addToken) {
    const opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }
    /* If we have log in feature
    if(addToken){
        opts.headers.Authorization = "Bearer " + sessionStorage.getItem("token")
    }
    */
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }