require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note still assume give private army general'; 
let testAccounts = [
"0xbb064ff00174b57bedf5b34eaaef5f777ef441b0d6488bf5e91ed6a9af8320c3",
"0xe3bdbabf5a735ea0308ac6317094135acde4cca408c23edf4ef4adc2a8fa7737",
"0x825f7ab44a6a459cffba0a82a6a859b6c1c14df6e7b715ab5ec45d4c71641fc3",
"0x2d9ffb20c2e233c53d5c935a10fd6e0f687a5c76188c9733e1cf76d6f458ae83",
"0x0910d767151ef4383d4ef948b1880d22c53a144697fe8047940153460d83b0c2",
"0x17d97f45c8392169a9e04f74ba46a8dc78b013d90617dbfb0ecab6fa6881da02",
"0x29f2ba7d7a75cd8ed5c5a55b4a2cc7ea44d9ccf39b5a261b17964d5d6a5e99a2",
"0x58ae9e391fb6cc65d4c74a3cadf830d7b642d71fc7c65d49496470d0428c1b53",
"0x3ec63537d47319316b1683cc4bb00f3d347c7ed92390d092d0212f170e36efee",
"0xd0df57b4e17fe8e94848539ee3a77286ec5786e398b1f402a65a8ca21495c2c8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


