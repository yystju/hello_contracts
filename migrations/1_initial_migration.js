const supperMaket = artifacts.require("supperMaket");
const addressController = artifacts.require("addressController");
const NFToken = artifacts.require("NFToken");
const NFTMdata = artifacts.require("NFTMdata");
const NFTBox = artifacts.require("NFTBox");
const Commodity = artifacts.require("Commodity");

module.exports = async function (deployer, network, accounts) {
    console.log(`[1_initial_migration]`);

    const account = accounts[0];

    console.log(`account : ${account}`);

    await deployer.deploy(addressController, account);
    const controller = await addressController.deployed();

    console.log(`controller : ${controller.address}`);

    await deployer.deploy(Commodity, controller.address);
    const commodity = await Commodity.deployed();

    console.log(`commodity : ${commodity.address}`);

    await deployer.deploy(NFToken);
    const nftoken = await NFToken.deployed();

    console.log(`nftoken : ${nftoken.address}`);

    await deployer.deploy(supperMaket, controller.address);
    const sm = await supperMaket.deployed();

    console.log(`sm : ${sm.address}`);

    await controller.addContract("COM", commodity.address);
    await controller.addContract("SNFT", nftoken.address);
    await controller.addContract("FEETO", sm.address);
};
