import React, { useState } from 'react';
import contactValidationSchema from '../../validators/contactValidation';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = async () => {
    try {
      await contactValidationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const newErrors = err.inner.reduce((acc, error) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
      setErrors(newErrors);
      return false;
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (await validate()) {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  const getInputClassName = (inputName) => {
    return errors[inputName] ? `${styles.input} ${styles.inputError}` : styles.input;
  };

  return (
    <form onSubmit={handleOnSubmit} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Your name</label>
        <input
          type="text"
          placeholder='Abc'
          id="name"
          name='name'
          value={formData.name}
          onChange={handleOnChange}
          className={getInputClassName('name')}
        />
        <span className={styles.error}>{errors.name}</span>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Email address</label>
        <input
          type="text"
          placeholder='Abc@def.com'
          id="email"
          name='email'
          value={formData.email}
          onChange={handleOnChange}
          className={getInputClassName('email')}
        />
        <span className={styles.error}>{errors.email}</span>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.label}>Subject</label>
        <input
          type="text"
          placeholder='This is optional'
          id="subject"
          name='subject'
          value={formData.subject}
          onChange={handleOnChange}
          className={getInputClassName('subject')}
        />
        <span className={styles.error}>{errors.subject}</span>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea
          placeholder='Hi! I’d like to ask about'
          id="message"
          name='message'
          value={formData.message}
          onChange={handleOnChange}
          cols="30"
          rows="10"
          className={errors.message ? `${styles.textarea} ${styles.inputError}` : styles.textarea}
        />
        <span className={styles.error}>{errors.message}</span>
      </div>

      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default ContactForm;
