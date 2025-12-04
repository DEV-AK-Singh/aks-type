function isString(value) {
  return typeof value === "string";
}

function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

function isBoolean(value) {
  return typeof value === "boolean";
}

function isObject(value) {
  return typeof value === "object" && value !== null;
}

function isArray(value) {
  return Array.isArray(value);
}

function isFunction(value) {
  return typeof value === "function";
}

function isNull(value) {
  return value === null;
}

function isUndefined(value) {
  return typeof value === "undefined";
}

function isSymbol(value) {
  return typeof value === "symbol";
}

function isDate(value) {
  return value instanceof Date;
}

function isRegExp(value) {
  return value instanceof RegExp;
}

function isError(value) {
  return value instanceof Error;
}

function isPromise(value) {
  return value instanceof Promise;
}

function isProxy(value) {
  return value instanceof Proxy;
}

function isMap(value) {
  return value instanceof Map;
}

function isSet(value) {
  return value instanceof Set;
} 

function isTypedArray(value) {
  return value instanceof Int8Array ||
    value instanceof Uint8Array ||
    value instanceof Uint8ClampedArray ||
    value instanceof Int16Array ||
    value instanceof Uint16Array ||
    value instanceof Int32Array ||
    value instanceof Uint32Array ||
    value instanceof Float32Array ||
    value instanceof Float64Array;
} 

function isBigInt(value) {
  return typeof value === "bigint";
} 

function isDataView(value) {
  return value instanceof DataView;
}

function isJSON(value) {
  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
}

function isURL(value) {
  try {
    new URL(value);
    return true;
  } catch (error) {
    return false;
  }
}

function isURLSearchParams(value) {
  return value instanceof URLSearchParams;
}

function isFile(value) {
  return value instanceof File;
}

function isBlob(value) {
  return value instanceof Blob;
}
 
module.exports = {
  isString,
  isNumber,
  isBoolean,
  isObject,
  isArray,
  isFunction,
  isNull,
  isUndefined,
  isSymbol,
  isDate,
  isRegExp,
  isError,
  isPromise,
  isProxy,
  isMap,
  isSet,
  isTypedArray,
  isBigInt,
  isDataView,
  isJSON,
  isURL,
  isURLSearchParams,
  isFile,
  isBlob
};
