import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { contactStyles } from "./styles";

const Theme37Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    inquiryType: "",
    subject: "",
    message: "",
  });

  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Newsletter subscription:", email);
  };

  return (
    <section style={contactStyles.section}>
      <div style={contactStyles.container}>
        {/* Hero Section */}
        <div style={contactStyles.hero}>
          <h1 style={contactStyles.heroTitle}>Get In Touch</h1>
          <p style={contactStyles.heroSubtitle}>
            Connect for collaboration opportunities, speaking engagements, or to
            discuss technology leadership and digital innovation initiatives.
          </p>
        </div>

        {/* Contact Form & Info */}
        <div style={contactStyles.contactGrid}>
          {/* Contact Form */}
          <div style={contactStyles.formSection}>
            <div style={contactStyles.formCard}>
              <div style={contactStyles.formHeader}>
                <h2 style={contactStyles.formTitle}>Send a Message</h2>
                <p style={contactStyles.formSubtitle}>
                  I'd love to hear from you. Fill out the form below and I'll
                  get back to you as soon as possible.
                </p>
              </div>
              <form onSubmit={handleSubmit} style={contactStyles.form}>
                <div style={contactStyles.formRow}>
                  <div style={contactStyles.inputGroup}>
                    <label style={contactStyles.label}>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      style={contactStyles.input}
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div style={contactStyles.inputGroup}>
                    <label style={contactStyles.label}>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      style={contactStyles.input}
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div style={contactStyles.inputGroup}>
                  <label style={contactStyles.label}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={contactStyles.input}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div style={contactStyles.inputGroup}>
                  <label style={contactStyles.label}>Organization</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    style={contactStyles.input}
                    placeholder="Your company or organization"
                  />
                </div>

                <div style={contactStyles.inputGroup}>
                  <label style={contactStyles.label}>Type of Inquiry</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    style={contactStyles.select}
                    required
                  >
                    <option value="">Select inquiry type</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="collaboration">
                      Collaboration Opportunity
                    </option>
                    <option value="media">Media Interview</option>
                    <option value="consulting">Consulting Request</option>
                    <option value="partnership">Partnership Proposal</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={contactStyles.inputGroup}>
                  <label style={contactStyles.label}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={contactStyles.input}
                    placeholder="Brief subject of your message"
                    required
                  />
                </div>

                <div style={contactStyles.inputGroup}>
                  <label style={contactStyles.label}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={contactStyles.textarea}
                    placeholder="Please provide details about your inquiry, including any specific topics, dates, or requirements..."
                    rows={6}
                    required
                  />
                </div>

                <button type="submit" style={contactStyles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div style={contactStyles.infoSection}>
            {/* Direct Contact */}
            <div style={contactStyles.infoCard}>
              <h3 style={contactStyles.infoTitle}>Contact Information</h3>
              <div style={contactStyles.infoList}>
                <div style={contactStyles.infoItem}>
                  <div style={contactStyles.iconWrapper}>
                    <Mail size={18} style={contactStyles.icon} />
                  </div>
                  <div>
                    <p style={contactStyles.infoLabel}>Email</p>
                    <p style={contactStyles.infoValue}>
                      contact@pannerselvam.com
                    </p>
                  </div>
                </div>

                <div style={contactStyles.infoItem}>
                  <div style={contactStyles.iconWrapper}>
                    <Phone size={18} style={contactStyles.icon} />
                  </div>
                  <div>
                    <p style={contactStyles.infoLabel}>Office</p>
                    <p style={contactStyles.infoValue}>+91 11 2301 5000</p>
                  </div>
                </div>

                <div style={contactStyles.infoItem}>
                  <div style={contactStyles.iconWrapper}>
                    <MapPin size={18} style={contactStyles.icon} />
                  </div>
                  <div>
                    <p style={contactStyles.infoLabel}>Location</p>
                    <p style={contactStyles.infoValue}>New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaking Engagements */}
            <div style={contactStyles.infoCard}>
              <div style={contactStyles.speakingHeader}>
                <Calendar size={20} style={contactStyles.speakingIcon} />
                <h3 style={contactStyles.infoTitle}>Speaking Engagements</h3>
              </div>
              <p style={contactStyles.speakingText}>
                Available for keynotes, panel discussions, and thought
                leadership sessions on:
              </p>
              <ul style={contactStyles.speakingList}>
                <li>• Digital Transformation</li>
                <li>• Technology Policy</li>
                <li>• Innovation Leadership</li>
                <li>• Cybersecurity Frameworks</li>
                <li>• AI and Emerging Technologies</li>
              </ul>
            </div>

            {/* Social Media */}
            <div style={contactStyles.infoCard}>
              <h3 style={contactStyles.infoTitle}>Connect on Social Media</h3>
              <div style={contactStyles.socialButtons}>
                <button style={contactStyles.socialButton}>
                  <Linkedin size={16} />
                </button>
                <button style={contactStyles.socialButton}>
                  <Twitter size={16} />
                </button>
                <button style={contactStyles.socialButton}>
                  <Youtube size={16} />
                </button>
              </div>
            </div>

            {/* Response Time */}
            <div style={contactStyles.responseCard}>
              <h3 style={contactStyles.responseTitle}>Response Time</h3>
              <p style={contactStyles.responseText}>
                I typically respond to inquiries within 48-72 hours. For urgent
                matters, please indicate in your subject line.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div style={contactStyles.newsletterSection}>
          <div style={contactStyles.newsletterContent}>
            <h2 style={contactStyles.newsletterTitle}>Stay Connected</h2>
            <p style={contactStyles.newsletterSubtitle}>
              Subscribe to receive updates on latest insights, speaking
              engagements, and thought leadership content on technology and
              innovation.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              style={contactStyles.newsletterForm}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={contactStyles.newsletterInput}
                placeholder="Enter your email"
                required
              />
              <button type="submit" style={contactStyles.newsletterButton}>
                Subscribe
              </button>
            </form>
            <p style={contactStyles.newsletterNote}>
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme37Contact;
