---
slug: /sdk.erc20burnable.from
title: Erc20Burnable.from property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Erc20Burnable.from property

Burn Tokens

## Example

```javascript
// Address of the wallet sending the tokens
const holderAddress = "{{wallet_address}}";

// The amount of this token you want to burn
const amount = 1.2;

await contract.token.burn.from(holderAddress, amount);
```

**Signature:**

```typescript
from: {
        (holder: string, amount: string | number): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (holder: string, amount: string | number) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
```

## Remarks

Burn tokens held by the specified wallet
