// src\constants.ts
import { PublicKey } from "@solana/web3.js";

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          PLATFORM FEES               │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

// Creator fee (in %)
export const PLATFORM_CREATOR_FEE = 0.05; // 5% !!max 5%!!

// Jackpot fee (in %)
export const PLATFORM_JACKPOT_FEE = 0.01; // 0.1%

// Referral fee (in %)
export const PLATFORM_REFERRAL_FEE = 0.0025; // 0.25%

// Toggle live toast events - (true = on, false = off)
export const LIVE_EVENT_TOAST = true;

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          FOOTER LINKS                │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const FOOTER_LINKS = [
  {
    href: "#",
    title: "Buy on Raydium (Soon)",
  },
  {
    href: "https://popswap.click/#/swap/?outputCurrency=0x0fc14d74b66efa44accbbe284ccdd356039e59dc",
    title: "Buy on PopSwap",
  },
  {
    href: "https://t.me/PopCatRock",
    title: "Telegram",
  },
  {
    href: "https://t.me/PopSwapBitrock",
    title: "PSWAP telegram",
  },
];

export const FOOTER_TWITTER_LINK = {
  href: "https://twitter.com/popcatrock",
  title: "© 2024 PopCatRock All rights reserved",
};

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          METATAGS (SEO)              │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const BASE_SEO_CONFIG = {
  defaultTitle: "PopCasino - Solana",
  description:
    "The gambleFi protocol with end-to-end tools for on-chain degeneracy on Solana.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://play-gamba.vercel.app/",
    title: "PopCasino - Solana",
    description:
      "The gambleFi protocol with end-to-end tools for on-chain degeneracy on Solana.",
    images: [
      {
        url: "https://play-gamba.vercel.app/seo.png",
        alt: "Gamba - NEXTjs Demo",
      },
    ],
    site_name: "Gamba - NEXTjs Demo",
  },
  twitter: {
    cardType: "summary_large_image",
    site: "https://twitter.com/gambalabs",
    handle: "@gambalabs",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "casino, gaming, rewards, gambling, entertainment",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
  ],
};

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │      SUPPORTED PLATFORM TOKENS       │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const TOKENLIST = [
  // SOL
  {
    mint: new PublicKey("So11111111111111111111111111111111111111112"),
    name: "Solana",
    symbol: "SOL",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // USDC
  {
    mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    name: "USD Coin",
    symbol: "USDC",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // POP
  {
    mint: new PublicKey("64bUex5TqdCxpHf8s61UAiTnSB9GUdKbs3KJkNao7NKW"),
    name: "PopSwap",
    symbol: "PSWAP",
    image:
      "https://raw.githubusercontent.com/PopCatRock/token-list/main/src/tokens/CoinLogos/0x0FC14d74b66EFa44AccBBe284cCdD356039e59dC.png",
    decimals: 8,
    baseWager: 0.01e9,
  },

  // Add New Public pool
  // {
  //   mint: new PublicKey(""),
  //   name: "",
  //   symbol: "",
  //   image: "",
  //   decimals: 0,
  //   baseWager: 0,
  // },

  // Add New Private pool
  // {
  //   mint: new PublicKey(""),
  //   poolAuthority: new PublicKey(""), // REQUIRED FOR PRIVATE POOLS ONLY
  //   name: "",
  //   symbol: "",
  //   image: "",
  //   decimals: 0,
  //   baseWager: 0,
  // },
];
