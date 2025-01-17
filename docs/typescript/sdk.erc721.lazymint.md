---
slug: /sdk.erc721.lazymint
title: Erc721.lazyMint property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Erc721.lazyMint property

Lazy mint NFTs

## Example

```javascript
// Custom metadata of the NFTs to create
const metadatas = [
  {
    name: "Cool NFT",
    description: "This is a cool NFT",
    image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
  },
  {
    name: "Cool NFT",
    description: "This is a cool NFT",
    image: fs.readFileSync("path/to/image.png"),
  },
];

const results = await contract.erc721.lazyMint(metadatas); // uploads and creates the NFTs on chain
const firstTokenId = results[0].id; // token id of the first created NFT
const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
```

**Signature:**

```typescript
lazyMint: {
        (metadatas: (string | {
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
        })[], options?: {
            onProgress: (event: UploadProgressEvent) => void;
        } | undefined): Promise<TransactionResultWithId<{
            [x: string]: unknown;
            name?: string | number | undefined;
            description?: string | null | undefined;
            image?: string | null | undefined;
            external_url?: string | null | undefined;
            animation_url?: string | null | undefined;
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
            id: string;
            uri: string;
        }>[]>;
        prepare: (metadatas: (string | {
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
        })[], options?: {
            onProgress: (event: UploadProgressEvent) => void;
        } | undefined) => Promise<Transaction<TransactionResultWithId<{
            [x: string]: unknown;
            name?: string | number | undefined;
            description?: string | null | undefined;
            image?: string | null | undefined;
            external_url?: string | null | undefined;
            animation_url?: string | null | undefined;
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
            id: string;
            uri: string;
        }>[]>>;
    };
```

## Remarks

Create batch allows you to create a batch of many unique NFTs in one transaction.
