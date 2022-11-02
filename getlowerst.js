import axios from 'axios';
import web3 from 'web3';

const options = {
  method: 'GET',
  url: 'https://deep-index.moralis.io/api/v2/nft/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/lowestprice',
  params: {chain: 'eth', marketplace: 'opensea'},
  headers: {accept: 'application/json', 'X-API-Key': 'test'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    const BAYCprice = response.data.price;
    const numberss = web3.utils.fromWei(BAYCprice,'ether');

    console.log("Balance : " + numberss + " ETH ");


  })
  .catch(function (error) {
    console.error(error);
  });