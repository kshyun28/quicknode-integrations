import 'dotenv/config';
import { Connection } from '@solana/web3.js';

(async () => {
  const connection = new Connection(process.env.QUICKNODE_HTTP_ENDPOINT!);

  try {
    // Documentation for available RPC methods: https://sns.guide/sns-quicknode/index.html
    const result = await sendCustomRpcMethod(connection, 'sns_getDomainRecordKey', ['bonfida.sol', 'github']);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();

async function sendCustomRpcMethod(connection: Connection, methodName: string, params: any[]): Promise<any> {
  // @ts-ignore Type currently unavailable: https://github.com/solana-labs/solana-web3.js/issues/1740
  return connection._rpcRequest(methodName, params);
}