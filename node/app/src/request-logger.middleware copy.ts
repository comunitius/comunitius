
export function requestLogger(req, res, next) {
  console.log(`Request...`);
  next();
};