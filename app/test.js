
import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setProject('arachnid'); // Your project ID

const account = new Account(client);

const promise = account.create('[USER_ID]', 'email@example.com', '');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});


export { client, account, ID };