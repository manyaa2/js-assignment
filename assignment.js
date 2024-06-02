let totalNFTs = 0;
let nfts = [];

function mintNFT(name, description, rarity) {
    let nft = {
        name: name,
        description: description,
        rarity: rarity
    };
    nfts.push(nft); // Storing the NFT object in the array
    totalNFTs++; // Incrementing the total number of NFTs
    return nft;
}

function listNFTs() {
    nfts.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Rarity: " + nft.rarity);
        console.log("-----------------------------");
    });
}

function getTotalSupply() {
    return totalNFTs;
}

// Mint some NFTs
let nft1 = mintNFT("NFT 1", "This is the first NFT", "Common");
let nft2 = mintNFT("NFT 2", "This is the second NFT", "Rare");

// List all NFTs
listNFTs();

// Print total number of NFTs
console.log("Total number of NFTs: " + getTotalSupply());
