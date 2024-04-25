import { IExecDataProtector } from "@iexec/dataprotector";

const web3Provider = (window as any).ethereum;
const dataProtector = new IExecDataProtector(web3Provider);

const protectData = async (data: string) => {
  const protectedData = await dataProtector.protectData({
    data: {
      email: data
    },
    name: "ETHSight email"
  });
  return protectedData;
}

const getProtectedData = async (address : string) => {
  const listProtectedData = await dataProtector.fetchProtectedData({
    owner: address,
  })
  return listProtectedData;
}

export { protectData, getProtectedData };
