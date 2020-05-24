let headers = {
    'Content-Type': 'application/json',
    'Accept' :'application/json'
    // 'Accept' : 'text/csv'
};
export function post (url, data) {
  return new Promise(function (resolve, reject) {
    try {
      if (null === url || undefined === url || '' === url) {
        reject('URL not present.');
      } else {
        const token = localStorage.getItem('id_token');
        if (token) {
          headers.Authorization = token;
        }
        const options = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data)
        };
        fetch(url, options)
          .then(res => {
            return res.status !== 204 && res.json()
          })
          .then(res => {
            resolve(res);
          })
          .catch(error => {
            console.error("[Ajax call :: ERROR]",error);            
            reject(error)
          });
      }
    } catch (error) {
      reject(error);
    }
  });
}


export async function get (url) {
    return new Promise(function (resolve, reject) {
      try {
        if (null === url || undefined === url || '' === url) {
          reject('URL not present.');
        } else {
          const token = localStorage.getItem('id_token');     
          if (token) {
            headers.Authorization = token;
          }
          const options = {
            method: 'GET',
            headers: headers
          };
          fetch(url, options)
            .then(res => res.status !== 204 &&res.json())
            .then(res => {
              resolve(res);
            })
            .catch(error => reject(error));
        }
      } catch (error) {
        reject(error)
      }
    });
  }

  export function put (url, data) {
    return new Promise(function (resolve, reject) {
      try {
        if (null === url || undefined === url || '' === url) {
          reject('URL not present.');
        } else {
          const token = localStorage.getItem('id_token');
          if (token) {
            headers.Authorization = token;
          }
          const options = {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(data)
          };
          fetch(url, options)
            .then(res => {
              return res.json()
            })
            .then(res => {
              resolve(res);
            })
            .catch(error => {
              console.error("[Ajax call :: ERROR]",error);            
              reject(error)
            });
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  export function del (url) {
    return new Promise(function (resolve, reject) {
      try {
        if (null === url || undefined === url || '' === url) {
          reject('URL not present.');
        } else {
          const token = localStorage.getItem('id_token');
          if (token) {
            headers.Authorization = token;
          }
          const options = {
            method: 'DELETE',
            headers: headers,
            // body: JSON.stringify(data)
          };
          fetch(url, options)
            .then(res => {
              // return res.json()
            })
            .then(res => {
              resolve(res);
            })
            .catch(error => {
              console.error("[Ajax call :: ERROR]",error);            
              reject(error)
            });
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  