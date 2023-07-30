// src/contracts/registry.ts
import { SNSRegistry__factory } from "../generated/factories/SNSRegistry__factory.mjs";
var registry_default = (provider, address) => SNSRegistry__factory.connect(address, provider);
export {
  registry_default as default
};
