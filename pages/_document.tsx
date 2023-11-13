'use client'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body className='container mx-auto flex'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}