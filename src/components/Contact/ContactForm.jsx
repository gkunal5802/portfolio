import { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const StyledForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const StyledTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
`;

const StyledInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const StyledInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const StyledButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

function ContactForm() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
    //   .then((result) => {
    //     setOpen(true);
    //     form.current.reset();
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  };
  return (
    <StyledForm ref={form} onSubmit={handleSubmit}>
      <StyledTitle>Email Me 🚀</StyledTitle>
      <StyledInput placeholder="Your Email" name="from_email" />
      <StyledInput placeholder="Your Name" name="from_name" />
      <StyledInput placeholder="Subject" name="subject" />
      <StyledInputMessage placeholder="Message" rows="4" name="message" />
      <StyledButton type="submit" value="Send" />
    </StyledForm>
  );
}

export default ContactForm;
