---
slug: /sdk.erc1155burnable.tokens
title: Erc1155Burnable.tokens() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Erc1155Burnable.tokens() method

Burn a specified amount of a NFTs

## Example

```javascript
// The token ID to burn NFTs of
const tokenId = 0;
// The amount of the NFT you want to burn
const amount = 2;

const result = await contract.edition.burn.tokens(tokenId, amount);
```

**Signature:**

```typescript
tokens(tokenId: BigNumberish, amount: BigNumberish): Promise<TransactionResult>;
```

## Parameters

| Parameter | Type         | Description          |
| --------- | ------------ | -------------------- |
| tokenId   | BigNumberish | the token Id to burn |
| amount    | BigNumberish | amount to burn       |

**Returns:**

Promise&lt;[TransactionResult](./sdk.transactionresult.md)&gt;

## Remarks

Burn the specified NFTs from the connected wallet