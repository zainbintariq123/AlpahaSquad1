import Link from 'next/link';
import style from './transaction.module.css';
import Bank from '../Bank/bank';
import data from "./data.json"
import { useState } from 'react';

export default function Transaction() {
	const [images,setImages]=useState(data.data)
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
	];
	return (	
		<div className="flex items-center justify-center bg-gray-400 w-auto">
			<div className="bg-white rounded">
		 		<p className="font-semibold pl-8 py-6 text-3xl text-base">Transaction History</p>
				<div className="overflow-x-scroll overflow-x-auto">
					<table class="divide-y divide-gray-200 bg-white w-auto">
						<thead>
							<tr>
								<th class="capitalize pl-8 py-3 text-left text-base font-medium text-gray-500 tracking-wider">
									Payment
								</th>
								<th class="capitalize pl-3 py-3 text-left text-base font-medium text-gray-500 tracking-wider">
									Order ID
										</th>
								<th class="capitalize pl-6 py-3 text-left text-base font-medium text-gray-500 tracking-wider">
									Date&Time
								</th>
								<th class="capitalize pl-6 py-3 text-left text-base font-medium text-gray-500 tracking-wider">
									Amount
								</th>
								<th class="capitalize pl-8 py-3 text-left text-base font-medium text-gray-500 tracking-wider">
									Status
								</th>
							</tr>
						</thead>
						<tbody>
							{
								historyData.map((data, key) => {
									return (
										<tr>
											<td className="whitespace-nowrap">
												<div class="flex items-center pt-3 pl-8">
													<div>
														<button className={style.paymentBtn}>
															<img src={images[key].path} alt="firstImage" />
														</button>
													</div>
													<div class="px-3">
														<div class="text-base pb-2">
															{data.name}
														</div>
													</div>
												</div>
											</td>
											<td class=" pl-3 py-2 whitespace-nowrap">
												<div class="text-base pt-1">
													ID: {data.order}
												</div>
											</td>
											<td class="pl-4 py-2 whitespace-nowrap">
												<span class="text-base px-2 text-sm">
													{data.dateTime}
												</span>
											</td>
											<td class={`pl-6 py-2 text-base whitespace-nowrap  text-sm ${data.status == 'completed' ? 'text-green-600' : 'text-red-600'}`}>
												{data.amount}
											</td>
											<td className="px-8">
												{
													data.status == 'completed' && 
														<div className="text-base bg-green-100 px-4 rounded-3xl text-center text-green-600 text-sm">
															{data.status}
														</div>	
												}
												{
													data.status == 'ready' &&
														<div className="text-base bg-yellow-100 px-4 rounded-3xl text-center text-yellow-600 text-sm">
															{data.status}
														</div>	
												}
												{
													data.status =='refund' &&
														<div className="text-base bg-red-100 px-4 rounded-3xl text-center text-red-600 text-sm">
															{data.status}
														</div>
												}
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
	)
} 