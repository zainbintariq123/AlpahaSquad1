import Link from 'next/link';
// import style from './main.module.css'
export default function Tabs() {
	return (
		<>
			<div className="flex pl-20 pt-36 border">
				<div className="w-[1/4] shadow-md">
					<div className="w-1/2">
						<p className="text-[2rem] pl-6 pt-6">Download the app</p>
					</div>
					<div className="flex justify-end">
						<div className="py-6 ">
							<img src="/download.svg" className="pr-7"></img>
						</div>
					</div>
				</div>
				<div className="w-[1/4] rounded shadow-md mx-4">
					<div className="w-1/2">
						<p className="text-[2rem] pl-6 pt-6">Effortless onboarding</p>
					</div>
					<div className="flex justify-end">
						<div className="py-6">
							<img src="/home.svg" className="pr-7"></img>
						</div>
					</div>
				</div>	
				<div className="w-[1/4] rounded shadow-md mr-3">
					<div className="w-3/5">
						<p className="text-[2rem] pl-6 pt-6">Access from anywhere</p>
					</div>
					<div className="flex justify-end">
						<div className="py-6">
							<img src="/access.svg" className="pr-7"></img>
						</div>
					</div>
				</div>
				<div className="w-[1/4] rounded shadow-md">
					<div className="w-11/12">
						<p className="text-[2rem] pl-6 pt-6">Build & ship rapidly</p>
					</div>
					<div className="flex justify-end">
						<div className="py-6 ">  
							<img src="/ship.svg" className="pr-7"></img>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}