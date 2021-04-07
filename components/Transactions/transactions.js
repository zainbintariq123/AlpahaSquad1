import Link from 'next/link';
import style from './transaction.module.css';
import Bank from '../Bank/bank';
export default function Transaction() {
	const historyData = [
		{
			name: 'Amount Received',
			order: '1421412P - 24SGE2 - 876TBJK',
			dateTime: '28th Feb, 2021 | 03:52 a.m',
			amount: '+ $130',
			status: 'completed'
		},
		{
			name: 'Amount Refund',
			order: '1421412P - 24SGE2 - 876TBJK',
			dateTime: '27th Feb, 2021 | 08:48 p.m',
			amount: '+ $230',
			status: 'completed'
		},
		{
			name: 'Delivery Fee',
			order: '1421412P - 24SGE2 - 876TBJK',
			dateTime: '26th Feb, 2021 | 02:10 p.m',
			amount: '- $50',
			status: 'ready'
		},
		{
			name: 'Cancellation Refund',
			order: '1421412P - 24SGE2 - 876TBJK',
			dateTime: '26th Feb, 2021 | 02:10 p.m',
			amount: '- $95',
			status: 'refund'
		}
	]
	return (
		<>
			<div>
				<p className="font-medium mb-5 text-3xl text-base">Transaction History</p>
				<div class="flex flex-col">
					<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div class="shadow overflow-hidden sm:rounded-lg">
							<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
								<table class="min-w-full divide-y divide-gray-200 bg-white">
									<thead>
										<tr>
											<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Payment
											</th>
											<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Order ID
											</th>
											<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Date&Time
											</th>
											<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Amount
											</th>
											<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Status
											</th>
										</tr>
									</thead>
									<tbody class="bg-white">
										{
											historyData.map((data, key) => {	
												return (
													<tr>
														<td class="px-6 py-4 whitespace-nowrap">
															<div class="flex items-center">
																<div class="flex-shrink-0 h-10 w-10">
																	{
																		key == 0 && 
																			<Link href="/card">
																				<button className={style.paymentBtn}>
																					<img class="h-10 w-10"
																						src="/first.svg" alt="" />
																				</button>
																			</Link>
																	}
																	{
																		key == 1 && 
																			<button className={style.paymentBtn}>
																				<img class="h-10 w-10"
																					src="/second.svg" alt="" />
																			</button>
																	}
																	{
																		key == 2 && 
																			<button className={style.paymentBtn}>
																				<img class="h-10 w-10"
																					src="/third.svg" alt="" />
																			</button>
																	}
																	{
																		key == 3  && 
																			<button className={style.paymentBtn}>
																				<img class="h-10 w-10"
																					src="/fourth.svg" alt="" />
																			</button>
																	}
																</div>
																<div class="ml-4">
																	<div class="text-sm font-medium text-gray-900">
																		{data.name}
																	</div>	
																</div>
															</div>
														</td>
														<td class="px-6 py-4 whitespace-nowrap">
															<div class="text-sm text-gray-500">
																ID: {data.order}
															</div>
														</td>
														<td class="px-6 py-4 whitespace-nowrap">
															<span class="px-2 inline-flex text-xs leading-5 text-sm text-gray-500">
																{data.dateTime}
															</span>
														</td>
														<td  class= {`px-6 py-4 whitespace-nowrap text-sm ${data.status == 'completed' ? 'text-green-600' : 'text-red-600'}`}>
															{data.amount}
														</td>
														<td>
															<div className="bg-green-200  px-4 rounded-3xl text-center text-sm text-gray-500">
																{data.status}
															</div>
														</td>
													</tr>
												)
											})
										}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}