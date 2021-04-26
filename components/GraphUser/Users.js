export default function Users({user}) {
	return (
		<div className="flex flex-col">
		<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
		  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
			<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
			  <table className="min-w-full divide-y divide-gray-200">
				<thead className="bg-gray-50">
				  <tr>
					<th
					  scope="col"
					  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
					  Id
					</th>
					<th
					  scope="col"
					  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
					  Name
					</th>
					<th
					  scope="col"
					  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
					  UserName
					</th>
					<th
					  scope="col"
					  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
					  Phone
					</th>
					<th
					  scope="col"
					  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
					  website
					</th>
				  </tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
				  {user.map((item) => (
					<tr>
					  <td className="px-6 py-4 whitespace-nowrap">
						<div className="flex items-center">
						  <div className="">
								<div className="text-sm font-medium text-gray-900">{item.id}</div>
							</div>
						</div>
					  </td>
					  <td className="px-6 py-4 whitespace-nowrap">
						<div className="text-sm text-gray-900">{item.name}</div>
					  </td>
						<td className="px-6 py-4 whitespace-nowrap">
							<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800">
								{item.username}
							</span>
					  </td>
					  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.phone}</td>
					  <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
						<a href="#" className="text-indigo-600 hover:text-indigo-900">
							{item.website}
						</a>
					  </td> 
					</tr>
				  ))}
				</tbody>
			  </table>
			</div>
		  </div>
		</div>
	  </div>
	)
}