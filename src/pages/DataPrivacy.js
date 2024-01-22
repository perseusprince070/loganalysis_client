import React from 'react';
import { Helmet } from 'react-helmet';

const DataPrivacy = () => {
  return (
    <div className="leading-7 m-5 font-sans">
      <Helmet>
        <title>Log Sense AI | Data Privacy Policy</title>
      </Helmet>
      <header>
        <h1>LogGPT Data Privacy Policy</h1>
        <p>Effective as of 1/19/21</p>
      </header>

      <section class="policy-section">
        <p>
          At LogGPT, we understand the sensitivity of the data you trust us
          with. Your privacy and data security are our utmost priorities. This
          Data Privacy Policy is designed to inform you about our practices
          regarding the collection, use, and disclosure of information that you
          may provide via the LogGPT log file analyzer. Please be sure to read
          this entire Policy before using or submitting information to LogGPT.
        </p>
      </section>

      <section class="policy-section">
        <h2>1. Data Collection and Usage</h2>
        <ul>
          <li>
            <strong>1.1 Data Collection:</strong> LogGPT is a sophisticated log
            file analyzer that processes your log files to deliver insights. The
            data processed includes but is not limited to, server logs,
            application logs, and error logs.
          </li>
          <li>
            <strong>1.2 Data Usage:</strong> The data you provide is exclusively
            used for the purpose of analyzing and generating insights during
            your session with LogGPT. We do not use your data for any other
            purposes, including but not limited to, training of machine learning
            models, or any other ChatGPT related functionalities.
          </li>
        </ul>
      </section>

      <section class="policy-section">
        <h2>2. Data Storage and Retention</h2>
        <ul>
          <li>
            <strong>2.1 No Data Storage:</strong> We do not store your logs or
            queries post-session. Once your session with LogGPT ends, all the
            data provided during the session, including your logs and the
            results generated, are completely deleted from our system.
          </li>
          <li>
            <strong>2.2 Data Processing:</strong> During your session, your data
            is processed securely. We employ industry-standard security measures
            to ensure the confidentiality and integrity of your data while it is
            being processed.
          </li>
        </ul>
      </section>

      <section class="policy-section">
        <h2>3. Data Sharing and Disclosure</h2>
        <ul>
          <li>
            <strong>3.1 No Data Sharing:</strong> LogGPT does not share your
            data with any third parties. We do not sell, rent, or otherwise
            disclose your personal information or business data to third parties
            for their marketing or advertising purposes.
          </li>
          <li>
            <strong>3.2 Legal Disclosure:</strong> We may disclose your data if
            required by law, for example, in response to a court order or a
            subpoena. In such cases, we will make every effort to notify you of
            the request for disclosure.
          </li>
        </ul>
      </section>

      <section class="policy-section">
        <h2>4. Data Security</h2>
        <ul>
          <li>
            <strong>4.1 Security Measures:</strong> LogGPT is committed to
            protecting the security of your data. We use a variety of
            industry-standard security technologies and procedures to help
            protect your data from unauthorized access, use, or disclosure.
          </li>
          <li>
            <strong>4.2 User Responsibility:</strong> While we take stringent
            measures to secure your data, we also recommend that you remove any
            sensitive information from your log files before submission to
            maintain the confidentiality of your data.
          </li>
        </ul>
      </section>

      <section class="policy-section">
        <h2>5. Changes to This Privacy Policy</h2>
        <p>
          LogGPT reserves the right to change this Data Privacy Policy. Any
          changes will be posted on this page with an updated revision date. We
          encourage you to periodically review this page for the latest
          information on our privacy practices.
        </p>
      </section>

      <section class="policy-section">
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Data Privacy Policy
          or our data handling practices, please contact us at [your contact
          information].
        </p>
      </section>

      <footer>
        <p>
          By using LogGPT, you agree to the terms of this Data Privacy Policy.
        </p>
        <p>This Policy was last updated on 1/19/21.</p>
      </footer>
    </div>
  );
};

export default DataPrivacy;
