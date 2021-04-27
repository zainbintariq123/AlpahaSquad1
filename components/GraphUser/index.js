import { gql, useQuery, useMutation } from "@apollo/client"
import { useState } from "react";
import Users from './Users';
import React from 'react';
import validator from 'validator'

const EXCHANGE_RATES = gql` 
	query {
    users {
   		data {
     		id
     		name
     		username
     		phone
     		website
        email
   		}
   }
	} 
`;
const CURRENCY_TRACKER = gql` 
	query {
		rates(currency: "AUD") {
			currency
			rate
		}
 	}
`;

const ADD_DATA = gql`
  mutation($input: CreateUserInput!) {
    createUser(input: $input) {
      name
      username
      phone
      website
      email
    }
}`

export default function GraphUser() {
	
	const { data, loading, error } = useQuery(EXCHANGE_RATES);
	const [AddUser] = useMutation(ADD_DATA);
	const [Id,setId] = useState("");
	const [email,setEmail] = useState("");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [phone, setPhone] = useState("");
	const [website, setWebsite] = useState("");
  const [usersData, setUser] = useState([]);
  const [check, setCheck] = useState(false);
  const [mailCheck, setEmailCheck] = useState(false);
  const [nameCheck, setNameCheck] = useState(false); 
  const [usernameCheck, setUsernameCheck] = useState(false)
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [websiteCheck, setWebsitecheck] = useState(false);
	if (loading) {
		return <div>loading</div>;
	}

	if (error) {
		return <div> please remove the error now {error}</div>;
	}

  if(data) {
    if(usersData.length<=0) {
      setUser(data.users.data)
    }
  }

	
  const saveData  = (e) =>{
		e.preventDefault();

    if(email.length <= 0 || (!validator.isEmail(email))) {
      setEmailCheck(true);
      return
    }
    if(email.length > 1) {
      setEmailCheck(false)
    }

    if(name.length <=0) {
      setNameCheck(true);
      return;
    }
    if(username.length <=0) {
      setUsernameCheck(true);
      return
    }

    if(phone.length < 4 || (!validator.isNumeric(phone)) ) {
      setPhoneCheck(true);
      return;
    }
    if(website.length <= 0) {
      setWebsitecheck(true);
      return;
    }
		const newData = {
      name: name,
      username: username,
      phone: phone,
      website: website,
      email: email
		}
		console.log('The newData is now', newData);
		AddUser({
      variables:{input: newData},
      refetchQueries:[
        {query: EXCHANGE_RATES }
      ]
    });

    setCheck(!check)

    const newOne= {
      id: usersData.length + 1,
      name: name,
      username: username,
      phone: phone,
      website: website,
      email: email
		}
    usersData.push(newOne);
    setId('');
    setName('');
    setUser('');
    setUsername('');
    setWebsite('');
    setPhone('');
    setEmail('');
    debugger
	}

  const closePopup = () =>{
    setCheck(false);
    setId('');
    setName('');
    setUser('');
    setUsername('');
    setWebsite('');
    setPhone('');
    setEmail('');
  }

  const mailVerify = (e) =>{
    setEmail(e.target.value)
    if(email.length > 0 && (validator.isEmail(email)))  {
      setEmailCheck(false)
    }
  }

  const NameVerify = (e) =>{
    setName(e.target.value)
    if(name.length > 0) {
      setNameCheck(false)
    }
  }

  const verifyUserName = (e)=>{
    setUsername(e.target.value);
    if(username.length > 0) {
      setUsernameCheck(false);
    }
  }

  const verifyPhone = (e)=>{
    setPhone(e.target.value);
    if(phone.length > 4 && (validator.isNumeric(phone))) {
      setPhoneCheck(false);
    }
  }

  const verifyWebsite = (e)=>{
    setWebsite(e.target.value);
    if(website.length > 1) {
      setWebsitecheck(false);
    }
  }
	return (
		<>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
      </nav>
      <Users user={usersData} />
      
			<div className=" px-40 px-32  border rounded bg-gray-900 pt-8">
        <h3 className="text-3xl my-5 font-medium leading-6 text-center my-4 text-white">Personal Information</h3>
        <div className="mt-5 shadow-md px-5 bg-gray-900 mb-20">
          {
            check && 
              <div className="flex w-full justify-start my-3 bg-gray-900">
                <div className="flex border shadow-md my-3 bg-white my-4 rounded">
                  <div class="px-4 py-3 rounded inline-flex" role="alert">
                    <p class="block text-green-600  sm:inline">Form submitted successfully.</p>
                  </div>
                  <div> 
                    <svg onClick={closePopup} class="fill-current h-14 w-6 text-green-600" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </div> 
                </div>
              </div>
          }
          <form method="post" action="#" className="bg-white" onSubmit={(e)=>saveData(e)}>
            <div className="flex flex-row flex-wrap justify-center ">
              <div className="w-full sm:w-full  md:w-1/4 lg:w-1/4 mr-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 my-4">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  autoComplete="given-name"
                  onChange={(e)=> mailVerify(e)}
                  className="mt-1 h-14 border shadow-lg focus-within:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {
                  mailCheck && 
                    <p className="text-sm text-red-600">Please input emial in proper format *</p>
                }
              </div>

              <div className="w-full sm:w-full  md:w-1/4 lg:w-1/4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 my-4 ">
                  Name
                </label>
                <input
                  type="text"
                  name="rate"
                  id="rate"
                  value={name}
                  required
                  autoComplete="family-name"
                  onChange={(e)=>NameVerify(e)}
                  className="mt-1 h-14 border shadow-md focus-within:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {
                  nameCheck &&
                    <p className="text-sm text-red-600">Name is Required Field *</p>
                }
              </div>
            </div>  
            <div className="flex flex-row flex-wrap justify-center ">
              <div className="w-full sm:w-full  md:w-1/4 lg:w-1/4 mr-5">
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 my-4">
                  User Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  value={username}
                  required
                  autoComplete="username"
                  onChange={(e)=>verifyUserName(e)}
                  className="mt-1 h-14 border shadow-md focus-within:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {
                  usernameCheck && 
                    <p className="text-sm text-red-600">username is Required Field *</p>
                }
              </div>

              <div className="w-full sm:w-full  md:w-1/4 lg:w-1/4">
                <label htmlFor="street_address" className="block text-sm font-medium text-gray-700 my-4">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  required
                  autoComplete="phone"
                  onChange={(e)=> verifyPhone(e)}
                  className="mt-1 h-14 border shadow-md focus-within:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                 {
                    phoneCheck && 
                      <p className="text-sm text-red-600">phone is to be number with min length 4  *</p>
                  }
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center ">  
              <div className="w-full sm:w-full md:w-1/4 lg:w-1/4 mr-5">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 my-4">
                  Website
                </label>
                <input
                  type="text"
                  name="website"
                  id="website"
                  required
                  value={website}
                  onChange={(e)=>verifyWebsite(e)}
                  className="mt-1 h-14 border shadow-md focus-within:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                 {
                    websiteCheck && 
                      <p className="text-sm text-red-600">website is required field  *</p>
                  }
              </div>
            </div>
              <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                <button
                  className="inline-flex justify-center w-48 py-2 px-4 border shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 focus:outline-none"
                  onClick={(e)=>saveData(e)} 
                >
                  Submit
                </button>
              </div>

          </form>
        </div>
      </div>
		</>
	)
}