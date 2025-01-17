---
slug: /sdk.contractevents.getevents
title: ContractEvents.getEvents() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# ContractEvents.getEvents() method

Get Events

## Example

```javascript
// The name of the event to get logs for
const eventName = "Transfer";

// Optionally pass in options to limit the blocks from which events are retrieved
const options = {
  fromBlock: 0,
  toBlock: 1000000, // can also pass "latest"
  order: "desc",
  // Configure event filters (filter on indexed event parameters)
  filters: {
    from: "0x...",
    to: "0x...",
  },
};

const events = await contract.events.getEvents(eventName, options);
console.log(events[0].eventName);
console.log(events[0].data);
```

**Signature:**

```typescript
getEvents<TEvent extends Record<string, any> = Record<string, any>, TFilter extends Record<string, any> = Record<string, any>>(eventName: string, options?: EventQueryOptions<TFilter>): Promise<ContractEvent<TEvent>[]>;
```

## Parameters

| Parameter | Type                                                           | Description                                                                                   |
| --------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| eventName | string                                                         | The name of the event to get logs for                                                         |
| options   | [EventQueryOptions](./sdk.eventqueryoptions.md)&lt;TFilter&gt; | _(Optional)_ Specify the from and to block numbers to get events for, defaults to all blocks. |

**Returns:**

Promise&lt;[ContractEvent](./sdk.contractevent.md)&lt;TEvent&gt;\[\]&gt;

The requested event objects with event data

## Remarks

Get a list of the events of a specific type emitted from this contract during the specified time period
