import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.target);

      // ---- Replace with your Web3Forms Access Key ----
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        toast.error("Failed to send message. Try again!");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg">Connect with me</h4>
      <h2 className="text-center text-5xl">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I&apos;d love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <input
          type="hidden"
          name="subject"
          value="Praveen Portfolio - New form Submission"
        />
        <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
            required
            name="name"
          />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your Mobile Number"
            className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
            required
            name="mobile"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
            required
            name="email"
          />
          
        </div>

        <textarea
          rows="6"
          placeholder="Enter your message"
          className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30"
          required
          name="message"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`py-2 px-8 w-max flex items-center justify-between gap-2 
          bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 
          dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover 
          ${loading && "opacity-50 cursor-not-allowed"}`}
        >
          {loading ? "Sending..." : "Submit"}
          {!loading && (
            <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
          )}
        </button>
      </form>
    </div>
  );
}
