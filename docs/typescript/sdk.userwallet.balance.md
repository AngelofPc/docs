---
slug: /sdk.userwallet.balance
title: UserWallet.balance() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# UserWallet.balance() method

Fetch the native or ERC20 token balance of this wallet

## Example

```javascript
// native currency balance
const balance = await sdk.wallet.balance();
// ERC20 token balance
const erc20balance = await sdk.wallet.balance(tokenContractAddress);
```

**Signature:**

```typescript
balance(currencyAddress?: string): Promise<CurrencyValue>;
```

## Parameters

| Parameter       | Type   | Description  |
| --------------- | ------ | ------------ |
| currencyAddress | string | _(Optional)_ |

**Returns:**

Promise&lt;CurrencyValue&gt;
