---
slug: /sdk.snapshotentryinput
title: SnapshotEntryInput variable
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# SnapshotEntryInput variable

**Signature:**

```typescript
SnapshotEntryInput: z.ZodObject<
  {
    address: z.ZodEffects<z.ZodString, string, string>;
    maxClaimable: z.ZodDefault<
      z.ZodDefault<
        z.ZodUnion<
          [
            z.ZodEffects<
              z.ZodUnion<[z.ZodString, z.ZodNumber]>,
              string,
              string | number
            >,
            z.ZodLiteral<"unlimited">,
          ]
        >
      >
    >;
    price: z.ZodOptional<
      z.ZodDefault<
        z.ZodUnion<
          [
            z.ZodEffects<
              z.ZodUnion<[z.ZodString, z.ZodNumber]>,
              string,
              string | number
            >,
            z.ZodLiteral<"unlimited">,
          ]
        >
      >
    >;
    currencyAddress: z.ZodOptional<
      z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>
    >;
  },
  "strip",
  z.ZodTypeAny,
  {
    price?: string | undefined;
    currencyAddress?: string | undefined;
    address: string;
    maxClaimable: string;
  },
  {
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    maxClaimable?: string | number | undefined;
    address: string;
  }
>;
```
