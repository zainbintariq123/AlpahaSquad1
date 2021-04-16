import Link from 'next/link';
import style from './footer.module.css';
export default function Footer() {
	return (
		<>
			<div className="flex flex-col items-center pt-72 hidden">
				<div>
					<p className="inline-block py-5 px-3.5 border text-center text-[2rem] m-0 bg-gray-900 text-white f-m-w">
						PR
					</p>
				</div>
				<div className="pt-5">
					<p className="font-medium text-2xl f-l font-bold">Build. Review. Ship</p>
				</div>
				<div className="flex pt-10">
					<div>
						<p className="text-base f-m">Download Now</p>
					</div>
					<div className="pl-6">
						<p className="f-m">Licence</p>
					</div>
				</div>
				<div className="flex pt-6"> 
					<div>
						<p className="f-m">About</p>	
					</div>
					<div className="pl-6">
						<p className="f-m">Features</p>	
					</div>
					<div className="pl-6">
						<p className="f-m">Pricing</p>	
					</div>
					<div className="pl-6">
						<p className="f-m">Careers</p>	
					</div>
					<div className="pl-6">
						<p className="f-m">Help</p>	
					</div>
					<div className="pl-6">
						<p className="f-m">Privacy Policy</p>	
					</div>
				</div>
				<div className="pt-5">
					<p className="f-m">&copy; 2020 Prodify. All rights reserved </p>
				</div>
				<div className="pt-9">
					<p className={`${style.line } px-72 h-[1px] w-auto`} />
				</div>
				<div className="flex pt-14 pb-4">
					<div>
						<button className="focus-within:outline-none">
							<img src="/AppStore.svg"></img>
						</button>
					</div>
					<div className="pl-4">
						<button className="focus-within:outline-none">
							<img src="/GooglePlay.svg"></img>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}