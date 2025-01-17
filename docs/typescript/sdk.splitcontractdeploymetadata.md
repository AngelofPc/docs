---
slug: /sdk.splitcontractdeploymetadata
title: SplitContractDeployMetadata interface
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# SplitContractDeployMetadata interface

Options for deploying Split contract

**Signature:**

```typescript
export interface SplitContractDeployMetadata
```

## Properties

| Property                                                                       | Modifiers | Type                                                    | Description                                             |
| ------------------------------------------------------------------------------ | --------- | ------------------------------------------------------- | ------------------------------------------------------- |
| [description?](./sdk.splitcontractdeploymetadata.description.md)               |           | string                                                  | _(Optional)_ Optional description of the contract       |
| [external_link?](./sdk.splitcontractdeploymetadata.external_link.md)           |           | string                                                  | _(Optional)_ Optional url for the contract              |
| [image?](./sdk.splitcontractdeploymetadata.image.md)                           |           | FileOrBufferOrString                                    | _(Optional)_ Optional image for the contract            |
| [name](./sdk.splitcontractdeploymetadata.name.md)                              |           | string                                                  | name of the contract                                    |
| [recipients](./sdk.splitcontractdeploymetadata.recipients.md)                  |           | [SplitRecipientInput](./sdk.splitrecipientinput.md)\[\] | The list of recipients and their share of the split     |
| [trusted_forwarders?](./sdk.splitcontractdeploymetadata.trusted_forwarders.md) |           | string\[\]                                              | _(Optional)_ Custom gasless trusted forwarder addresses |
