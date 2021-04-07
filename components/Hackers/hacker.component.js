export default function Hackers() {
	const newsArray = [
		{
			para: 'Hackers  Leaks  From  Netflix Show Threaktens Networks',
			time: '25 hr ago'	
		},
		{
			para: 'Hackers  Leaks  From  Netflix Show Threaktens Networks',
			time: '25 hr ago'
		},
		{
			para: 'Hackers  Leaks  From  Netflix Show Threaktens Networks',
			time: '25 hr ago'
		}
	]
	return (
		<>
			<div className="bg-gray-50 flex flex-col m-auto w-1/3">
				<div className="ml-6">
					<p className="text-blue-500">LATEST NEWS</p>
				</div>
				<div className="ml-6 mt-9 mb-7 w-3/5">
					<p className="font-bold text-2xl"> Hackers  Leaks  From  Netflix Show Threaktens Networks </p>
				</div>
					{
						newsArray.map((news,key)=>{
							return (
								<div className="bg-white">
									{
										key == 0 &&  
											<p className="ml-6 mt-3">{news.time}</p>	
									}
									<div className="flex flex-row">
										<div className="d-flex flex ml-6 mr-5">
											<img src="/news.svg" alt="news1"></img>
										</div>
										<div className="flex flex-col">
											<div>
												<p className="font-semibold mt-3">{news.para}</p>
											</div>
											<div>
												<p className="text-gray-400 text-justify">{news.time}</p>
											</div>
										</div>
									</div>
								</div>


							)
						})
					}
				</div>
		</>
	)
}