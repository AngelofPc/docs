---
slug: /sdk.erc1155.getminttransaction
title: Erc1155.getMintTransaction() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Erc1155.getMintTransaction() method

> Warning: This API is now obsolete.
>
> Use `contract.erc1155.mint.prepare(...args)` instead

Construct a mint transaction without executing it. This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.

**Signature:**

```typescript
getMintTransaction(receiver: string, metadataWithSupply: EditionMetadataOrUri): Promise<Transaction>;
```

## Parameters

| Parameter          | Type                                                  | Description                              |
| ------------------ | ----------------------------------------------------- | ---------------------------------------- |
| receiver           | string                                                | Address you want to send the token to    |
| metadataWithSupply | [EditionMetadataOrUri](./sdk.editionmetadataoruri.md) | The metadata of the NFT you want to mint |

**Returns:**

Promise&lt;[Transaction](./sdk.transaction.md)&gt;
