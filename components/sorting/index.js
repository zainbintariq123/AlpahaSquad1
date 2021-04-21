import React, { useState, useMemo, useEffect } from 'react';
import style from './sorting.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Sorting() {
	const [data ,setData] = useState([
		{
			project: 'software development',
			type: 'Development',
			status: 'Assigned',
			priority: 'High',
			owner: 'Jason Smith',
			Created_on: '6/28/2020',
			Due_on: '9/28/2020',
		},
		{
			project: 'jade\'s website',
			type: 'Design',
			status: 'Pending',
			priority: 'Medium',
			owner: 'Jason Smith',
			Created_on: '6/28/2020',
			Due_on: '9/28/2020'
		},
		{
			project: 'marketing visuals',
			type: 'Marketing',
			status: 'Assigned',
			priority: 'Low',
			owner: 'Jason Smith',
			Created_on: '6/28/2020',
			Due_on: '9/28/2020',
		},
		{
			project: 'jade\'s website',
			type: 'Design',
			status: 'Pending',
			priority: 'Medium',
			owner: 'Jason Smith',
			Created_on: '6/28/2020',
			Due_on: '9/28/2020',
		},
		{
			project: 'marketing visuals',
			type: 'Marketing',
			status: 'Assigned',
			priority: 'Low',
			owner: 'Jason Smith',
			Created_on: '6/28/2020',
			Due_on: '9/28/2020',
		},
		{
			project: 'jade\'s website',
			type: 'Design',
			status: 'Pending',
			priority: 'Medium',
			owner: 'Jason Smith',
			Created_on: '6/28/2020',
			Due_on: '9/28/2020',
		},
		{
			project: 'marketing visuals',
			type: 'Marketing',
			status: 'Assigned',
			priority: 'Low',
			owner: 'Jason Smith',
			Created_on: '6/28/2020',
			Due_on: '9/28/2020',
		}
	])
	
	const [filteredArray, setfilteredArray] = useState([...data]);

	const [sortingField, setSortingField] = useState(null);
	const [sortingData, setSortingData] = useState({key: '', direction: ''});
	const [searchItem, setSearchItem] = useState('');
	const [arrow, setDirection] = useState(true)
	const [project,setProject] = useState(true)	
	const [type, setType] = useState(true);
	const [status, setStatus] = useState(true);
	const [priority, setPriority] = useState(true);
	const [owner, setOwner] = useState(true);
	const [created, setCreated] = useState(true);
	const [due, setDue] = useState(true);
		// let setProducts = [...data];
		if(sortingData !== null) {
			data.sort((a,b) =>{
				if(a[sortingData.key] < b[sortingData.key]) {
					return sortingData.direction == 'ascending' ?  -1 : 1;
				}
		
				if(a[sortingData.key] > b[sortingData.key]) {
					return sortingData.direction == 'ascending' ?  1 : -1;
				}
		
				return 0;
			})
		}

	const requestedSort = (key) =>{
		let direction = 'ascending';
		if(sortingData.key === key && sortingData.direction === 'ascending') {
			direction = 'descending'
		}
		if(key == 'project') {
			setDirection(true);
			setProject(!project);
			setStatus(true);
			setPriority(true);
			setOwner(true);
			setCreated(true);
			setDue(true);
		}
		if(key == 'type') {
			setType(!type);
			setProject(true);
			setStatus(true);
			setPriority(true);
			setOwner(true);
			setCreated(true);
			setDue(true);
		}
		if(key == 'status') {
			setStatus(!status);
			setProject(true);
			setType(true);
			setPriority(true);
			setOwner(true);
			setCreated(true);
			setDue(true);
		}
		if(key == 'priority') {
			setStatus(true);
			setProject(true);
			setType(true);
			setPriority(!priority);
			setOwner(true);
			setCreated(true);
			setDue(true);
		}
		if(key == 'owner') {
			setStatus(true);
			setProject(true);
			setType(true);
			setPriority(true);
			setOwner(!owner);
			setCreated(true);
			setDue(true);
		}
		if(key == 'created') {
			setStatus(true);
			setProject(true);
			setType(true);
			setPriority(true);
			setOwner(true);
			setCreated(!created);
			setDue(true);
		}
		if(key == 'due') {
			setStatus(true);
			setProject(true);
			setType(true);
			setPriority(true);
			setOwner(true);
			setCreated(true);
			setDue(!due);
		}
		setSortingData({key, direction});
	}

	const filterData = (e) =>{
		setSearchItem(e.target.value);
	}

	useEffect(()=>{
		if(searchItem.length > 0) {
			const newData = filteredArray.filter(item => item.project.includes(searchItem));
			console.log('The newData is here now', newData);
			setData(newData);
		}
		if(searchItem.length < 1) {
			setData(filteredArray)
		}
	},[searchItem])

	const deleteData = () =>{
		const result = data.filter(item=>{
		  return item.id !== id;
		})
	
		setData(result);
	  }

	return (
		<>
			<div className="bg-green-100 h-screen">
				<div className="flex justify-between w-full px-3.5 py-3">
					<div>
						<p className="font-medium text-2xl">Jack and Jill Enterprises</p>
					</div>
					<div>
						<button className= "bg-blue bg-blue-700 focus-within:outline-none px-3 py-2 rounded text-white" >Create New</button>
					</div>
				</div>

				<div className="flex bg-white">
					<div className="flex flex-row justify-between w-1/2">
						<div className="flex flex-row pl-3 pt-2">
							<div className="border px-2 py-1 rounded" >
								<img src="/bookmark.svg" className="w-4 h-4"></img>
							</div>
							<div className="border px-2 py-1 rounded ml-2">
								<img src="/download1.svg" className="w-4 h-4"></img>
							</div>
						</div>
						<div className="flex flex-row pt-2">
							<div className="border px-2 py-1 rounded">
								<img src="/calender.svg" className="w-4 h-4"></img>
							</div>
							<div className="border px-2 py-1 rounded bg-gray-200" >
								<img src="/bookmark.svg" className="w-4 h-4"></img>
							</div>
							<div className="border px-2 py-1 rounded">
								<img src="/download1.svg" className="w-4 h-4"></img>
							</div>
						</div>
					</div>

					<div className="mt-1 relative rounded-md shadow-sm border ml-3 mt-2  w-1/2">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<span className="text-gray-500 sm:text-sm">
								<FontAwesomeIcon icon="search" size="1x"  className="" />
							</span>
						</div>
						<input
							type="text"
							name="price"
							id="price"
							className="h-9 px-8 focus:ring-indigo-500 focus-within:outline-none flex justify-center focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
							placeholder="0.00"
							value={searchItem}
							onChange={(e) => filterData(e)}
						/>
						<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
							<span className="text-gray-500 sm:text-sm">
								<FontAwesomeIcon icon="filter" size="1x"  className="" /> Filter</span>
						</div>
					</div>
				</div>
				<div class="overflow-x-auto bg-white">
					<table class=" bg-white shadow-md rounded mt-6">
						<thead>
							<tr class="bg-gray-100 text-gray-600 uppercase text-sm leading-normal w-full">
								<th className="text-left pl-3.5 w-32"><input type="checkbox" class="form-checkbox w-5 h-5 " /></th>
								<th class="py-3  text-left w-36">
									<div className="flex justify-between w-full">
										<div>
											<button type="button" className="focus-within:outline-none" onClick={()=> requestedSort("project")}>
												<p className="mb-0 text-xs font-medium">Project</p>
											</button>
										</div>
										<div>
											{ project &&
												<button className="focus-within:outline-none">
													{/* <img src="/down.svg" className="w-3 h-3 mx-4"></img> */}
													<FontAwesomeIcon icon="angle-down" size="1x"  className=" mx-4 " />
												</button>
											}
											{
												!project &&
												<button className="focus-within:outline-none">
													<FontAwesomeIcon icon="angle-up" size="1x" className="mx-4 " />
												</button>
											}
										</div>
									</div>
								</th>
								<th class="py-3  text-left w-40 border-l-2 border-white">
									<div className="flex justify-between w-full cursor-pointer" onClick={()=> requestedSort("type")}>
										<div >
											<button type="button" className="focus-within:outline-none" >
												<p className="mb-0 ml-4 text-xs font-medium">Type</p>
											</button>
										</div>
										<div>
											{ type &&
												<button className="focus-within:outline-none">
													{/* <img src="/down.svg" className="w-3 h-3 mx-4"></img> */}
													<FontAwesomeIcon icon="angle-down" size="1x"  className=" mx-4 " />
												</button>
											}
											{
												!type &&
												<button className="focus-within:outline-none">
													<FontAwesomeIcon icon="angle-up" size="1x" className="mx-4 " />
												</button>
											}
										</div>
									</div>
								</th>
								<th class="py-3  text-left w-40 border-l-2 border-white">
									<div className="flex justify-between w-full cursor-pointer" onClick={()=> requestedSort("status")}>
										<div>
											<p className="mb-0 ml-4 text-xs font-medium">Status</p>
										</div>
										<div>
											{ status &&
												<button className="focus-within:outline-none">
													{/* <img src="/down.svg" className="w-3 h-3 mx-4"></img> */}
													<FontAwesomeIcon icon="angle-down" size="1x"  className=" mx-4 " />
												</button>
											}
											{
												!status &&
												<button className="focus-within:outline-none">
													<FontAwesomeIcon icon="angle-up" size="1x" className="mx-4 " />
												</button>
											}
										</div>
									</div>
								</th>
								<th class="py-3  text-left w-40 border-l-2 border-white">
									<div className="flex justify-between w-full cursor-pointer" onClick={()=> requestedSort("priority")}>
										<div>
											<p className="mb-0 ml-4 text-xs font-medium">Priority</p>
										</div>
										<div>
											{ priority &&
												<button className="focus-within:outline-none">
													{/* <img src="/down.svg" className="w-3 h-3 mx-4"></img> */}
													<FontAwesomeIcon icon="angle-down" size="1x"  className=" mx-4 " />
												</button>
											}
											{
												!priority &&
												<button className="focus-within:outline-none">
													<FontAwesomeIcon icon="angle-up" size="1x" className="mx-4 " />
												</button>
											}
										</div>
									</div>
								</th>
								<th class="py-3  text-left w-40 border-l-2 border-white">
									<div className="flex justify-between w-full cursor-pointer" onClick={()=> requestedSort("owner")}>
										<div>
											<p className="mb-0 ml-4 text-xs font-medium">Owner</p>
										</div>
										<div>
											{ owner &&
												<button className="focus-within:outline-none">
													{/* <img src="/down.svg" className="w-3 h-3 mx-4"></img> */}
													<FontAwesomeIcon icon="angle-down" size="1x"  className=" mx-4 " />
												</button>
											}
											{
												!owner &&
												<button className="focus-within:outline-none">
													<FontAwesomeIcon icon="angle-up" size="1x" className="mx-4 " />
												</button>
											}
										</div>
									</div>
								</th>
								<th class="py-3  text-left w-40 border-l-2 border-white">
									<div className="flex justify-between w-full cursor-pointer" onClick={()=> requestedSort("created")}>
										<div>
											<p className="mb-0 ml-4 text-xs font-medium">Created on</p>
										</div>
										<div>
											{ created &&
												<button className="focus-within:outline-none">
													{/* <img src="/down.svg" className="w-3 h-3 mx-4"></img> */}
													<FontAwesomeIcon icon="angle-down" size="1x"  className=" mx-4 " />
												</button>
											}
											{
												!created &&
												<button className="focus-within:outline-none">
													<FontAwesomeIcon icon="angle-up" size="1x" className="mx-4 " />
												</button>
											}
										</div>
									</div>
								</th>
								<th class="py-3  text-left w-40 border-l-2 border-white">
									<div className="flex justify-between w-full cursor-pointer" onClick={()=> requestedSort("due")}>
										<div>
											<p className="mb-0 ml-4 text-xs font-medium">Due on</p>
										</div>
										<div>
											{	 due &&
												<button className="focus-within:outline-none">
													{/* <img src="/down.svg" className="w-3 h-3 mx-4"></img> */}
													<FontAwesomeIcon icon="angle-down" size="1x"  className=" mx-4 " />
												</button>
											}
											{
												!due &&
												<button className="focus-within:outline-none">
													<FontAwesomeIcon icon="angle-up" size="1x" className="mx-4 " />
												</button>
											}
										</div>
									</div>
								</th>
								<th class="py-3  text-left w-40 border-l-2 border-white">
									<div>
										<p className="mb-0 text-xs font-medium ml-4">Actions</p>
									</div>
								</th>
							</tr>
						</thead>
						<tbody class="text-gray-600 text-sm font-light">
							{
								data.map((item, key) => {
									return (
										<tr class="border-b border-gray-200 hover:bg-gray-100">
											<td>
												<div className="flex">
													<div className="w-16 pl-3.5">
														<input type="checkbox" class="form-checkbox h-5 w-5" />
													</div>
													<div className="flex flex-col justify-center">
														<img src="/down.svg" className="w-3 h-3"></img>
													</div>
												</div>
											</td>
											<td class="py-3 text-left">
												<div class="flex items-center">
													<p className={`${style.project} text-xs`} >{item.project}</p>
												</div>
											</td>
											<td class="py-3 text-center">
												<div class="text-left">
													<p className={`${style.project} ml-4 text-xs`}>{item.type}</p>
												</div>
											</td>
											<td class="py-3">
												<div className="text-left">
													<p className={`${style.project} ml-4 text-xs`}>{item.status}</p>
												</div>
											</td>
											<td class="py-3">
												<div class="text-left">
													<p className={`${style.project} ml-4 text-xs`}>{item.priority}</p>
												</div>
											</td>
											<td class="py-3 ">
												<div class="text-left">
													<p className={`${style.project} ml-4 text-xs`}>{item.owner}</p>
												</div>
											</td>
											<td class="py-3">
												<div class="text-left ml-4 text-xs">
													{item.Created_on}
												</div>
											</td>
											<td class="py-3  text-left whitespace-nowrap">
												<div class="flex items-center">
													<p className={`${style.project} ml-4 text-xs`}>{item.Due_on}</p>
												</div>
											</td>
											<td>
												<button className="inline-flex focus-within:outline-none border px-3 py-2 rounded my-1 ml-4">Edit Project <span className="flex flex-col h-6 justify-center ml-4"> <img src="/down.svg" className="h-3 w-3"></img> </span></button>
											</td>
										</tr>
									)
								})
							}
						</tbody>
					</table>
				</div>
				<div className=" w-full text-right">
					<FontAwesomeIcon icon="angle-left" size="1x"  className="" />
						<p className="inline-flex ml-10">Pages</p>
						<p className="bg-white inline-flex mx-4 px-2">4</p>
						<p className="inline-flex">of 20</p>
						<FontAwesomeIcon icon="angle-right" size="1x"  className="inline-flex ml-10" />	

						<p className="bg-white inline-flex ml-10 px-2 py-1">30</p>
						<p className="inline-flex ml-2">per page</p>	
				</div>
			</div>
		</>
	)
}
