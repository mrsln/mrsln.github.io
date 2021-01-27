import { useMutation } from "react-query";

export default function NewsletterForm() {
  const mutation = useMutation<TODO, TODO, { email: string }>(({ email }) => {
    return fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email").toString();
    mutation.mutate({ email });
  };

  return (
    <form onSubmit={onSubmit} className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
      <div className="min-w-0 flex-1">
        <label htmlFor="cta_email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email"
          className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
          placeholder="Enter your email"
        />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-3">
        <button
          type="submit"
          className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
        >
          Subscribe me
        </button>
        <div className="text-white">
          {mutation.isLoading && "Subscribing..."}
          {mutation.isError && "Error occured"}
          {mutation.isSuccess && "Successful. Thank you!"}
        </div>
      </div>
    </form>
  );
}

type TODO = any;
