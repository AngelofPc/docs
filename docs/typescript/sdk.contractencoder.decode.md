---
slug: /sdk.contractencoder.decode
title: ContractEncoder.decode() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# ContractEncoder.decode() method

Decode encoded call data for a given function

**Signature:**

```typescript
decode(fn: keyof TContract["functions"], encodedArgs: string): utils.Result;
```

## Parameters

| Parameter   | Type                           | Description            |
| ----------- | ------------------------------ | ---------------------- |
| fn          | keyof TContract\["functions"\] | the function to decode |
| encodedArgs | string                         | the encoded arguments  |

**Returns:**

utils.Result
