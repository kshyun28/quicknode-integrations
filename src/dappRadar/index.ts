import 'dotenv/config'
import Web3 from "web3";
import { DappRadarPlugin } from "./DappRadarPlugin";

(async () => {
  const web3 = new Web3(process.env.QUICKNODE_HTTP_ENDPOINT);

  web3.registerPlugin(new DappRadarPlugin());

  web3.customRpcMethods
    .drDappSearch()
    .then(data => console.log(JSON.stringify(data)))
    .catch(console.error);
})();
