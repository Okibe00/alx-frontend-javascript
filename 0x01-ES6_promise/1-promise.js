export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) {
      return resolve({
        status: 200,
        body: 'Success',
      });
    }
    return reject(Error('The fake API is not working currently'));
  });
  return promise;
}
