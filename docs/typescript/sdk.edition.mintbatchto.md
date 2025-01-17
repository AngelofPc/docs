---
slug: /sdk.edition.mintbatchto
title: Edition.mintBatchTo property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Edition.mintBatchTo property

Mint Many NFTs with limited supplies

## Example

```javascript
// Address of the wallet you want to mint the NFT to
const toAddress = "{{wallet_address}}";

// Custom metadata and supplies of your NFTs
const metadataWithSupply = [
  {
    supply: 50, // The number of this NFT you want to mint
    metadata: {
      name: "Cool NFT #1",
      description: "This is a cool NFT",
      image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
    },
  },
  {
    supply: 100,
    metadata: {
      name: "Cool NFT #2",
      description: "This is a cool NFT",
      image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
    },
  },
];

const tx = await contract.mintBatchTo(toAddress, metadataWithSupply);
const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
const firstTokenId = tx[0].id; // token id of the first minted NFT
const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
```

**Signature:**

```typescript
mintBatchTo: {
        (to: string, metadataWithSupply: {
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
        prepare: (to: string, metadataWithSupply: {
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

Mint many different NFTs with limited supplies to a specified wallet.
