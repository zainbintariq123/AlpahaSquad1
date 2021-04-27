import { gql, useQuery, useMutation } from "@apollo/client"
import { useState } from "react";
import Users from './Users';
import React from 'react';

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
	if (loading) {
		return <div>loading</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	const saveData  = (e) =>{
		e.preventDefault();
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
    debugger
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
      <Users user={data.users.data} />
			<div className="bg-white px-40 px-32  border rounded bg-gray-900 pt-8">
        <h3 className="text-3xl my-5 font-medium leading-6 text-center my-4 text-white">Personal Information</h3>
        <div className="mt-5 shadow-md px-5 bg-gray-900 mb-20">
          <form action="#" className="bg-white">
            <div className="flex flex-row flex-wrap justify-center ">
              <div className="w-full sm:w-full  md:w-1/4 lg:w-1/4 mr-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 my-4">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  autoComplete="given-name"
                  onChange={(e)=>setEmail(e.target.value)}
                  className="mt-1 h-14 border shadow-lg focus-within:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
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
                  autoComplete="family-name"
                  onChange={(e)=>setName(e.target.value)}
                  className="mt-1 h-14 border shadow-md focus-within:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
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
                  autoComplete="username"
                  onChange={(e)=>setUsername(e.target.value)}
                  className="mt-1 h-14 border shadow-md focus-within:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
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
                  autoComplete="phone"
                  onChange={(e)=> setPhone(e.target.value)}
                  className="mt-1 h-14 border shadow-md focus-within:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
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
                  value={website}
                  onChange={(e)=>setWebsite(e.target.value)}
                  className="mt-1 h-14 border shadow-md focus-within:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="w-full sm:w-full  md:w-1/4 lg:w-1/4">
                <label htmlFor="street_address" className="block text-sm font-medium text-gray-700 my-4">
                  Id
                </label>
                <input
                  type="text"
                  name="phone"
                  id="Id"
                  value={Id}
                  autoComplete="phone"
                  onChange={(e)=> setId(e.target.value)}
                  className="mt-1 h-14 border shadow-md focus-within:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
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