import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faFile,
  faMicrochip,
  faQuestion,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Appbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const handleNewChat = () => {
    console.log(pathname);
    if (pathname === '/container') {
      window.location = '/container';
    } else if (pathname === '/application') {
      window.location = '/application';
    } else if (pathname === '/system') {
      window.location = '/system';
    } else if (pathname === '/webserver') {
      window.location = '/webserver';
    }
  };

  return (
    <div className="shadow-sm z-10 p-[8px] w-[100vw] top-0 bg-white flex items-center justify-between">
      <div className="flex gap-[20px] w-[250px]">
        <button
          onClick={handleNewChat}
          className="w-[40px] h-[40px] ml-[15px] border-[1px] border-[#a7a2a2] rounded p-2 hover:bg-gray-200"
          title="Start new log analysis"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <Link to={'/'}>
          <div className="flex items-center gap-2 text-base font-bold text-[#333333]">
            <img
              src="/log_sense_logo.png"
              alt="LogSenseAI Logo"
              className="w-[40px] h-[40ox]"
            />
            Log Sense AI
          </div>
        </Link>
      </div>
      {pathname === '/container' ? (
        <div className="text-[27px] font-medium">
          <span className="font-bold text-[#002060]">Container Log</span>
          <span className="text-[#002060]">
            GPT
            <sup>&nbsp;&reg;</sup>Analyzer
          </span>
        </div>
      ) : pathname === '/system' ? (
        <div className="text-[27px] font-medium">
          <span className="font-bold text-[#002060]">System Log</span>
          <span className="text-[#002060]">
            GPT
            <sup>&nbsp;&reg;</sup>Analyzer
          </span>
        </div>
      ) : pathname === '/application' ? (
        <div className="text-[27px] font-medium">
          <span className="font-bold text-[#002060]">Application Log</span>
          <span className="text-[#002060]">
            GPT
            <sup>&nbsp;&reg;</sup>Analyzer
          </span>
        </div>
      ) : pathname === '/webserver' ? (
        <div className="text-[27px] font-medium">
          <span className="font-bold text-[#002060]">Web Server Log</span>
          <span className="text-[#002060]">
            GPT
            <sup>&nbsp;&reg;</sup>Analyzer
          </span>
        </div>
      ) : (
        ''
      )}

      <div className="w-[250px] flex justify-end">
        <Menu as="div" className="relative inline-block text-left ">
          <div>
            <Menu.Button className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 w-10 h-10 items-center">
              <FontAwesomeIcon icon={faQuestion} size="2xl" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/sample-report"
                      target="_blank"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      <FontAwesomeIcon icon={faFile} size="xl" />
                      &nbsp; View Sample AI Report
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/how-report"
                      target="_blank"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      <FontAwesomeIcon icon={faMicrochip} size="xl" />
                      &nbsp; How Report is Created by AI
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/data-privacy"
                      target="_blank"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      <FontAwesomeIcon icon={faShieldHalved} size="xl" />
                      &nbsp; Data Privacy Policy
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="mailto:feedback@logsenseai.com"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      <FontAwesomeIcon icon={faComment} size="xl" />
                      &nbsp; Feedback
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) =>
                    pathname === '/container' ? (
                      <a
                        href="/container-help"
                        target="_blank"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        <FontAwesomeIcon icon={faQuestion} size="xl" />
                        &nbsp; Help & FAQs
                      </a>
                    ) : pathname === '/system' ? (
                      <a
                        href="/system-help"
                        target="_blank"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        <FontAwesomeIcon icon={faQuestion} size="xl" />
                        &nbsp; Help & FAQs
                      </a>
                    ) : pathname === '/application' ? (
                      <a
                        href="/application-help"
                        target="_blank"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        <FontAwesomeIcon icon={faQuestion} size="xl" />
                        &nbsp; Help & FAQs
                      </a>
                    ) : pathname === '/webserver' ? (
                      <a
                        href="/webserver-help"
                        target="_blank"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        <FontAwesomeIcon icon={faQuestion} size="xl" />
                        &nbsp; Help & FAQs
                      </a>
                    ) : null
                  }
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Appbar;
