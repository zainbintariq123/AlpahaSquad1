import Link from 'next/link';
import style from './footer.module.css';
export default function Footer() {
	return (
		<>
			<div className="flex flex-col items-center pt-72">
				<div>
					<p className="inline-block py-5 px-3.5 border text-center text-4xl m-0 bg-gray-900 text-white">
						PR
					</p>
				</div>
				<div className="pt-5">
					<p className="font-medium text-2xl">Build. Review. Ship</p>
				</div>
				<div className="flex pt-10">
					<div>
						<p className="text-base">Download Now</p>
					</div>
					<div className="pl-6">
						<p>Licence</p>
					</div>
				</div>
				<div className="flex pt-6"> 
					<div>
						<p>About</p>	
					</div>
					<div className="pl-6">
						<p>Features</p>	
					</div>
					<div className="pl-6">
						<p>Pricing</p>	
					</div>
					<div className="pl-6">
						<p>Careers</p>	
					</div>
					<div className="pl-6">
						<p>Help</p>	
					</div>
					<div className="pl-6">
						<p>Privacy Policy</p>	
					</div>
				</div>
				<div className="pt-5">
					<p>&copy; 2020 Prodify. All rights reserved </p>
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
					<div>

					</div>
				</div>
			</div>
		</>
	)
}