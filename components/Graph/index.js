import { gql,  useQuery } from "@apollo/client"
import { useState } from "react";
import Cartoons from './cartoons';

const EXCHANGE_RATES = gql` 
	query {
		characters(page:1) {
			info {
				count
				pages
			}
			results{
				name
				id
				location {
					id
					name
				}
				origin {
					id
					name
				}
				episode {
					id
					name
					air_date
				}
				image
			}
		}
	}	`
;
export default function Graph() {
	const { data, loading, error } = useQuery(EXCHANGE_RATES);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
	return <Cartoons cartoon = {data.characters.results} /> 
}