// let MODE = process.env.REACT_APP_MODE || 'DEVELOPMENT'
// console.log('MODE')
// console.log(process.env.REACT_APP_MODE)
// Ropsten Details
// <MoralisProvider appId="tExjBBJ1s8aHSk1idnOJJOrjJON007ziPVLk88fn" serverUrl="https://xltiotldo06b.usemoralis.com:2053/server">
// Rinkyby Details
//<MoralisProvider appId="SijSgTYh4BzkYWphDDTxtpaASUW2n8ALsss5GM2S" serverUrl="https://2wrtzriiflxd.usemoralis.com:2053/server">
// Eth Mainnet Details
// <MoralisProvider appId="eBgX8zrn8xVXiY0baycBC2ICW9MCah153bbZflyr" serverUrl="https://o5frzwdhepdu.usemoralis.com:2053/server">

const MORALIS_SERVER = {
  //mainnet_AppID: `tNwRRjAA9TwIg40TAu8c3PYCFELFQnKiGJtWvVIp`,
  //mainnet_serverURL: `https://fysfo7qo74zu.usemoralis.com:2053/server`,
  // mainnet_AppID: `Gxt5aS8FpZHnFZHX53dxIBvjxdOuIltLN7x5NlH7`,
  // mainnet_serverURL: `https://cntdhts5tzqw.usemoralis.com:2053/server`,
  mainnet_AppID: `rlJh20MP66AQeucpV6L2vZoyZgeVwtHir7n1v88e`,
  mainnet_serverURL: `https://snavu03jrcte.usemoralis.com:2053/server`,
  ropsten_AppID: `tExjBBJ1s8aHSk1idnOJJOrjJON007ziPVLk88fn`,
  ropsten_serverURL: `https://xltiotldo06b.usemoralis.com:2053/server`,
  rinkyby_AppID: `L97H26Xa0reuD18xHrU1P39U3Q9irLLsWCACP9wK`,
  rinkyby_serverURL: `https://y1su11o4uagq.usemoralis.com:2053/server`,
  //rinkyby_AppID: `pvXzRq7VZz43EKQ5nUCZzrdOx6JBqR46TB8MG3EP`,
  //rinkyby_serverURL: `https://udvyzcwutain.usemoralis.com:2053/server`,
  rinkyby_AppID_old: `SijSgTYh4BzkYWphDDTxtpaASUW2n8ALsss5GM2S`,
  rinkyby_serverURL_old: `https://2wrtzriiflxd.usemoralis.com:2053/server`,
};

let SC_1_JSON_URI = "";
let SC_1_JSON_URI_MORALIS = "";
let SC_1_IMAGE_URI = "";
let SC_3_JSON_URI = "";
let SC_3_JSON_URI_MORALIS = "";
let SC_3_IMAGE_URI = "";
let SC_4_JSON_URI = "";
let SC_4_IMAGE_URI = "";

let ETHERSCAN_BASE_URI = "";

// NETWORK SWITCHER
// NETWORK SWITCHER
// NETWORK SWITCHER

let network = "rinkeby";
// let network = "mainnet";

// NETWORK SWITCHER
// NETWORK SWITCHER
// NETWORK SWITCHER
// NETWORK SWITCHER
let moralis_app_ID = "";
let moralis_Server_URL = "";
let chainID = "";
let moralis_contract_erc721 = "";
let moralis_contract_erc20 = "";
let moralis_contract_minimoose = "";
let moralis_contract_unstaked = "";

let moralis_contract_hideout = "";
let moralis_contract_alphaherd = "";
let moralis_contract_moosetrax = "";
let moralis_contract_heroboxserum = "";
let moralis_contract_superHeroMutantMoose = "";

if (network === "mainnet") {
  moralis_app_ID = MORALIS_SERVER.mainnet_AppID;
  moralis_Server_URL = MORALIS_SERVER.mainnet_serverURL;
  chainID = "eth";
  moralis_contract_erc721 = "0xF63063bB20a03B85Bd08d5C1244AF8bA0aEE1B1F";
  moralis_contract_erc20 = "0xE67BC93813071ffF638fAC69184FcE7342c0f043";
  //moralis_contract_minimoose = "0xE67BC93813071ffF638fAC69184FcE7342c0f043"
  moralis_contract_minimoose = "0x022f47CDAc23Cc94A149BAcB7b19962Ef8A0752c";
  //moralis_contract_unstaked = "0xE67BC93813071ffF638fAC69184FcE7342c0f043"
  moralis_contract_unstaked = "0x548beBAa06b39da65e3e78053fCAE5CC4e5958Be";
  moralis_contract_hideout = "0x1A1B51eA853d24649E7f30CeB2E9aF85Cb04a24a";

  moralis_contract_alphaherd = "0x24A913B00cbC8C3c747B19C7944E4dA26da1130b";

  moralis_contract_moosetrax = "0xFeaf24248e04aC7Ad0Ea6e7e617182cfF429d4e5";
  moralis_contract_heroboxserum = "0x8F71e17b612f3EA9a8Bf7eeB9289654EDCa6d8B7";

  // URI For Smart Collections
  SC_1_JSON_URI =
    "https://ipfs.io/ipfs/QmPKQ4UEPuqUPXJWTsgDUi7mZYWvTrbqAijFA9VbbMxdD1/";
  // SC_1_JSON_URI = "https://ipfs.io/ipfs/QmPKQ4UEPuqUPXJWTsgDUi7mZYWvTrbqAijFA9VbbMxdD1/"
  SC_1_JSON_URI_MORALIS =
    "https://gateway.moralisipfs.com/ipfs/QmPKQ4UEPuqUPXJWTsgDUi7mZYWvTrbqAijFA9VbbMxdD1/";
  SC_1_IMAGE_URI =
    "https://ipfs.io/ipfs/QmYznjJxWYWFciAeoGBhbEgennhf9H66gPdidzRGcFHneG/";
  SC_3_JSON_URI =
    "https://ipfs.io/ipfs/QmZ4wvSvAiXd4WduaUwzXiHXuyr4c4si9ADmETYwWcTjmP/";
  SC_3_JSON_URI_MORALIS =
    "https://gateway.moralisipfs.com/ipfs/QmZ4wvSvAiXd4WduaUwzXiHXuyr4c4si9ADmETYwWcTjmP/";

  SC_3_IMAGE_URI =
    "https://ipfs.io/ipfs/QmebqDNUYBN96Yfobeubp7MC46TeJYpznHWwSgyLGMG8Qv/";
  // SC_3_IMAGE_URI = "https://ipfs.io/ipfs/QmVu1RoKEbbjA67Q5zUF3GKiDcX4A2BXPdPEW6DfEKAyED/"
  SC_4_JSON_URI = "";
  SC_4_IMAGE_URI = "";
  ETHERSCAN_BASE_URI = "https://api.etherscan.io/";
} else if (network === "ropsten") {
  moralis_app_ID = MORALIS_SERVER.ropsten_AppID;
  moralis_Server_URL = MORALIS_SERVER.ropsten_serverURL;
  chainID = "ropsten";
  moralis_contract_erc721 = "";
  moralis_contract_erc20 = "";
  moralis_contract_minimoose = "";
  moralis_contract_unstaked = "";
  moralis_contract_hideout = "";
} else if (network === "rinkeby") {
  moralis_app_ID = MORALIS_SERVER.rinkyby_AppID;
  moralis_Server_URL = MORALIS_SERVER.rinkyby_serverURL;
  chainID = "rinkeby";
  // moralis_contract_erc721 = "0xb1e099bE1F59BCD475f026B563A7D2b11970BdbB"
  // moralis_contract_erc721 = "0xCfd57D4aDa2c693bc7d9C1dCaa3E8C5946769a7b"
  moralis_contract_erc721 = "0xdEDbd2f50b06CA6af7bd93ed7b0d6Ec963513827";
  moralis_contract_erc20 = "0x99698a3D578075c67C671aAed483B4d0E2Bc86fE";
  // moralis_contract_minimoose = "0x9b80b9FB472cDeAE32117C595d5d609f22F86fd5"
  // moralis_contract_minimoose = "0x7c101f09Cf2dCB7C11E979B294CcF0e111d7Cc35"
  // moralis_contract_minimoose = "0x334D1092844eb1e5E68aae8C5568e2232E37c867"
  moralis_contract_minimoose = "0xD5caa151AC50799ecCe83210e55aE7870a0b38Bb";
  //moralis_contract_unstaked = "0x3258593631Cb75Ce3282B04FE4075321417ECefB"
  // moralis_contract_unstaked = "0x7c101f09Cf2dCB7C11E979B294CcF0e111d7Cc35" // New Unstake Contract
  moralis_contract_unstaked = "0xFFB04E08A254a07AA7254cD839889C5483b727Ef"; // New Unstake Contract
  moralis_contract_hideout = "0xaa32d85be329cDe7619666cF4b2C48FEbd6A094c";

  moralis_contract_alphaherd = "0xCBc875e4b1FcEA5b0F4BeE302b54D5ceB7Ba34aE";
  // moralis_contract_moosetrax = "0x2F91e35d43465aBecCcf65EDAC6e09b2F974E844";
  // moralis_contract_moosetrax = "0x755311D22cE150E9401e45f8C0AcC86b05B18011";
  // moralis_contract_moosetrax = "0xa120EAe3D388054ea9C30C692c4A9B5570912481";
  // moralis_contract_moosetrax = "0x6b5D89C1ED1031fA2eCD0F4A075947CEd443C2F6";
  // moralis_contract_moosetrax = "0x9eC9c782597a5357a4ebb12c958468c5BDD97cF0";
  // moralis_contract_moosetrax = "0x993877FB290e68d86ea60d270e89aC6b976b96f3";
  // moralis_contract_moosetrax = "0xe7fc1e7a6AbD9f3a12955c76B02051E364F103d9";

  // moralis_contract_heroboxserum = "0x79124e48e33ad9166FE1E0E7993a14179cbc99CC";
  // moralis_contract_heroboxserum = "0xCC7fA973ba159dB156967698881c787Fde5f00D2";

  // moralis_contract_moosetrax = "0x98E08Ea1CF2C98068195F6ea43F869Fb04401F1A";
  // moralis_contract_heroboxserum = "0xaf6c9b30a9D8E3e0D27721B4B459d9a30dab4857";
  // moralis_contract_superHeroMutantMoose =
  //   "0xfbC11196B2ea3529DadE0Ba744c3821784670ef0";
  moralis_contract_moosetrax = "0xd8f78c67A1314c3d3791908da3378dd1d1cC60EE";
  moralis_contract_heroboxserum = "0xAa4bDA7059D5732897dff429aAdfa89C4CbF2D3C";
  moralis_contract_superHeroMutantMoose =
    "0x9deD5c3734C949176D1153B27C6FC32Ba9d5F448";

  // URI For Smart Collections
  SC_1_JSON_URI =
    "https://ipfs.io/ipfs/QmPKQ4UEPuqUPXJWTsgDUi7mZYWvTrbqAijFA9VbbMxdD1/";
  SC_1_JSON_URI_MORALIS =
    "https://gateway.moralisipfs.com/ipfs/QmPKQ4UEPuqUPXJWTsgDUi7mZYWvTrbqAijFA9VbbMxdD1/";
  SC_1_IMAGE_URI =
    "https://ipfs.io/ipfs/QmYznjJxWYWFciAeoGBhbEgennhf9H66gPdidzRGcFHneG/";
  SC_3_JSON_URI =
    "https://ipfs.io/ipfs/QmZ4wvSvAiXd4WduaUwzXiHXuyr4c4si9ADmETYwWcTjmP/";
  SC_3_JSON_URI_MORALIS =
    "https://gateway.moralisipfs.com/ipfs/QmZ4wvSvAiXd4WduaUwzXiHXuyr4c4si9ADmETYwWcTjmP/";
  // SC_3_IMAGE_URI = "https://ipfs.io/ipfs/QmVu1RoKEbbjA67Q5zUF3GKiDcX4A2BXPdPEW6DfEKAyED/"
  SC_3_IMAGE_URI =
    "https://ipfs.io/ipfs/QmebqDNUYBN96Yfobeubp7MC46TeJYpznHWwSgyLGMG8Qv/";
  SC_4_JSON_URI = "";
  SC_4_IMAGE_URI = "";
  ETHERSCAN_BASE_URI = "https://api-rinkeby.etherscan.io";
}

const URI = {
  SC_1_JSON_URI: SC_1_JSON_URI,
  SC_1_JSON_URI_MORALIS: SC_1_JSON_URI_MORALIS,
  SC_1_IMAGE_URI: SC_1_IMAGE_URI,
  SC_3_JSON_URI: SC_3_JSON_URI,
  SC_3_JSON_URI_MORALIS: SC_3_JSON_URI_MORALIS,
  SC_3_IMAGE_URI: SC_3_IMAGE_URI,
  SC_4_JSON_URI: SC_4_JSON_URI,
  SC_4_IMAGE_URI: SC_4_IMAGE_URI,
  ETHERSCAN_BASE_URI: ETHERSCAN_BASE_URI,
};

const CONFIG = {
  moralis_app_ID: moralis_app_ID,
  moralis_Server_URL: moralis_Server_URL,
  moralis_chain: chainID,
  smart_contract_erc721: moralis_contract_erc721,
  smart_contract_erc20: moralis_contract_erc20,
  smart_contract_minimoose: moralis_contract_minimoose,
  smart_contract_unstaked: moralis_contract_unstaked,
  smart_contract_hideout: moralis_contract_hideout,
  smart_contract_alphaherd: moralis_contract_alphaherd,
  smart_contract_moosetrax: moralis_contract_moosetrax,
  smart_contract_heroboxserum: moralis_contract_heroboxserum,
  smart_contract_superHeroMutantMoose: moralis_contract_superHeroMutantMoose,
  test_serverUrl: "https://0xzjwzdbbkel.usemoralis.com:2053/server",
  test_appId: "TyeNFHSscgGgPcO2e0oDxuzDWo72tLF80MboERhI",
  chainID: chainID,
  URI: URI,
};

export { CONFIG };
