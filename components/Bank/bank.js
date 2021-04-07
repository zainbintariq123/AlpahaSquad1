import Link from 'next/link';
import style from './bank.module.css';
export default function Bank() {
	return (
		<>
			<div className={`flex flex-col m-auto w-1/3 ${style.mainCard}`} >
				<div className="flex flex-row justify-between pt-3.5 px-3.5">
					<div>
						<p className="text-white font-medium">AlphaBank</p>	
					</div>
					<div>
						<Link href="/hacker">
							<img src="/wifi.svg"></img>
						</Link>
					</div>
				</div>
				<div className="px-3.5 mt-10">
					<p className="text-white">Henry Richardson</p>
				</div>
				<div className="px-3.5">
					<p className="text-white font-medium">4567  ****  ****  4501</p>	
				</div>
				<div className="flex flex-row justify-between pl-3.5 my-4">
					<div>
						<p className="text-white">04/23</p>
					</div>
					<div className="flex flex-row">
						<div className="mr-3">
							<img src="/masterCard.svg"></img>							
						</div>
						<div className="mr-4">	
							<p className="text-white">masterCard</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}