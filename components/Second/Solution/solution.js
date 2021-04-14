import Link from 'next/link';
// import style from './main.module.css'
export default function Solution() {
	return (
		<>
			<div className="grid grid-cols-2 pl-20 pt-36">
				<div className="w-1/2">
					<img src="/fruit.svg"></img>
				</div>
				<div className="w-3/5">
					<div className="flex flex-col">
						<p>Gather data to offer a bespoke solution</p>
						<p>
							Here at Globex we take special care of
							what your organization needs instead of
							selling you a mass market tool that takes
							a one size fits all approach. I personally
							review each and every client business and 
							oversee the team that tailores a solution
						</p>
						<div className="flex flex-row">
							<div>
								<img src="/richel.png"></img>
							</div>
							<div className="flex flex-col items-center pl-3">
								<div>
									<p>Rachel Dawson</p>
									<p>CEO, Globex Workspaces</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}