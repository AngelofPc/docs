---
slug: /sdk.remotestorage.fetch
title: RemoteStorage.fetch() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## RemoteStorage.fetch() method

Fetch data from any IPFS hash without worrying about gateways, data types, etc. Simply pass in an IPFS url and we'll handle fetching for you and try every public gateway to get the fastest response.

**Signature:**

```typescript
fetch(hash: string): Promise<Record<string, any>>;
```

## Parameters

| Parameter | Type   | Description                                |
| --------- | ------ | ------------------------------------------ |
| hash      | string | The IPFS hash of the file or data to fetch |

**Returns:**

Promise&lt;Record&lt;string, any&gt;&gt;

The data stored at the specified IPFS hash

## Example

```javascript
// Your IPFS hash here
const hash = "ipfs://...";
const data = await sdk.storage.fetch(hash);
```