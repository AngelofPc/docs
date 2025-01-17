---
slug: /sdk.erc721supply
title: Erc721Supply class
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Erc721Supply class

List ERC721 NFTs

## Example

```javascript
const contract = await sdk.getContract("{{contract_address}}");
const nfts = await contract.nft.query.all();
```

## Constructors

| Constructor                                                                   | Modifiers | Description                                                      |
| ----------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------- |
| [(constructor)(erc721, contractWrapper)](./sdk.erc721supply._constructor_.md) |           | Constructs a new instance of the <code>Erc721Supply</code> class |

## Properties

| Property                                         | Modifiers | Type                                                           | Description |
| ------------------------------------------------ | --------- | -------------------------------------------------------------- | ----------- |
| [featureName](./sdk.erc721supply.featurename.md) |           | "ERC721Supply"                                                 |             |
| [owned](./sdk.erc721supply.owned.md)             |           | [Erc721Enumerable](./sdk.erc721enumerable.md) &#124; undefined |             |

## Methods

| Method                                                                   | Modifiers | Description                                                          |
| ------------------------------------------------------------------------ | --------- | -------------------------------------------------------------------- |
| [all(queryParams)](./sdk.erc721supply.all.md)                            |           | Get all NFTs                                                         |
| [allOwners()](./sdk.erc721supply.allowners.md)                           |           | Return all the owners of each token id in this contract              |
| [totalCirculatingSupply()](./sdk.erc721supply.totalcirculatingsupply.md) |           | Get the number of NFTs of this contract currently owned by end users |
| [totalCount()](./sdk.erc721supply.totalcount.md)                         |           | Get the number of NFTs minted                                        |

**Signature:**

```typescript
export declare class Erc721Supply implements DetectableFeature
```

**Implements:** DetectableFeature

## Remarks

Easily list all the NFTs in a ERC721 contract.
