import SectionTitle from "./SectionTitle";
import Form from "./Form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py:4 scroll-mt-20 bg-hero-light px-5 py-16 dark:bg-hero-dark"
    >
      <SectionTitle
        title="CONTACT"
        desc="I'm eager to connect or discuss collaborations. Reach out through the form below and I'll respond soon."
      />
      <Form />
    </section>
  );
};

export default Contact;
