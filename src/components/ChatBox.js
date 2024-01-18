import React from 'react';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import MDEditor from '@uiw/react-md-editor';
import { useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Chatbox = ({ logs }) => {
  const chatRef = useRef(null);
  const scrollRef = useRef(null);

  const handleSaveResponse = async (log) => {
    console.log(chatRef.current.source);
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [new Paragraph(chatRef.current.source)],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = 'log.docx';
      anchor.click();
      URL.revokeObjectURL(url);
    });
  };

  useEffect(() => {
    console.log(scrollRef.current);
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [logs]);

  const handleCopyLog = async (log) => {
    try {
      await navigator.clipboard.writeText(log);
      toast.success('Copied');
    } catch (err) {
      console.log('>>> Error : ', err);
    }
  };

  return (
    <>
      <div
        ref={scrollRef}
        className="w-[70vw] mt-[10vh] h-[70vh] overflow-auto"
      >
        <ToastContainer position="top-right" limit={1} />
        {logs.map((log, idx) =>
          log.role == 'user' ? (
            <div key={idx} className="w-full overflow-hidden flex gap-[8px]">
              <div className="bg-[#0A4481] min-w-[48px] medium-pl h-[48px] w-[48px] scale-[0.67] flex justify-center text-light-neutral-1000 items-center rounded-full text-white">
                Y
              </div>
              <div className="w-full rounded-md p-[16px] flex-col flex regular overflow-hidden">
                <span className="text-neutral-400 text-xs flex justify-between items-center overflow-hidden">
                  You
                </span>

                {log.attachments.length != 0 && (
                  <div className="my-2">
                    {log.attachments.map((attach, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-500 p-2 rounded-lg mr-2 flex mb-2"
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
                        <p className="mx-3 my-auto text-white">{attach.name}</p>
                      </div>
                    ))}
                  </div>
                )}
                <div className="whitespace-pre-wrap">{log.content}</div>
              </div>
            </div>
          ) : (
            log.role == 'assistant' && (
              <div
                key={idx}
                className="w-full overflow-hidden flex gap-[8px] my-4"
              >
                <svg
                  className="scale-[0.67] min-w-[48px]"
                  width="48"
                  height="48"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <rect width="48" height="48" fill="#7F4BF0" rx="24"></rect>
                  <rect
                    width="48"
                    height="48"
                    fill="url(#paint0_linear_431_1692)"
                    fillOpacity="0.4"
                    rx="24"
                  ></rect>
                  <g clipPath="url(#clip0_431_1692)">
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M24 6c9.941 0 18 8.059 18 18s-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6zm-.65 1.347c-2.054.289-4.01 1.939-5.527 4.699-.44.8-.838 1.684-1.184 2.64 2.064-.52 4.331-.825 6.71-.872V7.347zm-8.232 7.77c.43-1.35.957-2.593 1.565-3.698.752-1.369 1.645-2.55 2.651-3.457A16.734 16.734 0 007.962 19.334c.907-1.006 2.088-1.899 3.457-2.651a20.786 20.786 0 013.699-1.565zm-.433 1.522c-.518 2.064-.824 4.331-.871 6.71H7.347c.289-2.053 1.939-4.009 4.699-5.526.8-.44 1.684-.838 2.64-1.184zm.43 6.71c.054-2.596.428-5.034 1.046-7.188 2.154-.618 4.592-.992 7.188-1.046v2.81a9.577 9.577 0 01-5.424 5.424h-2.81zm-1.301 1.302H7.347c.289 2.053 1.939 4.008 4.699 5.526.8.44 1.684.838 2.64 1.184-.52-2.064-.825-4.331-.872-6.71zm2.347 7.188c-.618-2.154-.992-4.592-1.046-7.188h2.81a9.576 9.576 0 015.424 5.423v2.81c-2.596-.053-5.034-.427-7.188-1.045zm-1.043 1.043a20.786 20.786 0 01-3.7-1.565c-1.367-.752-2.549-1.645-3.456-2.651a16.734 16.734 0 0011.372 11.372c-1.006-.907-1.899-2.088-2.651-3.457a20.786 20.786 0 01-1.565-3.699zm8.231 7.771c-2.053-.289-4.008-1.939-5.526-4.699-.44-.8-.838-1.685-1.184-2.64 2.064.52 4.331.825 6.71.872v6.467zm5.317-.615c1.006-.907 1.899-2.088 2.651-3.457a20.786 20.786 0 001.565-3.699 20.79 20.79 0 003.7-1.565c1.367-.752 2.549-1.645 3.456-2.651a16.734 16.734 0 01-11.372 11.372zm2.695-6.723c-.346.954-.744 1.839-1.184 2.64-1.517 2.759-3.473 4.41-5.526 4.698v-6.467c2.379-.047 4.646-.353 6.71-.871zm1.954-1.954c.954-.346 1.839-.744 2.64-1.184 2.759-1.518 4.41-3.473 4.698-5.526h-6.467c-.047 2.379-.353 4.646-.871 6.71zm-.43-6.71c-.054 2.596-.428 5.034-1.046 7.188-2.154.618-4.592.992-7.188 1.046v-2.809a9.577 9.577 0 015.425-5.425h2.809zm1.301-1.302h6.467c-.289-2.053-1.939-4.009-4.699-5.526-.8-.44-1.685-.838-2.64-1.184.52 2.064.825 4.331.872 6.71zm-2.347-7.188c.618 2.154.992 4.592 1.046 7.188h-2.81a9.576 9.576 0 01-5.424-5.425v-2.809c2.596.054 5.034.428 7.188 1.046zm1.043-1.043a20.79 20.79 0 013.7 1.565c1.367.752 2.549 1.645 3.456 2.651A16.734 16.734 0 0028.666 7.962c1.006.907 1.899 2.088 2.651 3.457a20.786 20.786 0 011.565 3.699zm-8.231-7.771c2.053.289 4.009 1.939 5.526 4.699.44.8.838 1.684 1.184 2.64-2.064-.52-4.331-.825-6.71-.872V7.347z"
                      clipRule="evenodd"
                    ></path>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_431_1692"
                      x1="24"
                      x2="24"
                      y1="0"
                      y2="48"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7E43FF" stopOpacity="0"></stop>
                      <stop offset="1" stopColor="#F466C1"></stop>
                    </linearGradient>
                    <clipPath id="clip0_431_1692">
                      <path
                        fill="#fff"
                        d="M0 0H36V36H0z"
                        transform="translate(6 6)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
                <div className="w-full rounded-md p-[16px] flex-col flex regular overflow-hidden relative group">
                  <span className="text-neutral-400 text-xs flex justify-between items-center overflow-hidden">
                    InsightAdvisor
                  </span>
                  {log.content ? (
                    <>
                      <MDEditor.Markdown
                        source={log.content}
                        className="whitespace-pre-wrap bg-transparent text-black mt-3"
                        data-color-theme="light"
                        ref={chatRef}
                      />

                      <div className="flex mt-2">
                        <div
                          className="size-7 p-1 cursor-pointer"
                          onClick={async () => handleCopyLog(log.content)}
                        >
                          {/* <svg viewBox="0 0 24 24" fill="none">
                            <path
                              d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
                              stroke="#000"
                              strokeWidth="1.5"
                            ></path>
                            <path
                              d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
                              stroke="#000"
                              strokeWidth="1.5"
                            ></path>
                          </svg> */}
                          <svg viewBox="0 0 24 24" fill="none">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        {/* <div className='size-7 p-1 cursor-pointer' onClick={() => handleSaveResponse(log.content)}>
                              <svg fill="#000" viewBox="0 0 24 24" stroke="#000">
                                <rect width="24" height="24" opacity="0"></rect>
                                <rect x="4" y="18" width="16" height="2" rx="1" ry="1"></rect>
                                <rect x="3" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 5 18)"></rect>
                                <rect x="17" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 19 18)"></rect>
                                <path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39 1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"></path>
                                <path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"></path>
                              </svg>
                            </div> */}
                      </div>
                    </>
                  ) : (
                    <div className="w-4 border-[1.5px] border-[#333] animate-spin mt-3"></div>
                  )}
                </div>
              </div>
            )
          )
        )}
      </div>
    </>
  );
};

export default Chatbox;
