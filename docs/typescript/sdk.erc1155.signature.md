---
slug: /sdk.erc1155.signature
title: Erc1155.signature property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Erc1155.signature property

Mint with signature

## Example

```javascript
// see how to craft a payload to sign in the `contract.erc1155.signature.generate()` documentation
const signedPayload = contract.erc1155.signature().generate(payload);

// now anyone can mint the NFT
const tx = contract.erc1155.signature.mint(signedPayload);
const receipt = tx.receipt; // the mint transaction receipt
const mintedId = tx.id; // the id of the NFT minted
```

**Signature:**

```typescript
get signature(): Erc1155SignatureMintable;
```

## Remarks

Generate dynamic NFTs with your own signature, and let others mint them using that signature.
