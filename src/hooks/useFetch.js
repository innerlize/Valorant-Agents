import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetch(url) {
	const [agents, setAgents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		setLoading(true);

		axios
			.get(url)

			.then(({ data: { data } }) => {
				setAgents(data);
			})

			.catch(error => setError(error))

			.finally(() => setLoading(false));
	}, []);

	return { agents, loading, error };
}
