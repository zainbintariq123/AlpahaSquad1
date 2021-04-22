import React, {useState, useEffect} from 'react';
import Link from 'next/link';
// import styles from './task.module.css'
import {v4 as uuidv4} from 'uuid';
import {CSVLink} from 'react-csv';
import style from './popup.module.css';
export default function Popup(props) {
	
	let 	{ data, updateData } = props;
	const [name, setSelectName] = useState('');
  const [Id, setSelectId] = useState('');
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

  // useEffect(()=>{
  //   let result = localStorage.getItem("Result");
  //   if(result){
  //     setData(JSON.parse(result));
  //   }
  // },[])

	const showPopup = (e, textValue) =>{ 
    const result = data.find(item => item.selected === textValue);
    let namevalue = result.name;
    let id = result.id;
    setTextVal(textValue);
    setSelectName(namevalue);
    setSelectId(id);
    console.log(name + " " + Id);
    setPopup(!popup)
  }

	const deleteData = () => {
		props.updateData(Id);
	}
  
	return (
    <>				
			<span onClick={(e)=> showPopup(e, props.textValue)} className="text-blue-700 relative cursor-pointer"> {props.textValue}
				{
					popup === true &&
						<div className="absolute rounded text-white flex border top-[-20px] left-0 w-50 z-32 bg-gray-400">
							<div>
								<p className={`${style.popup} inline-flex text-sm ml-2`}>{name}</p>
							</div>
							<div>
								<button className="focus-within:outline-none inline-flex mx-3" onClick={deleteData}>X</button>
							</div>
						</div>
				}
				</span>                
    </>
  )
}
