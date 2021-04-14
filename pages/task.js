import React, {useState} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Transaction from '../components/Transactions/transactions';
export default function Home() {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [check,setcheck] = useState(false);
  const [input, setInput] = useState(false);
  const checkData = (e) =>{
		setWidth(e.clientX);
    setHeight(e.clientY);
    setcheck(!check)
    console.log('The calculated width is', width)
  }

  const mystyle = {
    width: width + 8
  }

  const showBox = (e) =>{
    setInput(!input);
  }

	return (
    <div className="container">
      <Head>
        <title>AquaSquad Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
				<div className="relative">
          <p className="text-center w-full" onPointerUp={ (e) =>checkData(e)}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </p>
          {
            check && 
              <p style={mystyle} className="text-right absolute top-[10px] cursor-pointer" onClick={(e)=> showBox(e)}>+</p>
          }
          
          {
            input &&
              <input class="form-input mt-1 border w-auto absolute left-[42rem]" placeholder="Jane Doe"/>
          }
  
        </div>
      </main>

    </div>
  )
}
