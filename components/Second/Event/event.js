import Link from 'next/link';
import style from './product.module.css';
export default function Event() {
	return (
		<>
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
					<div className="border rounded shadow-md absolute left-[34px] bottom-[84px] bg-white">
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
		</>
	)
}