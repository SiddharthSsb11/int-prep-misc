// run n times
function init(cb, n) {
  let counter = 0;
  let returnValue = undefined;
  return function () {
    if (counter < n) {
      returnValue = cb.apply(this, arguments);
      counter += 1;
    }
    return returnValue;
  };
}
