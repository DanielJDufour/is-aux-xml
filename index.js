const getByte = require("get-byte");

module.exports = function (data, debug) {
  if (debug) console.log("data:", data);

  const length =
    data.length !== undefined
      ? data.length
      : data.byteLength !== undefined
      ? data.byteLength
      : null;
  if (debug) console.log("length:", length);

  if (typeof data === "string") {
    const str = data.trim().toLowerCase();
    return (
      length > 4 && (str.startsWith("<pamdataset") || str.endsWith(".aux.xml"))
    );
  } else {
    if (length < 8) {
      return false;
    }

    return (
      getByte(data, 0) === 60 && // <
      (getByte(data, 1) === 80 || getByte(data, 1) === 112) && // P or p
      (getByte(data, 2) === 65 || getByte(data, 2) === 97) && // A or a
      (getByte(data, 3) === 77 || getByte(data, 3) === 109) && // M or m
      (getByte(data, 4) === 68 || getByte(data, 4) === 100) && // D or d
      getByte(data, 5) === 97 &&
      getByte(data, 6) === 116 &&
      getByte(data, 7) === 97 &&
      getByte(data, 8) === 115 &&
      getByte(data, 9) === 101 &&
      getByte(data, 10) === 116
    );
  }
};
