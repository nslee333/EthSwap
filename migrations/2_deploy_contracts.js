const Token = artifacts.require("Token");


const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {
    //Deploy Token.
    deployer.deploy(Token);
    const token = await Token.deployed()

    //Deploy EthSwap.
    deployer.deploy(EthSwap)
    const EthSwap = await EthSwap.deployed()

    //Transfer all tokens to EthSwap. (1 Million)
    await token.transfer(EthSwap.address, "1000000000000000000000000")
};
