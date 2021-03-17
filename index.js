const testData = [
    { item: "phone", price: 15 },
    { item: "headphones", price: 6 }
];

let demoDB;
if (!window.indexedDB) {
    console.log("Your browser doesn't support indexedDB");
}
// Don't use a float for the second param of the open method
const request = window.indexedDB.open("a_demo_DB", 1);

// Handle success or error

request.onerror = function (event) {
    console.log("DATABASE ERROR:", event.target.errorCode);
}

request.onsuccess = function (event) {
    console.log("SUCESS:", event);
    demoDB = event.target.result;
    let objStore = demoDB.createObjectStore("items");
}
// This triggers when the version number increases in the open method
request.onupgradeneeded = function (event) {
    demoDB = event.target.result;
    // Handle add and removing object stores here
    // If there are no errors here onsucess will trigger next
}

let transaction = demoDB.transaction(["items"], "readwrite");









