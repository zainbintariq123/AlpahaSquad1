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
				<div className="flex flex-wrap pl-0 sm:pl-0 md:pl-20 lg:pl-20  pt-36 pb-64">
					<div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
						<img src="/fruit.svg"></img>
					</div>
					<div className="w-full sm:w-full md:w-3/5 lg:w-3/5">
						<div className="flex flex-col">
							<p className="px-6 sm:px-6 md:px-0 lg:px-0 text-[2rem] sm:text-[2rem] md:text-[4rem] font-bold leading-8 sm:leading-8 md:leading-[4.4rem]  f-l">Gather data to offer a bespoke solution</p>
							<p className=" px-6 sm:px-6 md:px-0 lg:px-0 text-base sm:text-base md:text-[1.75rem] lg:text-[1.75rem] pt-8 f-f-r">
								Here at Globex we take special care of
								what your organization needs instead of
								selling you a mass market tool that takes
								a one size fits all approach. I personally
								review each and every client business and 
								oversee the team that tailores a solution
							</p>
							<div className="flex flex-row pt-6 pl-6 sm:pl-6 md:pl-0 lg:pl-0">
								<div>
									<img src="/richel.png"></img>
								</div>
								<div className="flex flex-col items-center justify-center pl-3">
									<div>
										<p className=" sm:text:base md:text-[1.75rem] f-l">Rachel Dawson</p>
										<p className="f-f-r text-sm sm:text-sm md:text-base">CEO, Globex Workspaces</p>
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