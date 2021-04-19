import Link from 'next/link';
import style from './company.module.css';
export default function Company() {
	return (
		<>
			<div className="">
				<div className="pt-[11rem] mx-4 sm:mx-4 md:mx-0 lg:mx-0">
					<p className={`${style.line } mx-[16rem] h-[1px] w-auto`} />
					<div className="flex flex-wrap pl-0 sm:pl-0 md:pl-20 lg:pl-20 justify-center w-full pt-8">
						<div className="w-1/2 sm:w-1/2  md:w-1/4 lg:w-1/4">
							<img src="/google.png"></img>
						</div>
						<div className="w-1/2 sm:w-1/2  md:w-1/4 lg:w-1/4">
							<img src="/airbnb.svg"></img>
						</div>
						<div className="w-1/2 sm:w-1/2  md:w-1/4 lg:w-1/4 pt-6 sm:pt-6 md:pt-0 lg:pt-0">
							<img src="/hubspot.png"></img>
						</div>
						<div className="w-1/2 sm:w-1/2  md:w-1/4 lg:w-1/4 pt-6 sm:pt-6 md:pt-0 lg:pt-0" >
							<img src="/microsoft.svg"></img>
						</div>
					</div>
				</div>

				<div className="flex justify-center pt-36 sm:pt-36 md:pt-56 lg:pt-56">
					<p className="text-[2rem] sm:text-[2rem] md:text-[3rem] lg:text-[3.3rem] w-full sm:w-full md:full lg:w-2/3 leading-[3.2rem] sm:leading-[3.2rem] md:leading-[3.2rem] lg:leading-[4.4rem] text-center font-bold f-l">
						"Thanks guys, keep up the good work! I'd be lost without Prodify.
						The very best. Prodify is both attractive and highly adaptable."
					</p>	
				</div>
				<div className="pt-20">
					<p className={`${style.textBen} text-center text-6xl font-bold f-l`} >- Ben P.</p>
				</div>	

				<div className="flex pl-20 pt-44 hidden">
					<div className="w-[19.563rem]">
						<div className="">
							<p className="text-[4rem] pt-6 font-bold f-l">40k +</p>
							<p className="text-base sm:text-base md:text-[1.75rem] lg:text-[1.75rem] text-gray-400 f-f-r">Downloads</p>
						</div>
					</div>
					<div className="w-[19.563rem]">
						<div className="">
							<p className="text-[4rem] pt-6 font-bold f-l">200K</p>
							<p className="text-base sm:text-base md:text-[1.75rem] lg:text-[1.75rem] text-gray-400 f-f-r">Users/Teams</p>
						</div>
					</div>	
					<div className="w-[19.563rem]">
						<div className="">
							<p className="text-4xl sm:text-4xl md:text-[4rem] lg:text-[4rem] pt-6 font-bold f-l">958</p>
							<p className="text-base sm:text-base md:text-[1.75rem] lg:text-[1.75rem]  text-gray-400 f-f-r">Products Developed</p>
						</div>
					</div>
					<div className="w-[19.563rem]">
						<div className="">
							<p className="text-[4rem] pt-6 font-bold f-l">10</p>
							<p className="text-base sm:text-base md:text-[1.75rem] lg:text-[1.75rem]  text-gray-400 f-f-r"> Awards Bagged</p>
						</div>
					</div>
				</div>

				<div className="flex justify-center pt-36 sm:pt-36 md:pt-72 lg:pt-72 ">
					<div className={`${style.member} flex w-[1062px] flex-wrap pt-16 pb-16`}>
						<div className="pl-0 sm:pl-0 md:pl-12 lg:pl-12 text-center sm:text-center md:text-start lg:text-start w-full sm:w-full md:w-2/3 lg:w-2/3 ">
							<p className="text-3xl sm:text-3xl md:text-[2rem] lg:text-[3rem] text-white w-full sm:w-full md:w-full lg:w-[36.063rem] font-bold f-l">Become a member and start building the next big thing</p>	
							<button className="bg-white border focus-within:outline-none rounded shadow-md py-4 px-6 mt-12 mb-20 text-[#D53F8C] f-f-r font-semibold ">Join the community</button>
						</div>
						<div className="flex flex-col items-center sm:items-center md:items-end lg:items-end w-full sm:w-full md:w-1/4 lg:w-1/4"> 
							<div className="flex justify-center justify-end pr-0 sm:p-0  md:pr-[2.5rem] lg:pr-12">
								<div>
									<img src="/avatar.svg" className="w-16 h-16"></img>
								</div>
								<div>
									<img src="/avatar1.svg" className="w-16 h-16"></img>
								</div>
							</div>
							<div className="flex justify-end ">
								<div>
									<img src="/avatar.svg"></img>
								</div>
								<div>
									<img src="/avatar1.svg"></img>
								</div>
								<div>
									<img src="/avatar2.svg"></img>
								</div>
							</div>
							<div className="flex justify-end pr-0 sm:p-0  md:pr-[2.5rem] lg:pr-12">
								<div>
									<img src="/avatar.svg" className="w-16 h-16"></img>
								</div>
								<div>
									<img src="/avatar2.svg" className="w-16 h-16"></img>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}