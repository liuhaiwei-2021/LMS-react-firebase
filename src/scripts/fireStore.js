// NPM packages
import { doc, collection } from "firebase/firestore";
import { addDoc, getDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore";

// Project files
import { fireStore } from "./firebase";

// Methods
// -- Create
export async function createDocument(path, data) {
	let payload = { data: undefined, error: false };

	try {
		const documentPath = collection(fireStore, path);
		const document = await addDoc(documentPath, data);

		payload = { data: document.id, error: false };
	} catch (error) {
		payload = { data: error, error: true };
	}

	return payload;
}

export async function createDocumentWithId(path, id, data) {
	let payload = { data: undefined, error: false };

	try {
		const documentReference = doc(fireStore, path, id);
		await setDoc(documentReference, data);

		payload = { data: `Document with id ${id} created!`, error: false };
	} catch (error) {
		payload = { data: error, error: true };
	}

	return payload;
}

// -- Read
export async function readDocument(path, id) {
	const payload = { data: {}, error: null, loading: true };

	try {
		const documentPath = doc(fireStore, path, id);
		const document = await getDoc(documentPath);

		payload.data = document.data();
		payload.loading = false;
		console.log("firestore read document", payload.data);
	} catch (error) {
		payload.error = error;
		payload.loading = false;
	}
	console.log("firestore read payload", payload);
	return payload;
}

export async function readCollection(path) {
	const collectionPath = collection(fireStore, path);
	const snapshot = await getDocs(collectionPath);
	const documents = snapshot.docs.map((item) => {
		return { id: item.id, ...item.data() };
	});

	return documents;
}

// -- Update
export async function updateDocument(path, data) {
	const payload = { data: undefined, error: false };

	try {
		const id = data.id;
		const documentPath = doc(fireStore, path, id);
		await setDoc(documentPath, data);

		payload.data = "Succeed modifying document";
	} catch (error) {
		payload.error = true;
		payload.data = error;
	}

	return payload;
}

// -- Delete
export async function deleteDocument(path, id) {
	const payload = { data: undefined, error: false };

	try {
		const documentPath = doc(fireStore, path, id);

		await deleteDoc(documentPath);
		payload.data = "Succeed deleting document";
	} catch (error) {
		payload.error = true;
		payload.data = error;
	}

	return payload;
}
