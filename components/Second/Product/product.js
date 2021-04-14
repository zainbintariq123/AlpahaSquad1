import Link from 'next/link';
import style from './product.module.css';
export default function Product() {
	return (
		<>
			<div>
				<div className="flex pl-20 pt-40">
					<div className="w-2/3">
						<p className="text-[4rem] leading-[4.4rem]">Boost adoption of product and services</p>	
						<p className="text-[1.75rem] pt-8">
							Here at Globex we take special care of what your organization
							needs instead of selling you a mass market tool that takes a
							one size fits all approach. I personally review each and every
							client business and oversee the team that tailores a solution
						</p>

						<p 
							className="inline-flex pt-10 text-[#D53F8C]">
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
				<div className="flex pt-[11.375rem]"  > 
					<div className="pl-11 relative">
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
					<div className="w-2/3 pl-20">
						<p className="text-[4rem] leading-[4.4rem]">Stay up to date with how you’re performing</p>	
						<p className="text-[1.75rem] pt-8">
							Here at Globex we take special care of what your organization needs instead of
							selling you a mass market tool that takes a one size fits all approach.
							I personally review each and every client business and oversee the team
							that tailores a solution
						</p>

						<p 
							className="inline-flex pt-10 text-[#D53F8C]">
							Lets Get Started 
							<span className="mt-1 ml-2">
								<img src="/next.svg"></img>
							</span>   
						</p>

					</div>
				</div>
				<div className="flex pl-20 pt-40 mt-7">
					<div className="w-2/3 mr-20">
						<p className="text-[4rem] leading-[4.4rem]">Easily manage sales through our invoicing system</p>	
						<p className="text-[1.75rem] pt-8">
							Here at Globex we take special care of what your organization needs instead
							of selling you a mass market tool that takes a one size fits all approach.
							I personally review each and every client business and oversee the team
							that tailores a solution
						</p>

						<p 
							className="inline-flex pt-10 text-[#D53F8C]">
							Lets Get Started 
							<span className="mt-1 ml-2">
								<img src="/next.svg"></img>
							</span>   
						</p>

					</div>	
					<div className="relative">
						<img src="/invoice.svg"></img>
						<div className="border rounded shadow-md absolute left-[62px] bottom-[-110px] bg-white p-[1.103rem] w-[17.5rem]">
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