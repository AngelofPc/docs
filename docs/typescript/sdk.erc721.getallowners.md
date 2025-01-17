---
slug: /sdk.erc721.getallowners
title: Erc721.getAllOwners() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Erc721.getAllOwners() method

Get all NFT owners

## Example

```javascript
const owners = await contract.erc721.getAllOwners();
console.log(owners);
```

**Signature:**

```typescript
getAllOwners(): Promise<{
        tokenId: number;
        owner: string;
    }[]>;
```

**Returns:**

Promise&lt;{ tokenId: number; owner: string; }\[\]&gt;

an array of token ids and owners
