---
slug: /sdk.chaininfoinputschema
title: ChainInfoInputSchema variable
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# ChainInfoInputSchema variable

**Signature:**

```typescript
ChainInfoInputSchema: z.ZodObject<
  {
    rpc: z.ZodArray<z.ZodString, "many">;
    chainId: z.ZodNumber;
    nativeCurrency: z.ZodObject<
      {
        name: z.ZodString;
        symbol: z.ZodString;
        decimals: z.ZodLiteral<18>;
      },
      "strip",
      z.ZodTypeAny,
      {
        symbol: string;
        name: string;
        decimals: 18;
      },
      {
        symbol: string;
        name: string;
        decimals: 18;
      }
    >;
  },
  "strip",
  z.ZodTypeAny,
  {
    chainId: number;
    rpc: string[];
    nativeCurrency: {
      symbol: string;
      name: string;
      decimals: 18;
    };
  },
  {
    chainId: number;
    rpc: string[];
    nativeCurrency: {
      symbol: string;
      name: string;
      decimals: 18;
    };
  }
>;
```
