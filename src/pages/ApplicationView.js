import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import ChatBox from '../components/ChatBox';
import 'animate.css';

const ApplicationView = () => {
  const [chatlogs, setChatLogs] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [report, setReport] = useState(true);
  const [isDiable, setIsDisable] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  const fileRef = useRef(null);
  const promptRef = useRef(null);

  const txt =
    'Experience the power of Generative AI for Advanced Application Log Troubleshooting powered by Open AI';
  const speed = 50;

  useEffect(() => {
    if (index < txt.length) {
      setTimeout(() => {
        setTypedText(typedText + txt.charAt(index));
        setIndex(index + 1);
      }, speed);
    }
  }, [index, typedText, txt]);

  const handleSubmit = async (event) => {
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

    const res = await fetch(
      `${process.env.REACT_APP_API_ROOT}/v1/chat/application`,
      {
        // const res = await fetch(`/vs1/chat/application`, {
        method: 'POST',
        body: formData,
      }
    );

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
  };

  console.log(chatlogs);

  return (
    <div className="flex flex-col place-items-center">
      <Helmet>
        <title>Log Sense AI | Application Log Analyzer</title>
      </Helmet>
      {chatlogs.length > 0 ? (
        <ChatBox logs={chatlogs} />
      ) : (
        <div className="text-center flex flex-col gap-10 absolute top-[30%]">
          <p
            className="w-[700px] text-[35px] font-bold text-[#002060]"
            id="first-line"
          >
            {typedText}
          </p>
          <div className="animate__animated animate__pulse animate-pulse mt--custom">
            Paste or upload your .txt log file to begin
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-[70vw] border-[1px] border-black rounded-lg absolute ;lg:bottom-5 md:bottom-5 sm:bottom-5 -bottom-16 px-3 py-2"
      >
        <div className="flex flex-row gap-5 absolute lg:-top-8 max-w-[75%]">
          <div className="flex items-center">
            <input type="checkbox" id="flexCheckDefault1" className="size-4" />
            <label htmlFor="flexCheckDefault1" className="ml-2">
              Error Insights & Solutions
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="flexCheckDefault2" className="size-4" />
            <label htmlFor="flexCheckDefault2" className="ml-2">
              Performance Insights
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="flexCheckDefault3" className="size-4" />
            <label htmlFor="flexCheckDefault3" className="ml-2">
              Full Analysis Report
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="flexCheckDefault4" className="size-4" />
            <label htmlFor="flexCheckDefault4" className="ml-2">
              Interactive Query
            </label>
          </div>
        </div>

        <div className="absolute right-0 -top-8 flex items-center">
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

        <div className="h-1/3 flex relative">
          <div
            className="my-auto hover:bg-[#c7c7c7] p-2 rounded-full bottom-0 cursor-pointer"
            onClick={() => fileRef.current.click()}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 7C9 4.23858 11.2386 2 14 2C16.7614 2 19 4.23858 19 7V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V7Z"
                fill="currentColor"
              ></path>
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

          <label
            for="editableDiv"
            id="placeholderDiv"
            className="text-gray-400 absolute left-14 top-[8px] z-10"
          >
            Paste or upload your .txt log file here to begin
          </label>
          <div
            id="editableDiv"
            ref={promptRef}
            onInput={() => {
              if (promptRef.current.innerText) {
                console.log(promptRef.current.innerText);
                document.getElementById('placeholderDiv').style.display =
                  'none';
              } else {
                document.getElementById('placeholderDiv').style.display =
                  'block';
              }
            }}
            onFocus={() => console.log(promptRef.current.innerText)}
            className="w-full outline-none overflow-auto resize-none my-auto max-h-24 text-wrap bg-transparent mx-3 z-20"
            placeholder="Enter some text here..."
            contentEditable
          />

          <button
            className="bottom-0 p-[2px] hover:bg-[#5a5a5a] rounded-md bg-black text-white"
            type="submit"
            disabled={isDiable}
          >
            <svg
              width="36"
              height="36"
              viewBox="-1.92 -1.92 27.84 27.84"
              fill="none"
              stroke="#000000"
            >
              <path
                d="M7 11L12 6L17 11M12 18V7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </form>

      <div className="bottom-0 absolute text-[15px] text-[#727272]">
        Get a detailed log analysis report by selecting the blue box or deselect
        it to pose additional inquiries.
      </div>
    </div>
  );
};

export default ApplicationView;
