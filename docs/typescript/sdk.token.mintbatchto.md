---
slug: /sdk.token.mintbatchto
title: Token.mintBatchTo property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Token.mintBatchTo property

Mint Tokens To Many Wallets

## Example

```javascript
// Data of the tokens you want to mint
const data = [
  {
    toAddress: "{{wallet_address}}", // Address to mint tokens to
    amount: 0.2, // How many tokens to mint to specified address
  },
  {
    toAddress: "0x...",
    amount: 1.4,
  },
];

await contract.mintBatchTo(data);
```

**Signature:**

```typescript
mintBatchTo: {
        (args: {
            amount: string | number;
            toAddress: string;
        }[]): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (args: {
            amount: string | number;
            toAddress: string;
        }[]) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
```

## Remarks

Mint tokens to many wallets in one transaction.
