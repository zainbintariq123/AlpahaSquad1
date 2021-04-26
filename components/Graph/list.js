import { useQuery, gql } from '@apollo/client';
const FEED_QUERY = gql
`	
	{
  	characters(page : 1) {
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
  }
`