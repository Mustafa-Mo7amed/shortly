const TOKEN = "27c478fc62c3ba5def301e85ebb1bee708d62cbb";

export async function shortenUrl(url) {
  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      long_url: url,
      domain: "bit.ly",
      group_guid: "Bqae4mZfQlD",
    }),
  });
  return response.json();
}
