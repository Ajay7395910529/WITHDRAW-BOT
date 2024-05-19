curl https://polygon-mainnet.infura.io/v3/10057266c359447a817a5ec91e754a60
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
npm i node-fetch
import fetch from 'node-fetch';

fetch("https://polygon-mainnet.infura.io/v3/10057266c359447a817a5ec91e754a60", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    jsonrpc: "2.0",
    method: "eth_blockNumber",
    params: [],
    id: 1
  })
})
.then(response =>
  response.json()
)
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});
node index.js
