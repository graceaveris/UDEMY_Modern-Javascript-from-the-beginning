/*
EASY http library V3
*/

class EasyHTTP {
    //get method
    async get(url) {
      const response = await fetch(url);
      const resData = await response.json();
      return resData;
    }

    //post method
    async post(url, data) {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
          });
        const resData = await response.json();
        return resData;  
    }

    //put(update) method
    async put(url, data) {
          const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
          });
        const resData = await response.json();
        return resData;  
    }

    //delete method
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
          });
        const resData = await 'Resource deleted!'
        return resData; 
    }

}