const functions = [
  cb => cb(null),
  cb => cb(null, `one`),
  (r1, cb) => cb(null, r1, `two`),
  (r1, r2, cb) => cb(null, r2, r1)
]

const waterfall = (functions, callback) => {
  if ( functions.length == 0 ) {
    return callback();
  }

  console.log(functions);

  const next = ([head, ...rest], previousResult) => {
    const cb = (err, ...args) => {
      if (err) return callback(err, args);
      if (rest.length == 0) return callback(err, args);

      next(rest, args);
    }

    head(...previousResult, cb);
  }

  next(functions, []);
}


const callback = (err, ...result) => {
  console.log(err)
  console.log(result);
}

waterfall(functions, callback);