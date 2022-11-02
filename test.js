import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://deep-index.moralis.io/api/v2/0xa77bd177A37DbCf25C4a23C8357372230e371e07/nft/collections',
  params: {chain: 'eth'},
  headers: {accept: 'application/json', 'X-API-Key': 'test'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });