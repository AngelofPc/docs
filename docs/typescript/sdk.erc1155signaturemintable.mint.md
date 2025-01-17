---
slug: /sdk.erc1155signaturemintable.mint
title: Erc1155SignatureMintable.mint property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Erc1155SignatureMintable.mint property

Mint a dynamically generated NFT

## Example

```javascript
// see how to craft a payload to sign in the `generate()` documentation
const signedPayload = contract.erc1155.signature.generate(payload);

// now anyone can mint the NFT
const tx = contract.erc1155.signature.mint(signedPayload);
```

**Signature:**

```typescript
mint: {
        (signedPayload: SignedPayload1155): Promise<TransactionResultWithId<never>>;
        prepare: (signedPayload: SignedPayload1155) => Promise<Transaction<TransactionResultWithId<never>>>;
    };
```

## Remarks

Mint a dynamic NFT with a previously generated signature.
