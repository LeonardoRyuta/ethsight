import type { Metadata } from "next";
import { headers } from 'next/headers'
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import { cookieToInitialState } from 'wagmi';

import { config } from '@/config';
import Web3ModalProvider from '@/context';


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "ETHSight",
  description: "Create decentralized surveys and polls on chain",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Web3ModalProvider initialState={initialState}>
            {children}
          </Web3ModalProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}