---
slug: /sdk.erc1155.burnbatchfrom
title: Erc1155.burnBatchFrom property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Erc1155.burnBatchFrom property

Burn a batch of NFTs from a specific wallet

## Example

```javascript
// The address of the wallet to burn NFTS from
const account = "0x...";
// The token IDs to burn NFTs of
const tokenIds = [0, 1];
// The amounts of each NFT you want to burn
const amounts = [2, 2];

const result = await contract.erc1155.burnBatchFrom(account, tokenIds, amounts);
```

**Signature:**

```typescript
burnBatchFrom: {
        (account: string, tokenIds: BigNumberish[], amounts: BigNumberish[]): Promise<Omit<{
            receipt: ethers.providers.TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (account: string, tokenIds: BigNumberish[], amounts: BigNumberish[]) => Promise<Transaction<Omit<{
            receipt: ethers.providers.TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
```

## Remarks

Burn the batch NFTs from the specified wallet
