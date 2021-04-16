import Head from 'next/head';
import Link from 'next/link';
import style from './main.module.css';
import Solution from '../Solution/solution';
import Tabs from '../Tabs/tabs';
import Product from '../Product/product';
import Company from '../Companies/companies';
import Footer from '../Footer/footer';
export default function Main() {
	return (
		<>
			<Head>
				<title>AquaSquad Task</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"></link>
			</Head>
			<main className="">
				<div className="flex flex-row relative">
					<div className="pl-20 w-1/2">
						<div className="pt-11">
							<p className="inline-block py-5 px-3.5 border text-center text-4xl m-0 bg-gray-900 text-white">
								PR
							</p>
						</div>
						<p className="mb-0 text-8xl font-semibold text-gray-900 pt-36 f-l">Build.</p>
						<p className="mb-0 text-8xl font-semibold text-gray-900 f-l ">Review.</p>
						<p className="mb-0 text-8xl font-semibold text-gray-900 f-l">Ship.</p>

						<p className="text-2xl pt-20 f-f-r">
							The next big thing starts here.
						</p>
						<p className="text-2xl w-[32.188rem] f-f-r">	 
							Get Prodify and be the first to market with
							an integrated product that you love
						</p>
						<button className={`w-1/2 focus-within:outline-none h-9 text-white rounded ${style.btnColor} mt-7`}>Let's Build</button>
					</div>
					<div className={`${style.bgColor} w-1/2`}>
						<nav className="flex items-center justify-between flex-wrap p-6">
							<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
								<div className="text-sm lg:flex-grow">
									<a href="#responsive-header" className="block lg:inline-block lg:mt-0 text-white mr-4">
										Home
									</a>
									<a href="#responsive-header" className="block px-8 lg:inline-block lg:mt-0 text-white mr-4">
										About Us
									</a>
									<a href="#responsive-header" className="block px-8 lg:inline-block lg:mt-0 text-white mr-4">
										Pricing
									</a>
									<a href="#responsive-header" className="block px-8 lg:inline-block lg:mt-0 text-white mr-4">
										Resources
									</a>
									<a>
										<button className="bg-red-100 focus-within:outline-none shadow py-3 px-6 rounded text-lg text-white ">Sign In -></button>
									</a>
								</div>
							</div>
						</nav>
						<div className={`absolute ${style.imageArjust} `} >
							<img src="/front.png"></img>
						</div>
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