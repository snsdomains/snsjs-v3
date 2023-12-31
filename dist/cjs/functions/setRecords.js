"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var setRecords_exports = {};
__export(setRecords_exports, {
  default: () => setRecords_default
});
module.exports = __toCommonJS(setRecords_exports);
var import_normalise = require("../utils/normalise");
var import_recordHelpers = require("../utils/recordHelpers");
async function setRecords_default({
  contracts,
  provider,
  getResolver,
  signer
}, name, {
  records,
  resolverAddress
}) {
  var _a;
  if (!name.includes(".")) {
    throw new Error("Input is not an SNS name");
  }
  let resolverToUse;
  if (resolverAddress) {
    resolverToUse = resolverAddress;
  } else {
    resolverToUse = await getResolver(name);
  }
  if (!resolverToUse) {
    throw new Error("No resolver found for input address");
  }
  const resolver = (_a = await (contracts == null ? void 0 : contracts.getPublicResolver(provider, resolverToUse))) == null ? void 0 : _a.connect(signer);
  const hash = (0, import_normalise.namehash)(name);
  const calls = (0, import_recordHelpers.generateRecordCallArray)(hash, records, resolver);
  return resolver.populateTransaction.multicall(calls);
}
