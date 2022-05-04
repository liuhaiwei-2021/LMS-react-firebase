import { useState, useEffect } from "react";
import { readCollection } from "../scripts/fireStore";

function useFetch(collection) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		async function fetchData(collection) {
			setLoading(true);
			try {
				const response = await readCollection(collection);
				setData(response);
				console.log(data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		}
		fetchData(collection);
	}, [collection]);
	console.log("fetchData", data, error, loading);
	return { data, loading, error };
}

export default useFetch;
