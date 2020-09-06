const { readFileSync } = require("fs");
const test = require("ava");
const isAuxXML = require("./index");

test("identifying .aux.xml string", (t) => {
  const text = readFileSync("./data/test.png.aux.xml", "utf-8");
  t.true(isAuxXML(text));
});

test("identifying .aux.xml files", (t) => {
  const b = readFileSync("./data/test.png.aux.xml");
  const ab = b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
  t.true(isAuxXML(ab));
  t.true(isAuxXML(new Uint8Array(ab)));
  t.true(isAuxXML(new DataView(ab)));
});

test("identifying jpg file as not .aux.xml", (t) => {
  const b = readFileSync("./data/flower.jpg");
  const ab = b.buffer;
  t.false(isAuxXML(b));
  t.false(isAuxXML(ab));
  t.false(isAuxXML(new Uint8Array(ab)));
  t.false(isAuxXML(new DataView(ab)));
});
