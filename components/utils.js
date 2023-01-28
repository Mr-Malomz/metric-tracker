import { Client, Databases, Account, Functions } from 'appwrite';

const PROJECT_ID = 'REPLACE WITH PROJECT ID';
const DATABASE_ID = 'REPLACE WITH DATABASE ID';
const COLLECTION_ID = 'REPLACE WITH COLLECTION ID';
const FUNCTION_ID = 'REPLACE WITH FUNCTION ID';
const DOCUMENT_ID = 'REPLACE WITH DOCUMENT ID';

const client = new Client();

const databases = new Databases(client);

client.setEndpoint('http://localhost/v1').setProject(PROJECT_ID);

export const account = new Account(client);

export const getUserDetails = () =>
	databases.getDocument(DATABASE_ID, COLLECTION_ID, DOCUMENT_ID);

export const createSubscription = () => {
	const functions = new Functions(client);
	return functions.createExecution(FUNCTION_ID);
};

export const updateUserSubscription = (name, isSubscribed) => {
	const data = {
		name,
		isSubscribed,
	};
	return databases.updateDocument(
		DATABASE_ID,
		COLLECTION_ID,
		DOCUMENT_ID,
		data
	);
};
