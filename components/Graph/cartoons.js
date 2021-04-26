import { gql,  useQuery } from "@apollo/client"
import { useState } from "react";

export default function Cartoons({cartoon}) {
	return (
		<div className="flex flex-row flex-wrap container mx-auto">
			{
				cartoon.map((item,id) => (
					<div key={id} className="flex flex-col w-1/4 my-4">
						<div>
							<img src={item.image} className="border rounded-3xl"></img>
						</div>
						<div className="my-4">
							<p className="text-center">{item.name}</p>
						</div>
					</div>
				)
			)};	
		</div>
	)
}