// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

//return balance of a given address
async function getBalance(address){
  const balanceBigInt=await hre.waffle.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

//logs the ether balances for a list of addresses
async function printBalances(addresses)
{
  let idx=0;
  for(const address of addresses){
    console.log(`Address ${idx} balance: `, await getBalance(address));
    idx++;
  }
}

//logs the memos stored on-chain from coffee purchase
async function printMemos 
{
  for(const memo of memos)
  {
    const timestamp=memo.timestamp;
    const tipper=memo.name;
    const tipperAddress=memo.from;
    const message=memo.message;
    console.log(`At 4 ${timestamp},${tipper} (${tipperAddress}) said: "${message}"`);
    
  }
}
async function main() {
  //const [owner,tipper, tipper2, tipper3]
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
