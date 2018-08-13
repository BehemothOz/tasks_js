const functions = [
  cb => cb(null),
  cb => cb(null, `one`),
  (r1, cb) => cb(null, r1, `two`),
  (r1, r2, cb) => cb(null, r2, r1)
]