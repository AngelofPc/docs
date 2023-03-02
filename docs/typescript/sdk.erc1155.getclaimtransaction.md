---
slug: /sdk.erc1155.getclaimtransaction
title: Erc1155.getClaimTransaction() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Erc1155.getClaimTransaction() method

> Warning: This API is now obsolete.
>
> Use `contract.erc1155.claim.prepare(...args)` instead

Construct a claim transaction without executing it. This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.

**Signature:**

```typescript
getClaimTransaction(destinationAddress: string, tokenId: BigNumberish, quantity: BigNumberish, options?: ClaimOptions): Promise<Transaction>;
```

## Parameters

| Parameter          | Type                                  | Description                                                                  |
| ------------------ | ------------------------------------- | ---------------------------------------------------------------------------- |
| destinationAddress | string                                | Address you want to send the token to                                        |
| tokenId            | BigNumberish                          | Id of the token you want to claim                                            |
| quantity           | BigNumberish                          | Quantity of the tokens you want to claim                                     |
| options            | [ClaimOptions](./sdk.claimoptions.md) | _(Optional)_ Optional claim verification data (e.g. price, currency, etc...) |

**Returns:**

Promise&lt;[Transaction](./sdk.transaction.md)&gt;