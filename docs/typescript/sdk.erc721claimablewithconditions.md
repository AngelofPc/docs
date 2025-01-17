---
slug: /sdk.erc721claimablewithconditions
title: Erc721ClaimableWithConditions class
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Erc721ClaimableWithConditions class

Configure and claim ERC721 NFTs

## Example

```javascript
const contract = await sdk.getContract("{{contract_address}}");
await contract.erc721.claim(quantity);
await contract.erc721.claimConditions.getActive();
```

## Constructors

| Constructor                                                                                             | Modifiers | Description                                                                       |
| ------------------------------------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------- |
| [(constructor)(erc721, contractWrapper, storage)](./sdk.erc721claimablewithconditions._constructor_.md) |           | Constructs a new instance of the <code>Erc721ClaimableWithConditions</code> class |

## Properties

| Property                                                          | Modifiers | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Description                            |
| ----------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [conditions](./sdk.erc721claimablewithconditions.conditions.md)   |           | [DropClaimConditions](./sdk.dropclaimconditions.md)&lt;BaseClaimConditionERC721&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                | Configure claim conditions             |
| [featureName](./sdk.erc721claimablewithconditions.featurename.md) |           | "ERC721ClaimConditionsV2"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                        |
| [to](./sdk.erc721claimablewithconditions.to.md)                   |           | { (destinationAddress: string, quantity: BigNumberish, options?: [ClaimOptions](./sdk.claimoptions.md) &#124; undefined): Promise&lt;[TransactionResultWithId](./sdk.transactionresultwithid.md)&lt;[NFT](./sdk.nft.md)&gt;\[\]&gt;; prepare: (destinationAddress: string, quantity: BigNumberish, options?: [ClaimOptions](./sdk.claimoptions.md) &#124; undefined) =&gt; Promise&lt;[Transaction](./sdk.transaction.md)&lt;[TransactionResultWithId](./sdk.transactionresultwithid.md)&lt;[NFT](./sdk.nft.md)&gt;\[\]&gt;&gt;; } | Claim unique NFTs to a specific Wallet |

**Signature:**

```typescript
export declare class Erc721ClaimableWithConditions implements DetectableFeature
```

**Implements:** DetectableFeature

## Remarks

Manage claim phases and claim ERC721 NFTs that have been lazily minted.
