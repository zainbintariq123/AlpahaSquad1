import Link from 'next/link';
import style from './mobile.module.css';
export default function Mobile() {
	return (
		<>
		<div className="flex flex-col items-center justify-center bg-gray-400 h-screen">
			<div className="flex flex-row"> 
				<div>
					<Link href="/card">
						<button className="focus-within:outline-none border bg-blue-700 rounded	text-white p-3">Card</button>
					</Link>
				</div>
				<div>
					<Link href="/">
						<button className="focus-within:outline-none border bg-blue-700 rounded	text-white p-3">Dashboard</button>
					</Link>
				</div>
				<div>
					<Link href="/form">
						<button className="focus-within:outline-none border bg-blue-700 rounded	text-white p-3">Form</button>
					</Link>
				</div>
				<div>
					<Link href="/hacker">
						<button className="focus-within:outline-none border bg-blue-700 rounded	text-white p-3">Hacker</button>
					</Link>
				</div>
			</div>

						
			<div className="flex items-center justify-center mt-auto h-screen ">

				<div className="flex flex-col items-center  justify-center bg-white px-4 ">
					<div className="flex flex-row  justify-center pb-7 pt-6">
						<div className="flex items-center pr-11">
							<button className="border focus-within:outline-none h-10 rounded-full w-10">
								<img src="/previous.svg" className="pl-3"></img>
							</button>	
						</div>
						<div>
							<img src="/mobile.svg"></img>
						</div>
						<div className="flex items-center pl-11">
							<button className="border focus-within:outline-none h-10 rounded-full w-10">
								<img src="/next.svg" className="pl-3.5" ></img>
							</button>
						</div>
					</div>
					<div>
						<hr></hr>
					</div>
					<div>
						<p className="pr-40 text-gray-500 pt-6 ">iPhone 11 Pro Max</p>
						<p className="pr-40 text-gray-500 pt-3" >$949.99</p>
					</div>
					<div className="pr-40">
						<div className=" flex flex-row  pt-2">
							<div className="flex items-center">
								<img src="/star.svg"></img>
							</div>
							<div className="flex items-center ml-2">
								<img src="/star.svg"></img>
							</div>

							<div className="flex items-center ml-2">
								<img src="/star.svg"></img>
							</div>
							<div className="flex items-center ml-2">
								<img src="/star.svg"></img>
							</div>
							<div className="flex items-center ml-2">
								<img src="/star.svg"></img>
							</div>
							<div className="flex items-center ml-3">
								<p className="font-semibold text-indigo-700">5.0</p>
							</div>
						</div>
					</div>
					<div className="mb-2">
						<button className="border border-indigo-700 focus-within:outline-none mb-5 mr-48 mt-2 px-3 rounded text-indigo-700 text-sm">
							Edit Product
						</button>
					</div>		
				</div>
			</div>
		</div>
		</>
	)
}