import { Web3PluginBase } from "web3";
import { ApiResponse } from "./interfaces";

export class DappRadarPlugin extends Web3PluginBase {
  public pluginNamespace = "customRpcMethods";

  public async drDappSearch(): Promise<ApiResponse> {
    return this.requestManager.send({
      method: "dr_dappSearch",
      params: ["", "https://opensea.io", ""],
    });
  }
}

declare module "web3" {
  interface Web3Context {
    customRpcMethods: DappRadarPlugin;
  }
}