async function main() {
  const ScribbleStore = await ethers.getContractFactory("ScribbleStore");
  const store = await ScribbleStore.deploy();
  await store.deployed();
  console.log(`ScribbleStore deployed to: ${store.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
