import Link from 'next/link';
import style from './product.module.css';
export default function Product() {
	return (
		<>
		
			<div className={`${style.back} relative`}>
				<div className="flex flex-wrap static sm:static md:absolute lg:absolute top-[-89px] px-10 ">
					<div className="w-40 sm:w-40  md:w-[1/4] lg:w-[1/4] shadow-md bg-white my-4 sm:my-4 md:my-0 lg:my-0">
						<div className="w-2/3">
							<p className="text-base sm:text-base md:text-[2rem] lg:text-[2rem] pl-6 font-bold pt-6 f-l">Download the app</p>
						</div>
						<div className="flex justify-end">
							<div className="py-6 ">
								<img src="/download.svg" className="pr-7"></img>
							</div>
						</div>
					</div>
					<div className="w-40 sm:w-40 md:w-[1/4] lg:w-[1/4] rounded shadow-md ml-3 sm:ml-3 lg:mx-4 bg-white my-4 sm:my-4 md:my-0 lg:my-0">
						<div className="w-2/3">
							<p className="text-base sm:text-base md:text-[2rem] lg:text-[2rem] pl-6 pt-6 pt-6 font-bold f-l">Effortless onboarding</p>
						</div>
						<div className="flex justify-end">
							<div className="py-6">
								<img src="/home.svg" className="pr-7"></img>
							</div>
						</div>
					</div>	
					<div className="w-40 sm:w-40 md:w-[1/4] lg:w-[1/4] rounded shadow-md mr-0 sm:mr-0 md:mr-3 lg:mr-3 bg-white">
						<div className="w-40 sm:w-40 md:w-2/3 lg:w-2/3">
							<p className="text-base sm:text-base md:text-[2rem] lg:text-[2rem] pl-6 pt-6 pt-6 f-l font-bold">Access from anywhere</p>
						</div>
						<div className="flex justify-end">
							<div className="py-6">
								<img src="/access.svg" className="pr-7"></img>
							</div>
						</div>
					</div>
					<div className="w-40 sm:w-40 md:w-[1/4] lg:w-[1/4] rounded shadow-md bg-white ml-3">
						<div>
							<p className="text-base sm:text-base md:text-[2rem] lg:text-[2rem] pl-6 pt-6 pt-6 f-l font-bold">Build & ship rapidly</p>
						</div>
						<div className="flex justify-end">
							<div className="py-6 ">  
								<img src="/ship.svg" className="pr-7"></img>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap pl-20 pt-10 sm:pt-10 md:pt-80 lg:pt-80">
					<div className="w-full sm:w-full md:w-2/3 lg:w-2/3">
						<p className="text-4xl sm:text-4xl md:text-[4rem] lg:text-[4rem] leading-9 sm:leading-9 md:leading-[4.4rem] lg:leading-[4.4rem] font-bold f-l px-5 sm:px-5 md:px-0 lg:px-0 ">Boost adoption of product and services</p>	
						<p className="text-base sm:text-base md:text-[1.75rem] lg:text-[1.75rem] pt-8 w-full sm:w-full md:w-11/12 lg:w-11/12 f-f-r text-justify px-5 sm:px-5 md:px-0 lg:mx-0">
							Here at Globex we take special care of what your organization
							needs instead of selling you a mass market tool that takes a
							one size fits all approach. I personally review each and every
							client business and oversee the team that tailores a solution
						</p>

						<p 
							className="inline-flex pt-10 text-[#D53F8C] f-f-r font-semibold pl-6 sm:pl-6 md:pl-0 lg:pl-0">
							Lets Get Started 
							<span className="mt-1 ml-2">
								<img src="/next.svg"></img>
							</span>   

						</p>
					</div>	

					<div className="relative">
						<img src="/boost.svg"></img>
						<div className="border rounded shadow-md absolute left-[34px] bottom-[-80px] bg-white">
							<div className="flex pt-6 pl-6">
								<div>
									<img className={`${style.sales} p-3.5 rounded border `} src="/group.svg"></img>
								</div>
								<div className="pl-4 pl-4 w-3/5">
									<p className="text-2xl mb-0">2,330</p>
									<p className="text-sm text-gray-500">Avg Sales</p>
								</div>
								<div className="flex flex-col w-1/4">
									<div className="flex">
										<div>
											<img src="/index.svg" className="mr-3 mt-2" ></img>
										</div>
										<div>
											<p className="text-green-700">7.2%</p>
										</div>
									</div>
									<div>
										<p className="text-green-700">Increase</p>
									</div>
								</div>
							</div>
							<img src="/progress.svg " className="px-6 pt-[2.313rem]"></img>
							<p className="pl-6 pt-[1.188rem]">Yearly Goal</p>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap pt-10 sm:pt-10 md:pt-[11.375rem] lg:pt-[11.375rem]"> 
					<div className="pl-0 sm:pl-0 md:pl-11 lg:pl-11 relative">
						<img src="/Event.svg"></img>
						<div className="absolute bg-white p-4 rounded-md shadow-md left-[4.5rem] top-[24.5rem]">
							<div className="pt-6">
								<p className="text-2xl font-medium">New Event</p>
							</div>
							<div className="bg-[#ED8936] h-[6px] rounded-full w-[11.625rem] mt-6"></div>
							<div className="bg-gray-200 h-[12px] w-[16.188rem] rounded-full mt-4"></div>	
							<div className="bg-gray-200 h-[12px] w-[19.563rem] rounded-full mt-3"></div>
							<div className="bg-gray-200 h-[12px] w-[19.563rem] rounded-full mt-3"></div>
							<hr className="py-.8 bg-gray-200 mt-3.5 " />

							<div className="flex mt-4">
								<div>
									<button className={`${style.eventBtn}`}>
										<p className="h-[6px] w-[100px] rounded bg-white m-3"></p>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full sm:w-full md:w-2/3 lg:w-2/3 pl-0 sm:pl-0 md:pl-20 lg:pl-20 pt-10 sm:pt-10 md:pt-0 lg:pt-0">
						<p className="text-4xl sm:text-4xl md:text-[4rem] lg:text-[4rem] leading-9 sm:leading-9 md:leading-[4.4rem] lg:leading-[4.4rem] font-bold f-l px-5 sm:px-5 md:px-0 lg:px-0 ">Stay up to date with how you’re performing</p>	
						<p className="text-base sm:text-base md:text-[1.75rem] lg:text-[1.75rem] pt-8 w-full sm:w-full md:w-11/12 lg:w-11/12 f-f-r text-justify px-5 sm:px-5 md:px-0 lg:mx-0">
							Here at Globex we take special care of what your organization needs instead of
							selling you a mass market tool that takes a one size fits all approach.
							I personally review each and every client business and oversee the team
							that tailores a solution
						</p>

						<p 
							className="inline-flex pt-10 text-[#D53F8C] f-f-r font-semibold pl-6 sm:pl-6 md:pl-0 lg:pl-0">
							Lets Get Started 
							<span className="mt-1 ml-2">
								<img src="/next.svg"></img>
							</span>   
						</p>

					</div>
				</div>
				<div className="flex flex-wrap pl-0 sm:pl-0 md:pl-20 lg:pl-20 pt-10 sm:pt-10 md:pt-40 lg:pt-10 mt-7">
					<div className="w-full sm:w-full md:w-11/12 lg:w-11/12 mr-0 sm:mr-0 md:mr-20 lg:mr-20">
						<p className="text-4xl sm:text-4xl md:text-[4rem] lg:text-[4rem] leading-9 sm:leading-9 md:leading-[4.4rem] lg:leading-[4.4rem] font-bold f-l px-5 sm:px-5 md:px-0 lg:px-0 ">Easily manage sales through our invoicing system</p>	
						<p className="text-base sm:text-base md:text-[1.75rem] lg:text-[1.75rem] pt-8 w-full sm:w-full md:w-11/12 lg:w-11/12 f-f-r text-justify px-5 sm:px-5 md:px-0 lg:mx-0">
							Here at Globex we take special care of what your organization needs instead
							of selling you a mass market tool that takes a one size fits all approach.
							I personally review each and every client business and oversee the team
							that tailores a solution
						</p>

						<p 
							className="inline-flex pt-10 text-[#D53F8C] f-f-r font-semibold pl-6 sm:pl-6 md:pl-0 lg:pl-0">
							Lets Get Started 
							<span className="mt-1 ml-2">
								<img src="/next.svg"></img>
							</span>   
						</p>

					</div>	
					<div className="relative">
						<img src="/invoice.svg"></img>
						<div className="border rounded shadow-md absolute left-[13px] bottom-[-110px] bg-white p-[1.103rem] w-[17.5rem]">
							<p className="text-[1.125rem]">Invoice # 35RD87</p>	
							<p className="text-xs text-gray-400 pt-2"> Assigned to: Josh Rollins  </p>
							<p className="inline-flex text-sm pt-5"> <img src="/user.svg"></img> <span className="ml-2">Specter Consultancy</span> </p>
							<div>
								<p className="inline-flex text-sm pt-3"> <img src="/dollar.png"></img> <span className="ml-2"> 2,354 USD </span></p>
							</div>
							<div className="pt-5">
								<button className={`${style.sales} inline-flex text-white text-xs py-2 pl-3.5` }>
									View Invoice <span> <img src="/productTick.svg" className="mt-1 px-2"></img></span>  
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}