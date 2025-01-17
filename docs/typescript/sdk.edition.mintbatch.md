---
slug: /sdk.edition.mintbatch
title: Edition.mintBatch property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Edition.mintBatch property

Mint Many NFTs for the connected wallet

**Signature:**

```typescript
mintBatch: {
        (metadatas: {
            supply: string | number | bigint | BigNumber;
            metadata: string | {
                [x: string]: unknown;
                name?: string | number | undefined;
                description?: string | null | undefined;
                image?: any;
                external_url?: any;
                animation_url?: any;
                background_color?: string | undefined;
                properties?: {
                    [x: string]: unknown;
                } | {
                    [x: string]: unknown;
                }[] | undefined;
                attributes?: {
                    [x: string]: unknown;
                } | {
                    [x: string]: unknown;
                }[] | undefined;
            };
        }[]): Promise<TransactionResultWithId<NFT>[]>;
        prepare: (metadatas: {
            supply: string | number | bigint | BigNumber;
            metadata: string | {
                [x: string]: unknown;
                name?: string | number | undefined;
                description?: string | null | undefined;
                image?: any;
                external_url?: any;
                animation_url?: any;
                background_color?: string | undefined;
                properties?: {
                    [x: string]: unknown;
                } | {
                    [x: string]: unknown;
                }[] | undefined;
                attributes?: {
                    [x: string]: unknown;
                } | {
                    [x: string]: unknown;
                }[] | undefined;
            };
        }[]) => Promise<Transaction<TransactionResultWithId<NFT>[]>>;
    };
```

## Remarks

See [Edition.mintBatchTo](./sdk.edition.mintbatchto.md)
