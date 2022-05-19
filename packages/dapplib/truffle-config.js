require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success street royal saddle attitude grace flower army gasp'; 
let testAccounts = [
"0x202b11200a19aa1ac42d46593757154220266dde2679bc9da99e2ff4a06c456e",
"0xc9116daffe954ab3af3e23e85cdaea39c46a0ff9ac4372c298afb2b74ec2f7c7",
"0x78447fb2dc8e56408bde6e6cabed581ef0d83b849e4b892b713b343a9cb0c6a7",
"0x373ff4eb24915f934786b754d84020db76c9b8871d4c95ec92d04abc0415d0bd",
"0x2dd4092474ed76cfa09a9f6883f7d99176d069e4902c92c62df037ff679df313",
"0xd44ac5cfb11034ad8b65e176f63ce00b2e2e7f07502516c3f08b4063298d4a8d",
"0xb6ff3cb0fcebd8121540e1345192d23efe65a0f79ea2bf7659912c3db0936de6",
"0x42505aa0f627725d2e8c8ed5ae47f3a75ec57c4512f78c72404cdd374f2d2c05",
"0xb42158271b4322eb22e3c4d96b24ff7c9499df5382db7b3465387be1988e2eba",
"0xa0f5140dafd09ad6dd092c69ea5686067beec230ac193cf143ea7931b3c1753b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

