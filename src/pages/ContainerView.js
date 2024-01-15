import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ChatBox from '../components/ChatBox';

// let chatlogs = [];

const ContainerView = () => {
  const [chatlogs, setChatLogs] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [report, setReport] = useState(true);
  const [isDiable, setIsDisable] = useState(false);
  const [isNewChat, setIsNewChat] = useState(false);

  const fileRef = useRef(null);
  const promptRef = useRef(null);

  const location = useLocation();
  const pathname = location.pathname;
  const navigateTo = useNavigate();

  const handleSubmit = async (event) => {
    if (isNewChat) {
      console.log('New Chat');
      navigateTo(pathname);
      setIsNewChat(false);
    } else {
      event.preventDefault();
      console.log('>>> Submit');
      console.log(promptRef.current.innerText);
      setAttachments([]);

      setIsDisable(true);

      const newLog = {
        role: 'user',
        content: promptRef.current.innerText,
        attachments: attachments,
      };
      const loading = { role: 'assistant', content: null };

      setChatLogs([...chatlogs, newLog, loading]);
      promptRef.current.innerText = '';

      const formData = new FormData();
      [...chatlogs, newLog, loading].forEach((log) => {
        formData.append(
          'prompt',
          JSON.stringify({ role: log.role, content: log.content })
        );
      });
      formData.append('report', report);
      attachments.forEach((attach) => {
        formData.append('attachments', attach);
      });

      const res = await fetch('http://localhost:5000/v1/chat/container', {
        // const res = await fetch(`/v1/chat/container`, {
        method: 'POST',
        body: formData,
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let msg = '';
      while (true) {
        const { done, value: chunk } = await reader.read();
        if (done) break;
        const decodedValue = decoder.decode(chunk);
        msg += decodedValue;
        console.log(decodedValue);
        setChatLogs([...chatlogs, newLog, { role: 'assistant', content: msg }]);
      }

      setIsDisable(false);
    }
  };

  console.log(chatlogs);

  return (
    <div className="flex flex-col place-items-center h-[100vh]">
      {chatlogs.length > 0 ? (
        <ChatBox logs={chatlogs} />
      ) : (
        <div className="text-center w-[60vw] mt-14">
          <img src="/log_sense_logo.png" className="w-24 h-24 mx-auto mb-5" />
          <div className="grid-rows-3 grid">
            <p className="text-[36px] font-bold">
              Container Log AI Analyzer: Free & Easy Log Analysis
            </p>
            <p className="text-[24px] font-bold">
              Instantly analyze container logs (including Docker, EKS, AKS,
              Kubernetes) at no cost.
            </p>
            <p className="italic text-lg">
              Paste your logs or upload your .txt file for rapid insights and
              solutions.
              <br />
              Check the blue box to generate a report.Uncheck the box to ask
              follow up questions.
            </p>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-[70vw] border-[1px] border-black rounded-lg absolute bottom-5 px-3 py-2"
      >
        <div className="absolute left-0 -top-10">
          <button
            className="bottom-0 flex flex-row items-center"
            onClick={() => setIsNewChat(true)}
          >
            <svg
              width="36"
              height="36"
              viewBox="-1.92 -1.92 27.84 27.84"
              fill="none"
              stroke="#000000"
              transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
            >
              <path
                d="M8 10.5H16"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M8 14H13.5"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
            <span className="w-full text-ellipsis">New Chat</span>
          </button>
        </div>

        <div className="absolute right-0 -top-8">
          <input
            type="checkbox"
            id="report"
            className="size-4"
            checked={report}
            onChange={(e) => setReport(e.target.checked)}
          />
          <label htmlFor="report" className="ml-2">
            Analyze Log & Create Report
          </label>
        </div>

        <div className="h-2/3 flex mb-2">
          {attachments.map((file, idx) => (
            <div
              key={idx}
              className="bg-slate-200 p-2 rounded-lg mr-2 flex relative group"
            >
              <svg
                fill="#ffffff"
                viewBox="0 -8 72 72"
                stroke="#ffffff"
                className="size-8 p-1 bg-pink-600 rounded-sm"
              >
                <path d="M47.76,36.76H23.28a1.08,1.08,0,1,0,0,2.16H47.76a1.08,1.08,0,0,0,0-2.16Z"></path>
                <path d="M47.76,22.6H23.28a1.08,1.08,0,1,0,0,2.16H47.76a1.08,1.08,0,1,0,0-2.16Z"></path>
                <path d="M46.92,0H18.74A3.44,3.44,0,0,0,15.3,3.43V52.57A3.44,3.44,0,0,0,18.74,56H53.26a3.44,3.44,0,0,0,3.44-3.43V10.62Zm.81,5.14L52,9.79H47.73Zm6.08,47.43a.55.55,0,0,1-.55.55H18.74a.55.55,0,0,1-.55-.55V3.43a.54.54,0,0,1,.55-.54H44.85v8.35a1.45,1.45,0,0,0,1.44,1.44h7.52Z"></path>
                <path d="M47.76,29.62H23.28a1.08,1.08,0,1,0,0,2.16H47.76a1.08,1.08,0,1,0,0-2.16Z"></path>
              </svg>
              <p className="ml-3 mr-4 my-auto text-black">{file.name}</p>
              <button
                className="group-hover:block hidden z-100 absolute -top-2 -right-2 size-6 bg-slate-300 border-[1px] hover:bg-slate-400 rounded-full"
                type="button"
                onClick={() =>
                  setAttachments(attachments.filter((item) => item !== file))
                }
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z"
                    fill="#000"
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="h-1/3 flex relative">
          <div
            className="my-auto hover:bg-[#c7c7c7] p-2 rounded-full bottom-0 cursor-pointer"
            onClick={() => fileRef.current.click()}
          >
            <svg
              className="scale-[1.25] md:scale-[1]"
              width="24"
              height="24"
              fill="#000"
              viewBox="0 0 16 16"
            >
              <path d="M13.735 8.291l-5.319 5.315a3.89 3.89 0 11-5.5-5.502L9.28 1.76a2.593 2.593 0 113.666 3.668l-.011.01-6.21 5.977a.776.776 0 01-1.263-.277.778.778 0 01.185-.844l6.203-5.97a1.037 1.037 0 10-1.471-1.463L4.016 9.204a2.334 2.334 0 103.3 3.3l5.32-5.315a.78.78 0 011.101 1.101l-.002.001z"></path>
            </svg>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept=".txt"
            multiple
            className="hidden"
            onClick={() => (fileRef.current.value = null)}
            onChange={(event) => setAttachments(Array.from(event.target.files))}
          />

          <div
            ref={promptRef}
            className="w-full outline-none overflow-auto resize-none my-auto max-h-24 text-wrap bg-transparent mx-3"
            contentEditable
          />

          <button className="bottom-0" type="submit" disabled={isDiable}>
            <svg
              width="36"
              height="36"
              viewBox="-1.92 -1.92 27.84 27.84"
              fill="none"
              stroke="#000000"
              transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
            >
              <path
                d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContainerView;
