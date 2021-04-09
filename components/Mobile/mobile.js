import Link from 'next/link';
import style from './mobile.module.css';
export default function Mobile() {
	return (
		<>
						
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
								<img src="/next.svg" className="pl-3" ></img>
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
								<p>5.0</p>
							</div>
						</div>
					</div>
					<div>
						<button className="mr-32 border border-blue-400 mb-5  mt-2 px-4 rounded text-2xl text-blue-300">
							Edit Product
						</button>
					</div>		
				</div>
			</div>
		</>
	)
}