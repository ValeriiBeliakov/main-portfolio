import ContactInfoCard from "./ContactInfoCard";
import { email, whatsApp } from "../../assets";
import ContactForm from "./ContactForm";
import Title from "../Title";

const Contacts = () => {
  return (
    <div className="my-auto" id="contacts">
      <div className="my-7">
        <Title text="Контакты 📨" className="flex flex-col items-center mb-8" />
        <div className="flex gap-5 tiny:flex-col-reverse sm:flex-row">
          <div style={{ flex: 1 }}>
            <ContactInfoCard iconUrl={email} text="valera08072006@mail.ru" />
            <ContactInfoCard iconUrl={whatsApp} text="+79253418053" />
          </div>

          <div style={{ flex: 1 }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
