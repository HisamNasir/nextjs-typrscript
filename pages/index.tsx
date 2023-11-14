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
  // // console.log("hi");


  // function sub(x:number,y:number){
  //   return x-y;
  // }
  // // console.log(sub(5,6));
  // let compute:number=Math.sqrt(14)
  // // console.log(compute);

  // let sentence:string='hello guys hisam nasir 123'
  // let sentenceLength:number=sentence.length;
  // // console.log(sentenceLength);

  // function isEven(a:number):boolean{
  //   return a%2===0
  // }
  // // console.log(isEven(21))

  // let bigNumber:bigint=9007199254740992n;
  // // console.log(bigNumber);
  // let anotherNumber=BigInt("9007199254740992")
  // let sum=bigNumber+anotherNumber
  // // console.log(sum);

  // let numx:unknown;
  // numx=2;
  // numx='hello';
  // numx=true;
  // // console.log(numx);
  // if(typeof numx==='number'){
  //   // console.log(numx+5);

  // }

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
