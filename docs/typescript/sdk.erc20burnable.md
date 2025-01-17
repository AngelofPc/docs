---
slug: /sdk.erc20burnable
title: Erc20Burnable class
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Erc20Burnable class

**Signature:**

```typescript
export declare class Erc20Burnable implements DetectableFeature
```

**Implements:** DetectableFeature

## Constructors

| Constructor                                                                   | Modifiers | Description                                                       |
| ----------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------- |
| [(constructor)(erc20, contractWrapper)](./sdk.erc20burnable._constructor_.md) |           | Constructs a new instance of the <code>Erc20Burnable</code> class |

## Properties

| Property                                          | Modifiers | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Description |
| ------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [featureName](./sdk.erc20burnable.featurename.md) |           | "ERC20Burnable"                                                                                                                                                                                                                                                                                                                                                                                                                                                            |             |
| [from](./sdk.erc20burnable.from.md)               |           | { (holder: string, amount: string &#124; number): Promise&lt;Omit&lt;{ receipt: import("@ethersproject/abstract-provider").TransactionReceipt; data: () =&gt; Promise&lt;unknown&gt;; }, "data"&gt;&gt;; prepare: (holder: string, amount: string &#124; number) =&gt; Promise&lt;[Transaction](./sdk.transaction.md)&lt;Omit&lt;{ receipt: import("@ethersproject/abstract-provider").TransactionReceipt; data: () =&gt; Promise&lt;unknown&gt;; }, "data"&gt;&gt;&gt;; } | Burn Tokens |
| [tokens](./sdk.erc20burnable.tokens.md)           |           | { (amount: string &#124; number): Promise&lt;Omit&lt;{ receipt: import("@ethersproject/abstract-provider").TransactionReceipt; data: () =&gt; Promise&lt;unknown&gt;; }, "data"&gt;&gt;; prepare: (amount: string &#124; number) =&gt; Promise&lt;[Transaction](./sdk.transaction.md)&lt;Omit&lt;{ receipt: import("@ethersproject/abstract-provider").TransactionReceipt; data: () =&gt; Promise&lt;unknown&gt;; }, "data"&gt;&gt;&gt;; }                                 | Burn Tokens |
