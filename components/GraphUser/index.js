import { gql, useQuery, useMutation } from "@apollo/client"
import { useState } from "react";
import Users from './Users';

const EXCHANGE_RATES = gql` 
	query {
    users {
   		data {
     		id
     		name
     		username
     		phone
     		website
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
	mutation createUser($type: Object!) {
		createUser(type:$type){
			currency
			rate
		}
	}
`

export default function GraphUser() {
	
	const { data, loading, error } = useQuery(EXCHANGE_RATES);
	const [AddUser, {newdata}] = useMutation(ADD_DATA);

	const [Id,setId] = useState("");
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

	const saveData  = () =>{
		
		const newData = {
			id: Id,
      name: name,
      username: username,
      phone: phone,
      website: website
		}
		console.log('The newData is now', newData);
		AddUser({variables:{type: newData}});

	}
	return (
		<>
			<Users user={data.users.data} />
			<div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0 text-center">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" className="bg-gray-200">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="flex flex-row flex-wrap bg-gray-300">
                    <div className="w-full sm:w-full  md:w-1/2 lg:w-1/2">
                      <label htmlFor="currency" className="block text-sm font-medium text-gray-700 my-4">
                        Id
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="currency"
												value={Id}
                        autoComplete="given-name"
												onChange={(e)=>setId(e.target.value)}
                        className="mt-1 h-14 border shadow-md focus-within:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="w-full sm:w-full  md:w-1/2 lg:w-1/2">
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

                    <div className="w-full sm:w-full  md:w-1/2 lg:w-1/2">
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

                    <div className="w-full sm:w-full  md:w-1/2 lg:w-1/2">
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

                    <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
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
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                  <button
                    className="inline-flex justify-center w-48 py-2 px-4 border shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 focus:outline-none"
										onClick={saveData}
									>
                    Save
                  </button>
                </div>
              </div>
							<div>
							</div>
            </form>
          </div>
        </div>
      </div>
		</>
	)
}