import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Appbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="shadow-sm z-10 lmd:flex justify-center p-[8px] w-[calc(100%)] right-0 top-0 bg-white">
      <div className="max-w-[1640px] w-full flex justify-between items-center">
        <Link to={'/'}>
          <div className="flex flex-col relative w-[190px] border-0 ">
            <div className="absolute medium translate-y-[25%] flex items-center w-full pointer-events-none top-0 z-10 px-[8px] gap-[8px]">
              <div className="w-[13px] mr-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" fill="#7F4BF0" rx="4"></rect>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M6.5 6h11a1 1 0 011 1v8a1 1 0 01-1 1H9.156L7.15 17.757a.994.994 0 01-1.493-.219A.99.99 0 015.5 17V7a1 1 0 011-1zm1.75 2.25a.75.75 0 100 1.5h7.5a.75.75 0 000-1.5h-7.5zm0 3.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>

              <span className="w-full text-ellipsis">Log Sense AI</span>
            </div>
            <div className="w-full flex flex-col gap-[4px] prose-nbx">
              <div className="w-full h-fit medium cursor-pointer relative text-transparent overflow-hidden shadow-none bg-transparent rounded-md gap-[8px] flex items-center borderBase dark:shadow-[0px_0px_0px_1px_#333,0px_1px_2px_0px_rgba(22,22,22,0.36)]">
                <div className="font-medium cursor-pointer relative text-transparent overflow-hidden shadow-none bg-transparent pb-[px] h-[32px] p-[6px] w-full text-base placeholder-light-neutral-200"></div>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex gap-7 absolute right-5">
          {pathname === '/container' ||
          '/system' ||
          '/application' ||
          '/webserver' ? (
            <>
              <a
                href="/data-privacy"
                className="underline text-[blue]"
                target="_blank"
              >
                Data Privacy Policy
              </a>
              <a
                href="mailto:feedback@logsenseai.com"
                className="underline text-[blue]"
              >
                Feedback
              </a>
            </>
          ) : (
            ''
          )}
          {pathname === '/container' ? (
            <a href="/container-help" target="_blank">
              <div className="underline text-[blue]">Help & FAQs</div>
            </a>
          ) : pathname === '/system' ? (
            <a href="/system-help" target="_blank">
              <div className="underline text-[blue]">Help & FAQs</div>
            </a>
          ) : pathname === '/application' ? (
            <a href="/application-help" target="_blank">
              <div className="underline text-[blue]">Help & FAQs</div>
            </a>
          ) : pathname === '/webserver' ? (
            <a href="/webserver-help" target="_blank">
              <div className="underline text-[blue]">Help & FAQs</div>
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
