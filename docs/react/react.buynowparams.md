---
slug: /react.buynowparams
title: BuyNowParams type
hide_title: true
displayed_sidebar: react
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## BuyNowParams type

**Signature:**

```typescript
export type BuyNowParams<TListingType = ListingType> = TListingType extends ListingType.Direct ? {
    id: BigNumberish;
    type: ListingType.Direct;
    buyAmount: BigNumberish;
    buyForWallet?: WalletAddress;
} : {
    id: BigNumberish;
    type: ListingType.Auction;
};
```
**References:** [WalletAddress](./react.walletaddress.md)