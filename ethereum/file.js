import web3 from './web3';
import compiledFactory from './build/CampaignFactory.json';
//create a instance of a deployed contract by providing contracts ABI and deployed contracts address
const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  '0x3cAC8B9bF7c3FEFD7fbC02645b79B3B6bbB7C98A'
);

export default instance;
