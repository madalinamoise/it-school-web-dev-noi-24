const showSingleUser = document.querySelector(".user");
const showMultipleUsers = document.querySelector(".users");
const newlyCreatedUser = document.querySelector(".created-user");
const updatedUser = document.querySelector(".updated-user");

async function getUser() {
	const responseData = await fetch("https://reqres.in/api/users/2");
	const data = await responseData.json();
	console.log(data.data);
	return data.data;
}

async function getUsers() {
	const responseData = await fetch("https://reqres.in/api/users");
	const data = await responseData.json();
	console.log(data.data);

	return data.data;
}
// Array de users, folosim map sa gasim ceea ce ne intereaza
function usersDetails(data, key) {
	return data.map((element) => element[key]);
}

// Doar un singur element returnat ==> acessam direct key-ul dorit
function userDetails(data, key) {
	return data[key];
}

async function singleUserData(key, container) {
	const users = await getUser();
	const existingP = container.querySelector("p");

	if (existingP) {
		container.removeChild(existingP);
	} else {
		const newItem = document.createElement("p");
		newItem.innerHTML = userDetails(users, key);
		container.appendChild(newItem);
	}
}

async function multipleUsersData(key, container) {
	const users = await getUsers();
	const existingP = container.querySelector("p");

	if (existingP) {
		container.removeChild(existingP);
	} else {
		const newItem = document.createElement("p");
		newItem.innerHTML = usersDetails(users, key).join("<br>");
		container.appendChild(newItem);
	}
}

async function postUser() {
	const responseData = await fetch("https://reqres.in/api/users", {
		method: "POST",
		body: JSON.stringify({
			id: 7,
			email: "elefant@tralala.ro",
			first_name: "Elefantul",
			last_name: "Cici",
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const data = await responseData.json();
	return data;
}

async function showCreatedUser(container) {
	const newUser = await postUser();
	const existingP = container.querySelector("p");

	if (existingP) {
		container.removeChild(existingP);
	} else {
		const newItemEmail = document.createElement("p");
		const newItemFirstName = document.createElement("p");
		const newItemLastName = document.createElement("p");

		newItemEmail.innerHTML = `Email: ${newUser.email}`;
		newItemFirstName.innerHTML = `First Name: ${newUser.first_name}`;
		newItemLastName.innerHTML = `Last Name: ${newUser.last_name}`;

		container.appendChild(newItemEmail);
		container.appendChild(newItemFirstName);
		container.appendChild(newItemLastName);
	}
}

async function patchUser() {
	const responseData = await fetch("https://reqres.in/api/users/2", {
		method: "PATCH",
		body: JSON.stringify({
			id: 7,
			email: "ratustele@mele.ro",
			first_name: "Ratustele",
			last_name: "",
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const data = await responseData.json();
	return data;
}

async function showUpdateddUser(container) {
	const updatedUser = await patchUser();
	const existingP = container.querySelector("p");

	if (existingP) {
		container.removeChild(existingP);
	} else {
		const newItemEmail = document.createElement("p");
		const newItemFirstName = document.createElement("p");
		const newItemLastName = document.createElement("p");

		newItemEmail.innerHTML = `Email: ${updatedUser.email}`;
		newItemFirstName.innerHTML = `First Name: ${updatedUser.first_name}`;
		newItemLastName.innerHTML = `Last Name: ${updatedUser.last_name}`;

		container.appendChild(newItemEmail);
		container.appendChild(newItemFirstName);
		container.appendChild(newItemLastName);
	}
}
