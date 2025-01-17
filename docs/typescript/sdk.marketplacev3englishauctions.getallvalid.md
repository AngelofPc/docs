---
slug: /sdk.marketplacev3englishauctions.getallvalid
title: MarketplaceV3EnglishAuctions.getAllValid() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# MarketplaceV3EnglishAuctions.getAllValid() method

Get all valid english auctions

## Example

```javascript
const auctions = await contract.englishAuctions.getAllValid();
```

**Signature:**

```typescript
getAllValid(filter?: MarketplaceFilter): Promise<EnglishAuction[]>;
```

## Parameters

| Parameter | Type                                            | Description                             |
| --------- | ----------------------------------------------- | --------------------------------------- |
| filter    | [MarketplaceFilter](./sdk.marketplacefilter.md) | _(Optional)_ optional filter parameters |

**Returns:**

Promise&lt;[EnglishAuction](./sdk.englishauction.md)\[\]&gt;

the Auction object array
