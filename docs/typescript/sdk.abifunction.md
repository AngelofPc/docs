---
slug: /sdk.abifunction
title: AbiFunction type
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# AbiFunction type

**Signature:**

```typescript
export type AbiFunction = {
  name: string;
  inputs: z.infer<typeof AbiTypeSchema>[];
  outputs: z.infer<typeof AbiTypeSchema>[];
  signature: string;
  stateMutability: string;
  comment: string;
};
```
