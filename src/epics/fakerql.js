import { Observable } from 'rxjs';
import gql from 'graphql-tag';

import { client } from '../utilities/apollo';

const fakerFulfilled = ({ data }) => ({ type: 'FAKER_FULFILLED', data });
const fakerRejected = err => ({ type: 'FAKER_REJECTED', err });
export const faker = action$ =>
	action$.ofType('FAKER_REQUESTED')
		.mergeMap(() =>
			Observable.fromPromise(
				client.query({
					query: gql`
					query {
						allTodos(count: 10) {
							title
						}
					}`
				})
			)
				.map(fakerFulfilled)
				.catch(fakerRejected));
