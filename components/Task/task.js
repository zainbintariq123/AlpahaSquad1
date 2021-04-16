import React, {useState} from 'react';
import Head from 'next/head'
import styles from './task.module.css'
import {v4 as uuidv4} from 'uuid';
export default function Task() {
  const [heights, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [check,setcheck] = useState(false);
  const [input, setInput] = useState(false);
  const [newName, setName] = useState('');
  const [data, setData] = useState([]);
  const checkData = (e) =>{
		setWidth(e.clientX);
    setHeight(e.clientY);
    setcheck(!check)
    console.log('The calculated width is', width)
  }

  const mystyle = {
    left: width-42,
    top: heights+45
  }

  const textarea  = {
    left : width-25,
    top: heights + 70 
  }

  const showBox = (e) =>{
    setInput(!input);
  }

  const saveData = () =>{
    if(newName.length > 1) {
      setData([...data, {id: uuidv4(), name: newName }]);
      setName('');
      console.log(data);
      setInput(!input);
      setcheck(!check);
    }
    if(newName.length < 1) {
      alert('please fill the box with atleast 1 length');
    }
  }

  const updateName = (e) =>{
    setName(e.target.value);
  }

  const CancelBox = () =>{
    setInput(!input);
    setcheck(!check);
  }
  const showData = () =>{
    console.log('Array with values', data)
  }
	return (
    <div className="container flex flex-col justify-center relative bg-gray-400 m-auto">
     <div className= {`${styles.mainDiv} shadow-md mx-32 m-auto mt-8 `}>
        <p className="text-center text-4xl mt-12"> Detail App  </p>
        <p className="text-white w-auto px-8 my-28  text-justify "  onMouseUp={ (e) =>checkData(e)}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque equat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
          in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. 
          Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
          ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
          sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
          luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
          sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
          tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat,
          leo eget bibendum sodales, augue velit cursus nunc,. 
        </p>
        {
          check && 
            <p style={mystyle} className={`${styles.plusBtn} text-3xl cursor-pointer`} onClick={(e)=> showBox(e)}>+</p>
        }
        
        {
          input &&
            // <input class="form-input mt-1 border w-auto absolute left-[42rem]" placeholder="Jane Doe"/>
            <div style={textarea} class={`${styles.textBox} absolute`}>
              <div className="flex flex-col w-full">
                <div>
                  <textarea 
                    value={newName} 
                    
                    className="focus-within:outline-none h-16 rounded w-[16.188rem] "
                    onChange={(e)=> updateName(e)} >
                  </textarea>
                </div> 
                <div className="flex flex-row justify-center w-full">
                  <div>
                    <button className="bg-white border px-5 focus-within:outline-none rounded-full shadow-md" onClick={saveData}>Save</button>
                  </div> 
                  <div>
                    <button className="bg-white border ml-2 focus-within:outline-none px-4 rounded-full" onClick={CancelBox}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>    
          }
        <div className="pb-5 text-center">
          <button className={`${styles.mainDiv} focus-within:outline-none px-4 py-2 rounded-full shadow-md  text-white`} onClick={showData}>Click To Console Data</button>
        </div>
        <div className="text-center">
          <p className="text-2xl"> Text will be display in table After Entering. </p>
        </div>
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                ID
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Data.
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr> */}
                          {
                            data.map((result,key)=>{
                              return (
                                <tr>
                                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                    <div class="flex items-center">

                                      <div class="ml-3">
                                          <p class="text-gray-900 whitespace-no-wrap">
                                              {result.id}
                                          </p>
                                      </div>
                                  </div>
                              </td>
                              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  <p class="text-gray-900 whitespace-no-wrap text-center">{result.name}</p>
                              </td>
                             </tr> 
                              )  
                            })
                          }
                        {/* </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
        </div>

     </div>
    </div>
  )
}
