import { Web3PluginBase } from "web3";
import { ApiResponse, DappSearchParams } from "./interfaces";

// Documentation: https://docs.web3js.org/guides/advanced/support_additional_rpc_methods/
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
