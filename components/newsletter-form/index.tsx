import { useMutation } from "react-query";
import classnames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

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

  const inputStateClasses = classnames({
    "bg-gray-200": mutation.isLoading,
    "bg-red-100": mutation.isError,
  });

  const buttonStateClasses = classnames({
    "opacity-70": mutation.isLoading,
  });

  return (
    <form onSubmit={onSubmit} className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
      <div className="min-w-0 flex-1">
        <label htmlFor="cta_email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email"
          className={`block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 ${inputStateClasses}`}
          placeholder="Enter your email"
          disabled={mutation.isLoading}
        />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-3">
        <button
          type="submit"
          className={`relative lg:w-48 h-12 block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10 ${buttonStateClasses}`}
          disabled={mutation.isLoading}
        >
          <AnimatePresence>
            <motion.div
              key={mutation.status}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
              transition={{ duration: 0.5 }}
            >
              {mutation.isIdle && "Subscribe me"}
              {mutation.isLoading && "Subscribing..."}
              {mutation.isError && "Try again"}
              {mutation.isSuccess && "Thank you!"}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>
    </form>
  );
}

type TODO = any;
