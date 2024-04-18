const ContactForm = () => {
  return (
    <div className="w-[100%]">
      <form
        className="flex flex-col gap-y-7"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <div className="flex items-center gap-5">
          <input
            type="hidden"
            name="access_key"
            value="8d29ffbc-f08b-4b2a-901e-70b0b307a541"
          ></input>
          <input type="text" placeholder="Имя" name="First Name" />
          <input type="text" placeholder="Фамилия" name="Last Name" />
        </div>
        <input type="email" name="email" placeholder="Email" required />
        <textarea
          name="message"
          placeholder="Сообщение"
          cols={3}
          required
        ></textarea>
        <button className="text-xl text-white border border-secondary-color rounded-md p-[0.7rem] transition-all cursor-pointer  bg-main-color hover:bg-transparent hover:text-main-color ">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
