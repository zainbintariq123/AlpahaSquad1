import Link from 'next/link';
import style from './bank.module.css';
export default function Bank() {
	return (
		<>
			<div className="flex items-center justify-center h-screen">
				<div className={`flex flex-col my-auto lg:w-2/6 md:w-2/5 sm:w-2/4 w-11/12 w-2/5 w-3/12 xl:w-1/4 ${style.mainCard}`} >
					<div className="flex flex-row justify-between pt-3.5 px-8">
						<div>
							<p className="font-semibold text-white text-xl">AlphaBank</p>	
						</div>
						<div>
							<Link href="/hacker">
								<img src="/wifi.svg"></img>
							</Link>
						</div>
					</div>
					<div className="pl-8 pt-14">
						<p className="font-medium text-base text-white">Henry Richardson</p>
					</div>
					<div className="pl-8">
						<p className="font-medium font-semibold text-2xl text-white">4567  ****  ****  4501</p>	
					</div>
					<div className="flex flex-row justify-between px-8 my-4">
						<div>
							<p className="text-white text-xl">04/23</p>
						</div>
						<div className="flex flex-row">
							<div className="mr-3 pt-1">
								<img src="/masterCard.svg"></img>							
							</div>
							<div className="">	
								<p className="text-white">masterCard</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}