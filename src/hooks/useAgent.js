import { useState, useEffect } from 'react';
import axios from 'axios';

export function useAgent(url, id) {
	const [agent, setAgent] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	useEffect(() => {
		setAgent();

		if (!id) return;

		setLoading(true);

		axios
			.get(url + id)

			.then(({ data: { data } }) => {
				setAgent(data);
			})

			.catch(error => setError(error))

			.finally(() => setLoading(false));
	}, [id]);

	return { agent, loading, error };
}
