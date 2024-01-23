import React from 'react';
import { Helmet } from 'react-helmet';

const FAQ = () => {
  return (
    <div className="leading-7 m-5 font-sans">
      <Helmet>
        <title>Log Sense AI | FAQ</title>
      </Helmet>
      <h1 className="text-h1 font-bold mb-5 text-[#333]">
        Frequently Asked Questions (FAQs) - AI Log Analysis Tool
      </h1>

      <h2 className="text-h2 font-bold my-5 text-[#333]">
        1. General Questions:
      </h2>
      <div class="font-bold">Q: What is the AI LogGPT Analysis Tool?</div>
      <div class="mb-5">
        A: Our AI Log Analysis Tool is a sophisticated AI-driven solution
        designed to simplify and enhance the analysis of log data. It supports
        various log types, including Containers, Application, System, and Web
        Server. By leveraging advanced AI algorithms, the tool provides root
        cause analysis, actionable recommendations, and supports interactive
        queries, ensuring a comprehensive understanding of your log data.
      </div>

      <div class="font-bold">
        Q: Who owns and maintains the AI LogGPT Analysis Tool?
      </div>
      <div class="mb-5">
        A: The AI log analysis tool is developed and maintained by Log Sense AI,
        a leading firm in artificial intelligence and machine learning
        solutions, specializing in data analysis for IT operations and cloud
        computing.
      </div>

      <h2 className="text-h2 font-bold my-5 text-[#333]">2. Using the Tool:</h2>
      <div class="font-bold">Q: How do I use the AI LogGPT Analysis Tool?</div>
      <div class="mb-5">
        A: You can use the tool by manually entering container log data or by
        uploading log files in a text format. Once your logs are submitted, our
        AI will analyze the data and provide a detailed report. You can then ask
        follow-up questions for further clarification or deeper insights.
      </div>

      <div class="font-bold">
        Q: How do I generate the LogGPT Analysis Report?
      </div>
      <div class="mb-5">
        A: To generate the report, ensure you check the blue Report box after
        submitting your logs. The AI will then process your logs and generate a
        comprehensive analysis.
      </div>

      <div class="font-bold">
        Q: How can I ask follow-up LogGPT analysis questions?
      </div>
      <div class="mb-5">
        A: To ask follow-up questions, uncheck the blue Report box. You can then
        pose your questions directly to the AI for more detailed insights.
      </div>

      <h2 className="text-h2 font-bold my-5 text-[#333]">
        3. Data and Security:
      </h2>
      <div class="font-bold">Q: How secure is my data?</div>
      <div class="mb-5">
        A: Data security is our top priority. Your logs and queries are not
        stored post-session, ensuring complete confidentiality. Additionally,
        consider removing sensitive information from your log files before
        submission.
      </div>

      <div class="font-bold">Q: How is my data handled?</div>
      <div class="mb-5">
        A: Your data is processed securely during the session and is not
        retained afterward. Ensure you remove any sensitive information from
        your log files to maintain privacy.
      </div>

      <h2 className="text-h2 font-bold my-5 text-[#333]">
        4. Technical Specifications:
      </h2>
      <div class="font-bold">Q: What types of logs can I upload?</div>
      <div class="mb-5">
        A: You can upload any text file containing container logs, including
        those from environments like Docker Swarm and Kubernetes.
      </div>

      <div class="font-bold">
        Q: How does the tool determine the root cause?
      </div>
      <div class="mb-5">
        A: The tool employs advanced AI algorithms trained on diverse log data
        to identify patterns and anomalies, pinpointing potential root causes in
        your logs.
      </div>

      <div class="font-bold">
        Q: Is there a limit to the size of the log file I can upload?
      </div>
      <div class="mb-5">
        A: The tool currently supports log files up to approximately 400 words
        for efficient processing and analysis.
      </div>

      <div class="font-bold">
        Q: Can I use this tool for real-time log analysis?
      </div>
      <div class="mb-5">
        A: The current version is optimized for analyzing existing logs.
        Real-time analysis features might be introduced in future updates.
      </div>

      <h2 className="text-h2 font-bold my-5 text-[#333]">
        5. Results and Recommendations:
      </h2>
      <div class="font-bold">
        Q: What kind of recommendations does the LogGPT tool provide?
      </div>
      <div class="mb-5">
        A: The tool offers a wide range of actionable recommendations tailored
        to address the specific needs and challenges identified in your
        container logs. These include configuration adjustments, updates in
        container management practices, architectural improvements, and guidance
        on security and reliability best practices.
      </div>

      <div class="font-bold">Q: Can I export the LogGPT report?</div>
      <div class="mb-5">
        A: Yes, you can easily copy the report to your clipboard and paste it
        into any document or platform of your choosing.
      </div>

      <h2 className="text-h2 font-bold my-5 text-[#333]">
        6. Support and Feedback:
      </h2>
      <div class="font-bold">
        Q: Who can I contact for support or to give feedback?
      </div>
      <div class="mb-5">
        A: For support or to provide feedback, please contact
        feedback@LogSenseAI.com. We value your input and are here to assist you.
      </div>

      <h2 className="text-h2 font-bold my-5 text-[#333]">
        7. Additional Information:
      </h2>
      <div class="font-bold">
        Q: Are there any system requirements to use this LogGPT tool?
      </div>
      <div class="mb-5">
        A: The tool is web-based and accessible from any modern browser. No
        additional system requirements are needed.
      </div>

      <div class="font-bold">Q: Is there a cost to using this tool?</div>
      <div class="mb-5">
        A: The tool is currently free to use while in the Beta phase.
      </div>

      <div class="font-bold">
        Q: How can I be confident about the AI used in this LogGPT tool?
      </div>
      <div class="mb-5">
        A: The AI in our tool is based on the advanced ChatGPT model by OpenAI,
        known for its exceptional understanding and generation capabilities. It
        undergoes continuous updates and rigorous quality assurance to ensure
        top-notch performance.
      </div>

      <div class="font-bold">
        For more detailed information or specific inquiries, feel free to reach
        out to us at support@LogSenseAI.com. We are committed to providing you
        with a secure, efficient, and insightful log analysis experience.
      </div>
    </div>
  );
};

export default FAQ;
