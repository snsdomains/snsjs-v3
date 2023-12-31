"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var contracts_exports = {};
__export(contracts_exports, {
  default: () => ContractManager
});
module.exports = __toCommonJS(contracts_exports);
var import_baseRegistrar = __toESM(require("./baseRegistrar"));
var import_ethRegistrarController = __toESM(require("./ethRegistrarController"));
var import_multicall = __toESM(require("./multicall"));
var import_nameWrapper = __toESM(require("./nameWrapper"));
var import_dnsRegistrar = __toESM(require("./dnsRegistrar"));
var import_publicResolver = __toESM(require("./publicResolver"));
var import_registry = __toESM(require("./registry"));
var import_reverseRegistrar = __toESM(require("./reverseRegistrar"));
var import_universalResolver = __toESM(require("./universalResolver"));
var import_bulkRenewal = __toESM(require("./bulkRenewal"));
class ContractManager {
  constructor(provider, fetchAddress) {
    this.generateContractGetter = (name, func) => {
      return async (passedProvider, address) => {
        const inputAddress = address || this.fetchAddress(name);
        const provider = passedProvider || this.provider;
        return func(provider, inputAddress);
      };
    };
    this.getPublicResolver = this.generateContractGetter(
      "PublicResolver",
      import_publicResolver.default
    );
    this.getUniversalResolver = this.generateContractGetter(
      "UniversalResolver",
      import_universalResolver.default
    );
    this.getRegistry = this.generateContractGetter(
      "SNSRegistry",
      import_registry.default
    );
    this.getReverseRegistrar = this.generateContractGetter(
      "ReverseRegistrar",
      import_reverseRegistrar.default
    );
    this.getNameWrapper = this.generateContractGetter(
      "NameWrapper",
      import_nameWrapper.default
    );
    this.getDNSRegistrar = this.generateContractGetter(
      "DNSRegistrar",
      import_dnsRegistrar.default
    );
    this.getBaseRegistrar = this.generateContractGetter(
      "BaseRegistrarImplementation",
      import_baseRegistrar.default
    );
    this.getEthRegistrarController = this.generateContractGetter(
      "ETHRegistrarController",
      import_ethRegistrarController.default
    );
    this.getMulticall = this.generateContractGetter("Multicall", import_multicall.default);
    this.getBulkRenewal = this.generateContractGetter(
      "BulkRenewal",
      import_bulkRenewal.default
    );
    this.provider = provider;
    this.fetchAddress = fetchAddress;
  }
}
