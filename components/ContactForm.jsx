/* eslint-disable no-shadow */
import { bool } from "prop-types";
import React, { useState } from "react";
import {
  Button,
  Dimmer,
  Form,
  Loader,
  Message,
  Segment,
} from "semantic-ui-react";

import styles from "../styles/Contact.module.css";

const ContactForm = ({ dark }) => {
  const [loading, setLoading] = useState(false);
  const initialValues = { name: "", email: "", message: "" };
  const initialError = { error: false, title: "", content: "" };
  const initialSuccess = { success: false, title: "", content: "" };
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(initialError);
  const [success, setSuccess] = useState(initialSuccess);

  const handleChange = (_, { name, value }) => {
    if (success.success) setSuccess(initialSuccess);
    if (error.error) setError(initialError);
    setValues({ ...values, [name]: value });
  };

  const sendMail = async (object) => {
    try {
      const response = await fetch(
        "https://clumsy-gmail.herokuapp.com/send/v2",
        {
          method: "POST",
          body: JSON.stringify(object),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };

  const showSuccess = () =>
    setSuccess({
      success: true,
      title: "Message sent successfully",
      content: "Hey there, I have received your message",
    });

  const showError = () =>
    setError({
      error: true,
      title: "Message Failed to send",
      content:
        "Oops! Sorry for the error. Till then, you can contact me on any of the links below.",
    });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const data = await sendMail({
        ...values,
        website: "https://rishabhpathak.vercel.app/contact",
        dark,
      });
      setLoading(false);
      if (data.err) {
        showError();
      } else {
        showSuccess();
        setValues(initialValues);
      }
    } catch (error) {
      setLoading(false);
      showError();
    }
  };

  return (
    <Dimmer.Dimmable
      as={Segment}
      inverted={dark}
      blurring
      dimmed={loading}
      className={styles.form}
    >
      <Dimmer active={loading} inverted={dark}>
        <Loader size="large">Sending Message...</Loader>
      </Dimmer>
      <Form
        inverted={dark}
        onSubmit={handleSubmit}
        size="large"
        success={success.success}
        error={error.error}
      >
        <Form.Group widths="equal">
          <Form.Input
            id="name"
            name="name"
            label="Enter your name:"
            placeholder="Your name?"
            value={values.name || ""}
            onChange={handleChange}
            required
          />
          <Form.Input
            id="email"
            name="email"
            label="Enter your email address:"
            placeholder="Your email?"
            value={values.email || ""}
            onChange={handleChange}
            required
            type="email"
          />
        </Form.Group>
        <Form.TextArea
          id="message"
          name="message"
          label="Message"
          placeholder="Wanna message me something...?"
          value={values.message || ""}
          onChange={handleChange}
          rows={5}
          required
        />
        <Button
          type="submit"
          content="Message Rishabh"
          inverted={dark}
          size="large"
          fluid
          disabled={loading}
        />
        {success.success && (
          <Message success header={success.title} content={success.content} />
        )}
        {error.error && (
          <Message error header={error.title} content={error.content} />
        )}
      </Form>
    </Dimmer.Dimmable>
  );
};
ContactForm.propTypes = {
  dark: bool.isRequired,
};
export default ContactForm;
