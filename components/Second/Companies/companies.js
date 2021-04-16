import Link from 'next/link';
import style from './company.module.css';
export default function Company() {
	return (
		<>
			<div className="">
				<div className="pt-[11rem]"  >
					<p className={`${style.line } mx-[16rem] h-[1px] w-auto`} />
					<div className="flex pl-20 justify-center w-full pt-8">
						<div className="w-[16.188rem]">
							<img src="/google.png"></img>
						</div>
						<div className="w-[16.188rem]">
							<img src="/airbnb.svg"></img>
						</div>
						<div className="w-[16.188rem]">
							<img src="/hubspot.png"></img>
						</div>
						<div className="w-[16.188rem]" >
							<img src="/microsoft.svg"></img>
						</div>
					</div>
				</div>

				<div className="flex justify-center pt-56">
					<p className="text-[3.3rem] w-2/3 text-center font-bold f-l">
						"Thanks guys, keep up the good work! I'd be lost without Prodify.
						The very best. Prodify is both attractive and highly adaptable."
					</p>	
				</div>
				<div className="pt-20">
					<p className={`${style.textBen} text-center text-6xl font-bold f-l`} >- Ben P.</p>
				</div>	

				<div className="flex pl-20 pt-44">
					<div className="w-[19.563rem]">
						<div className="">
							<p className="text-[4rem] pt-6 font-bold f-l">40k +</p>
							<p className="text-[1.75rem] text-gray-400 f-f-r">Downloads</p>
						</div>
					</div>
					<div className="w-[19.563rem]">
						<div className="">
							<p className="text-[4rem] pt-6 font-bold f-l">200K</p>
							<p className="text-[1.75rem] text-gray-400 f-f-r">Users/Teams</p>
						</div>
					</div>	
					<div className="w-[19.563rem]">
						<div className="">
							<p className="text-[4rem] pt-6 font-bold f-l">958</p>
							<p className="text-[1.75rem] text-gray-400 f-f-r">Products Developed</p>
						</div>
					</div>
					<div className="w-[19.563rem]">
						<div className="">
							<p className="text-[4rem] pt-6 font-bold f-l">10</p>
							<p className="text-[1.75rem] text-gray-400 f-f-r"> Awards Bagged</p>
						</div>
					</div>
				</div>

				<div className="flex justify-center pt-72">
					<div className={`${style.member} flex w-[1062px] pt-16`}>
						<div className=" pl-12">
							<p className="text-[3rem] text-white w-[36.063rem] font-bold f-l">Become a member and start building the next big thing</p>	
							<button className="bg-white border focus-within:outline-none rounded shadow-md py-4 px-6 mt-12 mb-20 text-[#D53F8C] f-f-r font-semibold ">Join the community</button>
						</div>
						<div className="flex flex-col items-end w-full"> 
							<div className="flex justify-center justify-end pr-12">
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
							<div className="flex justify-end pr-12">
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