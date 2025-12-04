function isString(value) {
  return typeof value === "string";
}

function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

function isBoolean(value) {
  return typeof value === "boolean";
}

module.exports = {
  isString,
  isNumber,
  isBoolean
};
