/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually

  typescript: [
    {
      type: "doc",
      label: "Overview",
      id: "index",
    },
    {
      type: "doc",
      label: "Getting Started",
      id: "getting-started",
    },
    {
      type: "category",
      label: "ThirdwebSDK",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "thirdwebsdk",
        },
        {
          type: "doc",
          label: "fromPrivateKey",
          id: "thirdwebsdk.fromprivatekey",
        },
        {
          type: "doc",
          label: "fromWallet",
          id: "thirdwebsdk.fromwallet",
        },
        {
          type: "doc",
          label: "fromSigner",
          id: "thirdwebsdk.fromsigner",
        },
      ],
    },
  ],
};

module.exports = sidebars;
