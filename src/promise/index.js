const somethingWillHappen = () => {
  return new Promise((resolve, Reject) => {
    if (true) {
      resolve('Hey!')
    } else {
      Reject('Whooops!');
    }
  })
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err))

//otra
const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True');
      }, 2000)
    } else {
      const error = new Error('whooops!')
      reject(error);
    }
  });
}

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err));

//Para encadenar promesas con el método promise.all y devolver un arreglo.
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Array of results', response);
  })
  .catch(err => {
    console.error(err)
  })