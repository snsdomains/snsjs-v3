// src/contracts/getContractAddress.ts
var addresses = {
  BaseRegistrarImplementation: {
    "1": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
    "3": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
    "4": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
    "5": "0x1EA5a7b682Bc46d15aF8352e354aaEDe5f6932b0"
  },
  DNSRegistrar: {
    "1": "0x58774Bb8acD458A640aF0B88238369A167546ef2",
    "3": "0xdB328BA5FEcb432AF325Ca59E3778441eF5aa14F",
    "5": "0xf5B0634E400010C338787512c6462F1fA77AfE5f"
  },
  ETHRegistrarController: {
    "1": "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5",
    "3": "0xa5627AB7Ae47063B533622C34FEBDb52d3281dF8",
    "4": "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5",
    "5": "0xF7d06E919E6a113fBCCC272261534eC09be392e8"
  },
  Multicall: "0xcA11bde05977b3631167028862bE2a173976CA11",
  NameWrapper: {
    "1": "0x0000000000000000000000000000000000000000",
    "3": "0xF82155e2a43Be0871821E9654Fc8Ae894FB8307C",
    "4": "0x0000000000000000000000000000000000000000",
    "5": "0xA7Be7d2ecD14ae520E2Ab7521A7F8ec4C22A368A"
  },
  PublicResolver: {
    "1": "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41",
    "3": "0x13F0659Ee6bb7484C884FEeFb7F75C93951ef837",
    "5": "0xAf334f70f6B8bcE8FD6F25930AD6DE97115C21Ac"
  },
  SNSRegistry: {
    "1": "0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e",
    "3": "0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e",
    "4": "0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e",
    "5": "0xC449ff43A7e3FAe2d2Fb7c81f8A2C491E9B33b7b"
  },
  ReverseRegistrar: {
    "1": "0x084b1c3C81545d370f3634392De611CaaBFf8148",
    "3": "0x806246b52f8cB61655d3038c58D2f63Aa55d4edE",
    "5": "0xf3dA15156E172c2eC1Bd782e07138d8278461E4E"
  },
  UniversalResolver: {
    "1": "0x74E20Bd2A1fE0cdbe45b9A1d89cb7e0a45b36376",
    "3": "0x74e20bd2a1fe0cdbe45b9a1d89cb7e0a45b36376",
    "4": "0x74e20bd2a1fe0cdbe45b9a1d89cb7e0a45b36376",
    "5": "0x159bd8471d0c334a7d76d9bB41184d1038ff7beD"
  },
  BulkRenewal: {
    "1": "0xfF252725f6122A92551A5FA9a6b6bf10eb0Be035",
    "3": "0x051b02245D826757EfaF5C6209D4D79FB39FBC45",
    "5": "0x892599afD77EA942c35ff1bbF7acC533C329B04B"
  }
};
var getContractAddress = (networkId) => (contractName) => {
  try {
    return typeof addresses[contractName] === "string" ? addresses[contractName] : addresses[contractName][networkId];
  } catch {
    throw new Error(
      `No address for contract ${contractName} on network ${networkId}`
    );
  }
};
export {
  getContractAddress
};
