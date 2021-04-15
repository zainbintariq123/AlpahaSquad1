import Head from 'next/head';
import Link from 'next/link';
// import style from './main.module.css'
export default function Solution() {
	return (
		<>
			<Head>
				<title>AquaSquad Task</title>
				<link rel="icon" href="/favicon.ico" />
				{/* <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" /> */}
			</Head>
			<main>

				<div className="flex pl-20 pt-36 pb-64">
					<div className="w-1/2">
						<img src="/fruit.svg"></img>
					</div>
					<div className="w-3/5">
						<div className="flex flex-col">
							<p className="text-[4rem] font-medium leading-[4.4rem]">Gather data to offer a bespoke solution</p>
							<p className="text-[1.75rem] pt-8 f-f-r">
								Here at Globex we take special care of
								what your organization needs instead of
								selling you a mass market tool that takes
								a one size fits all approach. I personally
								review each and every client business and 
								oversee the team that tailores a solution
							</p>
							<div className="flex flex-row pt-6">
								<div>
									<img src="/richel.png"></img>
								</div>
								<div className="flex flex-col items-center pl-3">
									<div>
										<p className="text-[1.75rem]">Rachel Dawson</p>
										<p>CEO, Globex Workspaces</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}