import { Web3PluginBase } from "web3";
import { ApiResponse, DappSearchParams } from "./interfaces";

export class DappRadarPlugin extends Web3PluginBase {
  public pluginNamespace = "customRpcMethods";

  public async drDappSearch({
    smartContract,
    website,
    name,
  }: DappSearchParams): Promise<ApiResponse> {
    return this.requestManager.send({
      method: "dr_dappSearch",
      params: [smartContract, website, name],
    });
  }
}

declare module "web3" {
  interface Web3Context {
    customRpcMethods: DappRadarPlugin;
  }
}
