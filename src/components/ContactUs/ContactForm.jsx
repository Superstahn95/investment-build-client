function ContactForm() {
  return (
    <div className="bg-white w-full p-4 font-montserrat">
      <h2 className="font-bold text-2xl my-4 text-slate-800">
        Let&apos;s talk about your business.
      </h2>
      <form className="w-full">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Your name"
            className="p-4 text-sm rounded-md outline-none border w-full border-slate-800"
          />
        </div>
        <div className="mb-3 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Telephone"
            className="p-4 flex-1 text-sm rounded-md outline-none border w-full border-slate-800"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 flex-1 text-sm rounded-md outline-none border w-full border-slate-800"
          />
        </div>
        <div className="mb-3">
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Message"
            className="p-4 text-sm rounded-md outline-none border w-full border-slate-800"
          />
        </div>
        <div className="mb-3">
          <button className="bg-red-400 text-white font-bold rounded-md p-3 w-[150px]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
