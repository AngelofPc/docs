---
slug: /sdk.editiondrop.claimto
title: EditionDrop.claimTo property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# EditionDrop.claimTo property

Claim NFTs to a specific Wallet

## Example

```javascript
const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
const tokenId = 0; // the id of the NFT you want to claim
const quantity = 1; // how many NFTs you want to claim

const tx = await contract.claimTo(address, tokenId, quantity);
const receipt = tx.receipt; // the transaction receipt
```

**Signature:**

```typescript
claimTo: {
        (destinationAddress: string, tokenId: BigNumberish, quantity: BigNumberish, checkERC20Allowance?: any): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (destinationAddress: string, tokenId: BigNumberish, quantity: BigNumberish, checkERC20Allowance?: any) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
```

## Remarks

Let the specified wallet claim NFTs.
