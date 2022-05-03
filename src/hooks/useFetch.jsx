import { useCallback, useEffect, useState } from "react";
import { readCollection } from "../scripts/firebase/fireStore";
import fireStore from "../scripts/firebase/firebase";

export default function useFetch(collection) {
	//Local state
	const [data, setData] = useState([]);
	const [status, setStatus] = useState(0);

	const fetchData = useCallback(
		async (database, collection) => {
			try {
				const response = await readCollection(database, collection);
				setData(response);
				setStatus(1);
			} catch (error) {
				setStatus(2);
			}
		},
		[collection]
	);

	useEffect(() => {
		fetchData(fireStore, collection);
	}, [fetchData]);
	return { data, status, fetchData };
}
