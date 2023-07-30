// src/utils/singleCall.ts
var singleCall_default = async (provider, snsData, func, ...data) => func.raw(snsData, ...data).then((rawData) => provider.call({ ...rawData, ccipReadEnabled: true })).catch(() => null).then((ret) => func.decode(snsData, ret, ...data));
export {
  singleCall_default as default
};
