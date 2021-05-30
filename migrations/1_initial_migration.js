const supperMaket = artifacts.require("supperMaket");
const addressController = artifacts.require("addressController");
const NFToken = artifacts.require("NFToken");
const NFTMdata = artifacts.require("NFTMdata");
const NFTBox = artifacts.require("NFTBox");
const Commodity = artifacts.require("Commodity");

module.exports = async function (deployer) {
    console.log(`supperMaket : ${supperMaket}`);
    const controller = await deployer.deploy(addressController);

    await controller.deployed();

    await deployer.deploy(supperMaket);
};
