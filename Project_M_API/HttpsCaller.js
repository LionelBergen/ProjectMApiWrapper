import https from 'https';

function makeAnHTTPSCall(URL) {
  return new Promise((resolve, reject) => {
    https.get(URL, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received.
      resp.on('end', () => {
        const parsedData = JSON.parse(data);

        if (parsedData.status) {
          if (parsedData.status.status_code === '403') {
            reject(new Error('Forbidden. Ensure api key is up to date.'));
          } else {
            reject(new Error(parsedData));
          }
        } else {
          resolve(parsedData);
        }
      });
    }).on('error', (err) => {
      reject(new Error(`Error: ${err.message}`));
    });
  });
}

export default makeAnHTTPSCall;
