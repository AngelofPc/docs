---
slug: /sdk.signaturedrop.totalclaimedsupply
title: SignatureDrop.totalClaimedSupply() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# SignatureDrop.totalClaimedSupply() method

Get the claimed supply

## Example

```javascript
const claimedNFTCount = await contract.totalClaimedSupply();
console.log(`NFTs claimed so far: ${claimedNFTCount}`);
```

**Signature:**

```typescript
totalClaimedSupply(): Promise<BigNumber>;
```

**Returns:**

Promise&lt;BigNumber&gt;

the claimed supply

## Remarks

Get the number of claimed NFTs in this Drop.

\*
