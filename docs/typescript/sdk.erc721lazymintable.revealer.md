---
slug: /sdk.erc721lazymintable.revealer
title: Erc721LazyMintable.revealer property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Erc721LazyMintable.revealer property

Delayed reveal

## Example

```javascript
// the real NFTs, these will be encrypted until you reveal them
const realNFTs = [
  {
    name: "Common NFT #1",
    description: "Common NFT, one of many.",
    image: fs.readFileSync("path/to/image.png"),
  },
  {
    name: "Super Rare NFT #2",
    description: "You got a Super Rare NFT!",
    image: fs.readFileSync("path/to/image.png"),
  },
];
// A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
const placeholderNFT = {
  name: "Hidden NFT",
  description: "Will be revealed next week!",
};
// Create and encrypt the NFTs
await contract.nft.drop.revealer.createDelayedRevealBatch(
  placeholderNFT,
  realNFTs,
  "my secret password",
);
// Whenever you're ready, reveal your NFTs at any time
const batchId = 0; // the batch to reveal
await contract.erc721.revealer.reveal(batchId, "my secret password");
```

**Signature:**

```typescript
revealer: DelayedReveal<BaseDelayedRevealERC721> | undefined;
```

## Remarks

Create a batch of encrypted NFTs that can be revealed at a later time.