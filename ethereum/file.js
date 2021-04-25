import web3 from './web3';
import compiledFactory from './build/CampaignFactory.json';
//create a instance of a deployed contract by providing contracts ABI and deployed contracts address
const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  '0xA87F0cF9659Fad89b06Dd6EA4E72E3699F485569'
);

export default instance;
