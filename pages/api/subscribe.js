import fetch from "node-fetch";

export default async function subscribeHandler(req, res) {
  if (req.method !== "POST") {
    res
      .status(400)
      .json({ status: 400, payload: "Only POST method is supported" });
    return;
  }

  try {
    const { email } = req.body;
    await subscribe({ email });
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ success: true, payload: email });
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: 500, payload: e.toString() });
  }
}

async function subscribe({ email }) {
  console.log(email);
  const response = await fetch(
    `https://api.convertkit.com/v3/forms/1980147/subscribe`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        api_key: "LlBVJoxCPnmulhAOW9bIPg",
        email,
      }),
    }
  );
  const reply = await response.json();
  if (!reply.subscription) {
    throw new Error(`Unexpected convertkit reply: ${JSON.stringify(reply)}`);
  }
}
