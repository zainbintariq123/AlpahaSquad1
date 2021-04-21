import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import styles from './task.module.css'
import {v4 as uuidv4} from 'uuid';
import {CSVLink} from 'react-csv';
import Popup  from '../Popup/popup';
export default function Task() {
  const [heights, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [check,setcheck] = useState(false);
  const [input, setInput] = useState(false);
  const [newName, setName] = useState('');
  const [data, setData] = useState([]);
  const [selected, setSelectedData] = useState('');
  const [name, setSelectName] = useState('');
  const [id, setSelectId] = useState('');
  const [popup, setPopup] = useState(false);
  const [textval, setTextVal] = useState('');
  const [text, setText] = useState(
    `
      Jasmine mass. When his companions natoque the twelfth the of life, eleifend ac, enim.
      The latest lorem front protein in, pull one, eu a region. very Phasellus adipiscing there
      is no order that the fear of varius laoreet. eachultricies mass life only. For the functional worth it.
      Even Zen. very mass Maecenas time, the region need sauce tomato sauce, salad , which is always free,
      it is important ecological salad not yet played. mass For more than life now, sit or, griefsapien as a free
      sterilized throat. mass No one before. It also is important clinical need peanut taste developers.
      Homework lion. Lorem However, mass  ecological Mauris a film very nibh. v Till members arrowsa functional
      drink members, lorem propaganda very outdoor running now life.`
  )
  const [headers, setHeaders] = useState([
    {
      label:'Id', key:'id'
    },
    {
      label: 'name', key:'name'
    },
    {
      label: 'selected', key: 'selected'
    }
  ]);
  const checkData = (e) =>{
    setSelectedData(window.getSelection().toString());
		setWidth(e.clientX);
    setHeight(e.clientY);
    setcheck(!check)
  }

  const mystyle = {
    left: width-10,
    top: heights
  }

  const textarea  = {
    left : width + 10,
    top: heights +30  
  }

  const showBox = (e) =>{
    setInput(!input);
  }

  const saveData = () =>{
    if(newName.length > 1) {
      const newData = [...data, {id: uuidv4(), name: newName, selected : selected.trim()  }];
      setData(newData);
      debugger
      setName('');
      setInput(!input);
      setcheck(!check);
      setHeight('');
      setWidth('');
      localStorage.setItem('Result', JSON.stringify(newData));
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
    
  }

  useEffect(()=>{
    let result = localStorage.getItem("Result");
    if(result){
      setData(JSON.parse(result));
    }
  },[])

  const showPopup = (e, textValue) =>{ 
    debugger
    const result = data.find(item => item.selected === textValue);
    let namevalue = result.name;
    let id = result.id;
    setTextVal(textValue);
    setSelectName(namevalue);
    setSelectId(id);
    console.log(name + " " + id);
    setPopup(!popup)
  }

  const deleteData = (key) =>{
    debugger
    const result = data.filter(item=>{
      return item.id !== key;
    })
    setData(result);
  }
	return (
    <>
      <div className="container bg-gray-400 mx-auto">
        <div className= {`${styles.mainDiv} shadow-md   mx-32 mt-8 `}>
          <p className="text-center text-4xl mt-12"> Detail App  </p>
            <div className="relative">
              <p className="text-white w-auto px-4  my-28  text-justify " onDoubleClick={(e) =>checkData(e)}  onMouseUp={ (e) =>checkData(e)}>
                {
                  text.split(" " || "," || ".").map(textValue =>{
                  return data.find(item => item.selected == textValue) ? 
                    <Popup textValue={textValue} updateData={deleteData}  name={name} data={data}  />
                  
                    : <span>{ textValue + " "} </span>                
                  })
                }
              </p>
            </div>
            {
              check && selected.length > 1 && 
                <p style={mystyle} className={`${styles.plusBtn} text-2xl cursor-pointer absolute mb-0`} onClick={(e)=> showBox(e)}>+</p>
            }
          
          {
            input &&
              // <input class="form-input mt-1 border w-auto absolute left-[42rem]" placeholder="Jane Doe"/>
              <div style={textarea} className={`${styles.textBox} absolute`}>
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
            <button className="bg-gray-400 focus-within:outline-none px-4 py-2 rounded-full shadow-md  text-white" onClick={showData}>Click To Console Data</button>
          </div>
          <div className="pb-5 text-center">
            <CSVLink data={data} headers={headers} >
              <button className="bg-gray-400 focus-within:outline-none px-4 py-2 rounded-full shadow-md text-white">Download</button>
            </CSVLink>
          </div>
          <div className="text-center">
            <p className="text-2xl"> Text will be display in table After Entering. </p>
          </div>
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                      <thead>
                          <tr>
                              <th
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  ID
                              </th>
                              <th
                                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  Data.
                              </th>
                              <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Selected
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                            {
                              data.map((result,key)=>{
                                return (
                                  <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5" id={key}>
                                      <div className="flex items-center">

                                        <div className="ml-3" >
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {result.id}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm id={key}">
                                    <p className="text-gray-900 whitespace-no-wrap text-center">{result.name}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm" id={key}>
                                  <p className="text-gray-900 whitespace-no-wrap text-center">{result.selected}</p>
                                </td>
                              </tr> 
                                )  
                              })
                            }
                      </tbody>
                  </table>
              </div>
          </div>
          </div>

        </div>
      </div>
    </>
  )
}
