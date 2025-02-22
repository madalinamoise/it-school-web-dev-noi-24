const insertIbans = document.querySelector(".iban");
const insertBankNames = document.querySelector(".bank-name");
const insertAccountNumbers = document.querySelector(".account-number");
const insertUnique = document.querySelector(".unique");

async function getBanks() {
	const response = await fetch(
		"https://random-data-api.com/api/v2/banks?size=10"
	);
	const bankDetails = await response.json();
	console.log(bankDetails);
	return bankDetails;
}

function bankDetail(bankDetails, key) {
	return bankDetails.map((element) => element[key]);
}

async function displayBankData(key, container) {
	const banks = await getBanks();
	const existingP = container.querySelector("p");

	if (existingP) {
		container.removeChild(existingP);
	} else {
		const newItem = document.createElement("p");
		newItem.innerHTML = bankDetail(banks, key).join("<br>");
		console.log(newItem);
		container.appendChild(newItem);
	}
}
