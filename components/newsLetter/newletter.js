import Link from 'next/link';
import style from './newsLetter.module.css';
export default function NewsLetter() {
	return (
		<>
		<div className="flex flex-col bg-gray-400 h-screen">
			<div className="flex flex-row items-center justify-center"> 
				<div>
					<Link href="/card">
						<button className=" focus-within:outline-none border bg-blue-700 rounded	text-white p-3">Card</button>
					</Link>
				</div>
				<div>
					<Link href="/mobile">
						<button className="focus-within:outline-none border bg-blue-700 rounded	text-white p-3">Mobile</button>
					</Link>
				</div>
				<div>
					<Link href="/">
						<button className="focus-within:outline-none border bg-blue-700 rounded	text-white p-3">Dashboard</button>
					</Link>
				</div>
				<div>
					<Link href="/hacker">
						<button className="focus-within:outline-none border bg-blue-700 rounded	text-white p-3">Hacker</button>
					</Link>
				</div>
			</div>
			<div className="flex item-center justify-center h-screen">
				<div className="bg-white flex flex-col lg:w-1/3 m-auto md:w-2/3 sm:w-11/12 w-full xl:w-5/12 h-auto">
					<div className="ml-8 pt-6">
						<p className="font-semibold text-2xl">Our Newsletter</p>
					</div>
					<div className="ml-8 pt-5 sm:w-1/2 w-3/5 xl:w-4/12">
						<p className="font-medium text-base"> Sign up to receive the latest updates,directly from our company </p>
					</div>
					<div className="pt-8  ml-6">
						<form action="#" method="POST">
							<div className="w-2/5">
								<input type="text" name="first_name" placeholder="First Name" className="bg-gray-200 block h-14 mt-1 rounded-2xl focus-within:outline-none w-full pl-4 " />
							</div>

							<div className="w-2/5 pt-5">
								<input type="text" name="last_name" placeholder="Last Name" className=" bg-gray-200 block h-14 mt-1 focus-within:outline-none rounded-2xl  w-full pl-4 " />
							</div>

							<div className="mt-1 flex rounded-md pb-14 pt-5">
								<input type="text" className="bg-gray-200 block h-14 pl-4 rounded-l-2xl focus-within:outline-none rounded-none w-3/5 " placeholder="Email Address" />
								<span className={`inline-flex items-center px-3 border cursor-pointer px-5 ${style.email}`}>
									<img src="/tick.svg"></img>
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>	
		</>
	)
}