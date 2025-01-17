---
slug: /sdk.tokendrop.claim
title: TokenDrop.claim property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# TokenDrop.claim property

Claim a certain amount of tokens

**Signature:**

```typescript
claim: {
        (amount: string | number, checkERC20Allowance?: any): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (amount: string | number, checkERC20Allowance?: any) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
```

## Remarks

See [TokenDrop.claimTo](./sdk.tokendrop.claimto.md)
