import Head from 'next/head';
import Link from 'next/link';
import style from './main.module.css';
import Solution from '../Solution/solution';
import Tabs from '../Tabs/tabs';
import Product from '../Product/product';
import Company from '../Companies/companies';
import Footer from '../Footer/footer';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = ['Home', 'About Us', 'Pricing', 'Resources']
const profile = ['Your Profile', 'Settings', 'Sign out']

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Main() {
	return (
		<>
			<Head>
				<title>AquaSquad Task</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"></link>
			</Head>
			<main className="">
				<div className="flex flex-row flex-wrap relative">
					<div className="pl-8 sm:pl-8 md:pl-20 lg:pl-20 w-full sm:w-full md:w-1/2 lg:w-1/2">
						<div className="pt-11">
							<p className="inline-block py-5 px-3.5 border text-center text-[2rem] m-0 bg-gray-900 text-white f-m-w">
								PR
							</p>
						</div>
						<p className="mb-0 text-6xl sm:text-6xl md:text-8xl lg:text-8xl font-semibold text-gray-900 pt-20 sm:pt-20 md:pt-36 lg:pt-36 f-l">Build.</p>
						<p className="mb-0 text-6xl sm:text-6xl md:text-8xl lg:text-8xl font-semibold text-gray-900 f-l ">Review.</p>
						<p className="mb-0 text-6xl sm:text-6xl md:text-8xl lg:text-8xl font-semibold text-gray-900 f-l">Ship.</p>

						<p className="text-lg sm:text-lg md:text-2xl lg:text-2xl pt-20 f-f-r">
							The next big thing starts here.
						</p>
						<p className="text-lg sm:text-lg md:text-2xl lg:text-2xl w-full sm:w-full md:w-[32.188rem] lg:w-[32.188rem] f-f-r">	 
							Get Prodify and be the first to market with
							an integrated product that you love
						</p>
						<button className={`w-1/4 sm:w-1/4 md:w-1/2 lg:w-1/2 mb-8 sm:mb-8 md:mb-0 lg:mb-0 focus-within:outline-none h-9 text-white rounded ${style.btnColor} mt-7`}>Let's Build</button>
					</div>
					<div className={`${style.bgColor} w-full sm:w-full md:w-1/2 lg:w-1/2`}>
						<Disclosure as="nav">
							{({ open }) => (
								<>
									<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
										<div className="flex items-center justify-between h-16">
											<div className="flex items-center">
												<div className="flex-shrink-0">
													<img
														className="h-8 w-8"
														src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
														alt="Workflow"
													/>
												</div>
												<div className="hidden md:block">
													<div className="ml-10 flex items-baseline space-x-4">
														{navigation.map((item, itemIdx) =>
															itemIdx === 8 ? (
																<Fragment key={item}>
																	{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
																	<a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
																		{item}
																	</a>
																</Fragment>
															) :
															(
																<a
																	key={item}
																	href="#"
																	className="text-white  px-3 py-2 rounded-md text-sm font-medium"
																>
																	{item}
																</a>
															)
														)
													}
													</div>
												</div>
											</div>
											<div className="hidden md:block">
												<div className=" flex items-center">
													<div className="pt-4 pb-3">
														<div className="flex items-center px-5">
															<div className="flex-shrink-0">
																<button>Sign in</button>
															</div>
													</div>
													</div>

													{/* Profile dropdown 
													<Menu as="div" className="ml-3 relative">
														{({ open }) => (
															<>
																<div>
																	<Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
																		<span className="sr-only">Open user menu</span>
																		<img
																			className="h-8 w-8 rounded-full"
																			src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
																			alt=""
																		/>
																	</Menu.Button>
																</div>
																<Transition
																	show={open}
																	as={Fragment}
																	enter="transition ease-out duration-100"
																	enterFrom="transform opacity-0 scale-95"
																	enterTo="transform opacity-100 scale-100"
																	leave="transition ease-in duration-75"
																	leaveFrom="transform opacity-100 scale-100"
																	leaveTo="transform opacity-0 scale-95"
																>
																	<Menu.Items
																		static
																		className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
																	>
																		{profile.map((item) => (
																			<Menu.Item key={item}>
																				{({ active }) => (
																					<a
																						href="#"
																						className={classNames(
																							active ? 'bg-gray-100' : '',
																							'block px-4 py-2 text-sm text-gray-700'
																						)}
																					>
																						{item}
																					</a>
																				)}
																			</Menu.Item>
																		))}
																	</Menu.Items>
																</Transition>
															</>
														)}
													</Menu> */}
												</div>
											</div> 
											<div className="-mr-2 flex md:hidden">
												{/* Mobile menu button */}
												<Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
													<span className="sr-only">Open main menu</span>
													{open ? (
														<XIcon className="block h-6 w-6" aria-hidden="true" />
													) : (
														<MenuIcon className="block h-6 w-6" aria-hidden="true" />
													)}
												</Disclosure.Button>
											</div>
										</div>
									</div>

									<Disclosure.Panel className="md:hidden">
										<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
											{navigation.map((item, itemIdx) =>
												itemIdx === 0 ? (
													<Fragment key={item}>
														{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
														<a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
															{item}
														</a>
													</Fragment>
												) : (
													<a
														key={item}
														href="#"
														className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
													>
														{item}
													</a>
												)
											)}
										</div>
										<div className="pt-4 pb-3">
											<div className="flex items-center px-5">
												<div className="">
													<button classes="focus-within:outline-none px-8 py-3 rounded shadow-md text-white">Sign in</button>
												</div>
											</div>
										</div>
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>  
					</div>
					<div className={`static sm:static md:static lg:absolute ${style.imageArjust} `} >
						<img src="/front.png"></img>
					</div>	
			</div>	
			 <Solution /> 
				{/* <Tabs /> */}
				<Product/>
				<Company />
				<Footer/>
		</main> 
		</>
	)
}