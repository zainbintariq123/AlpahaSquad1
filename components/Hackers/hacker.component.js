import Link from 'next/link';
export default function Hackers() {
	const newsArray = [
		{
			para: 'Cody Brown Has a Broad Vision for Virtual Reality',
			time: '25 hr ago'	
		},
		{
			para: 'Visa Applications Pour In by Truckload Before Door',
			time: '25 hr ago'
		},
	]
	return (
		<>
			<div className="flex flex-col  bg-gray-400 h-screen">
			<div className="flex flex-row items-center justify-center"> 
				<div>
					<Link href="/card">
						<button className="focus-within:outline-none border bg-blue-700 rounded	text-white p-3">Card</button>
					</Link>
				</div>
				<div>
					<Link href="/mobile">
						<button className="focus-within:outline-none border bg-blue-700 rounded	text-white p-3">Mobile</button>
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
			<div className="flex flex-col h-screen items-center justify-center">
				<div className="bg-gray-50 flex flex-col m-auto rounded w-full sm:w-11/12 md:w-2/3  xl:w-1/4">
					<div className="ml-6">
						<p className="text-blue-500 text-xs pb-12 pt-4">LATEST NEWS</p>
					</div>
					<div className="lg:w-3/12 mb-3 md:w-2/6 ml-6 sm:w-1/2 w-3/5 xl:w-48">
						<p className="font-semibold text-xl"> Hackers  Leaks  From  Netflix Show Threaktens Networks </p>
					</div>
						{
							newsArray.map((news,key)=>{
								return (
									<div className="bg-white pb-5">
										{
											key == 0 &&  
												<p className="ml-6 pt-6 text-gray-400 text-justify text-xs">{news.time}</p>	
										}
										<div className="flex flex-row pt-5">
											<div className="d-flex flex ml-6 mr-5">
												<img src="/news.svg" alt="news1"></img>
											</div>
											<div className="flex flex-col">
												<div>
													<p className="font-medium lg:w-10/12 md:w-10/12 mt-3 text-xs xl:w-10/12 ">{news.para}</p>
												</div>
												<div>
													<p className="text-gray-400 text-justify text-xs">{news.time}</p>
												</div>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
			</div>
		</div>	
		</>
	)
}