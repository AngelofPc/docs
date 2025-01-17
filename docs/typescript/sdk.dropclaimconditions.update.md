---
slug: /sdk.dropclaimconditions.update
title: DropClaimConditions.update property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# DropClaimConditions.update property

Update a single claim condition with new data.

**Signature:**

```typescript
update: {
        (index: number, claimConditionInput: {
            maxClaimableSupply?: string | number | undefined;
            metadata?: {
                [x: string]: unknown;
                name?: string | undefined;
            } | undefined;
            startTime?: Date | undefined;
            price?: string | number | undefined;
            currencyAddress?: string | undefined;
            maxClaimablePerWallet?: string | number | undefined;
            waitInSeconds?: string | number | bigint | BigNumber | undefined;
            merkleRootHash?: string | number[] | undefined;
            snapshot?: string[] | {
                price?: string | number | undefined;
                currencyAddress?: string | undefined;
                maxClaimable?: string | number | undefined;
                address: string;
            }[] | null | undefined;
        }): Promise<Omit<{
            receipt: ethers.providers.TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (index: number, claimConditionInput: {
            maxClaimableSupply?: string | number | undefined;
            metadata?: {
                [x: string]: unknown;
                name?: string | undefined;
            } | undefined;
            startTime?: Date | undefined;
            price?: string | number | undefined;
            currencyAddress?: string | undefined;
            maxClaimablePerWallet?: string | number | undefined;
            waitInSeconds?: string | number | bigint | BigNumber | undefined;
            merkleRootHash?: string | number[] | undefined;
            snapshot?: string[] | {
                price?: string | number | undefined;
                currencyAddress?: string | undefined;
                maxClaimable?: string | number | undefined;
                address: string;
            }[] | null | undefined;
        }) => Promise<Transaction<Omit<{
            receipt: ethers.providers.TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
```
