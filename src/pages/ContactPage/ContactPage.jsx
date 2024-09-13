import React from "react";
import Banner from "../../components/Banner/Banner";
import styles from "./ContactPage.module.css";
import locationIcon from "/images/map-maker.svg";
import phoneIcon from "/images/phone.svg";
import clockIcon from "/images/clock.svg";
import ContactForm from "../../components/ContactForm/ContactForm";
const ContactPage = () => {
  return (
    <>
      <Banner title="Contact" subtitle="Contact" />
      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2 className={styles.title}>Get In Touch With Us</h2>
            <p className={styles.subtitle}>
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.info}>
              <div className={styles.contactInfoItem}>
                <img
                  src={locationIcon}
                  alt="map icon"
                  className={styles.icon}
                />
                <div className={styles.text}>
                  <h3>Address</h3>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className={styles.contactInfoItem}>
                <img src={phoneIcon} alt="phone icon" className={styles.icon} />
                <div className={styles.text}>
                  <h3>Phone</h3>
                  <p>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className={styles.contactInfoItem}>
                <img src={clockIcon} alt="clock icon" className={styles.icon} />
                <div className={styles.text}>
                  <h3>Working Time</h3>
                  <p>
                    Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
            <ContactForm/>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
