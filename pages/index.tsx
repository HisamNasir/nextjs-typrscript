'use client'
import Image from 'next/image'
import { Lato } from 'next/font/google'
import Layout from '@/components/Layout';
import Demo from '@/components/Demo';
import TodoList from '@/components/TodoList';
import { FC } from 'react';
import Head from 'next/head';
import TodoApp from '@/components/TodoApp';
const lato = Lato({ weight: ["100", "300", "400", "700", "900"], subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-sky-700 h-screen flex flex-col justify-center  items-center'>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Todo App with Next.js, TypeScript, and Material-UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TodoApp />
      </main>
    </div>
  );
}
