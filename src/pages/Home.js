export default function Home() {
  return (
    <div>
      <div
        className="w-full h-[100vh] m-0 p-0 font-inter"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <br />
        <div className="flex items-center justify-between w-4/5 rounded-b-[10px] bg-[#08080880] p-5 mx-auto backdrop:blur-[3px]">
          <a className="flex items-center ml-[25px]" href="/">
            <img src="/log_sense_logo.png" className="w-[40px] h-[40px]" />
            <div className="ml-[25px] mr-[10px] text-[#f5f5f5] text-[20px] font-bold font-inter -tracking-wide">
              Log Sense <span className="text-[#0fcefd]">AI</span>
            </div>
          </a>
          <div className="text-[#f5f5f5] font-bold">
            <ul className="flex mr-[25px]">
              <li className="m-[10px]">
                <a
                  href="/"
                  className="relative text-[#f5f5f5] font-bold px-2 hover:text-[#0fcefd] before:content-[''] before:absolute before:-bottom-[7px] before:left-0 before:w-0 before:h-[3px] before:bg-[#0fcefd] before:transition-all before:duration-500 hover:before:w-full"
                >
                  Home
                </a>
              </li>
              <li className="m-[10px]">
                <a
                  href=""
                  className="relative text-[#f5f5f5] font-bold px-2 hover:text-[#0fcefd] before:content-[''] before:absolute before:-bottom-[7px] before:left-0 before:w-0 before:h-[3px] before:bg-[#0fcefd] before:transition-all before:duration-500 hover:before:w-full"
                >
                  LogGPT
                </a>
              </li>
              <li className="m-[10px]">
                <a
                  href=""
                  className="relative text-[#f5f5f5] font-bold px-2 hover:text-[#0fcefd] before:content-[''] before:absolute before:-bottom-[7px] before:left-0 before:w-0 before:h-[3px] before:bg-[#0fcefd] before:transition-all before:duration-500 hover:before:w-full"
                >
                  About Us
                </a>
              </li>
              <li className="m-[10px]">
                <a
                  href="mailto:feedback@logsenseai.com"
                  className="relative text-[#f5f5f5] font-bold px-2 hover:text-[#0fcefd] before:content-[''] before:absolute before:-bottom-[7px] before:left-0 before:w-0 before:h-[3px] before:bg-[#0fcefd] before:transition-all before:duration-500 hover:before:w-full"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col absolute right-[200px] pt-[40px]">
          <a
            href="/container"
            target="_blank"
            className="flex border-[2px] border-[#0fcefd] w-[250px] mt-[16px] min-h-[50px] text-white rounded-md items-center justify-center bg-transparent text-[16px] hover:shadow-[0_0_20px_#0fcefd] hover:bg-transparent hover:border-[3px] hover:border-[#0fcefd] hover:transition-all before:duration-150"
          >
            LogGPT for Container Logs
          </a>
          <a
            href="/system"
            target="_blank"
            className="flex border-[2px] border-[#0fcefd] w-[250px] mt-[16px] min-h-[50px] text-white rounded-md items-center justify-center bg-transparent text-[16px] hover:shadow-[0_0_20px_#0fcefd] hover:bg-transparent hover:border-[3px] hover:border-[#0fcefd] hover:transition-all before:duration-150"
          >
            LogGPT for System Logs
          </a>
          <a
            href="/application"
            target="_blank"
            className="flex border-[2px] border-[#0fcefd] w-[250px] mt-[16px] min-h-[50px] text-white rounded-md items-center justify-center bg-transparent text-[16px] hover:shadow-[0_0_20px_#0fcefd] hover:bg-transparent hover:border-[3px] hover:border-[#0fcefd] hover:transition-all before:duration-150"
          >
            LogGPT for Application Logs
          </a>
          <a
            href="/webserver"
            target="_blank"
            className="flex border-[2px] border-[#0fcefd] w-[250px] mt-[16px] min-h-[50px] text-white rounded-md items-center justify-center bg-transparent text-[16px] hover:shadow-[0_0_20px_#0fcefd] hover:bg-transparent hover:border-[3px] hover:border-[#0fcefd] hover:transition-all before:duration-150"
          >
            LogGPT for Web Server Logs
          </a>
        </div>

        <div className="flex flex-col text-white h-[200px] w-[453px] absolute right-[100px] border-t-[4px] border-t-white border-r-[4px] border-r-white border-l-[4px] border-l-white rounded-t-[20px] bottom-0 bg-[#00000080] backdrop:blur-[25px] px-[30px]">
          <div className="">
            <i
              // className="content-[''] absolute top-[40px] h-[3px] w-[200px] bg-[#0fcefd] animate-slideinleft"
              className="content-[''] absolute top-[40px] w-[200px] h-[3px] bg-[#0fcefd]"
            ></i>

            <h3 className="text-[18px] my-[10px] px-[5px] mb-5">
              LogGPT - An <span className="text-[#0fcefd]">AI</span> Driven
              Analysis Solution
            </h3>
          </div>
          <h1 className="text-[32px] leading-[40px]">
            Generative <span className="text-[#0fcefd]">AI</span> for Advanced
            Log Trouble-Shooting
          </h1>
        </div>
      </div>
      <div className="h-[120vh] pt-[35px] text-white bg-black">
        <div className="flex flex-col text-center">
          <h2 className="mt-[30px] font-bold text-[#f5f5f5] text-[32px] px-[25px]">
            Unlock the Future of Log Troubleshooting with&nbsp;
            <span className="text-[#0fcefd]">LogGPT</span>
          </h2>
          <img
            src="/blue-line.png"
            alt="blue line"
            className="-mt-[10px] w-[60%] h-[40px] mx-auto"
          />
        </div>
        <div className="flex mt-[250px] justify-evenly">
          <div className="flex h-[450px] w-[450px] items-center text-[20px]">
            <p className="text-[1.5rem] leading-[1.2]">
              <span className="text-[#0fcefd]">Experience the future</span> of
              log analysis with LogGPT, your trusted companion for navigating
              the complexities of troubleshooting. Powered by cutting-edge AI
              technology, LogGPT takes log analysis to new heights, providing
              you with unmatched insights and problem-solving capabilities.
              Transform your data into a dynamic, solution-generating powerhouse
              with LogGPT, where cutting-edge technology meets deep, analytical
              problem-solving.
            </p>
          </div>
          <div className="flex flex-col">
            <img
              className="mt-[40px]"
              alt="AI image"
              src="/AI2.jpg"
              width="400"
              height="400"
            />
            <div className="flex justify-end -mr-[50px]">
              <svg
                id="corner-decor-1"
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="60"
                viewBox="0 0 88 60"
                fill="none"
              >
                <rect x="80" width="8" height="60" fill="#0fcefd" />
                <rect
                  y="60"
                  width="8"
                  height="80"
                  transform="rotate(-90 0 60)"
                  fill="#0fcefd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[120vh] bg-[#0e1111] text-white pt-[35px] h-auto">
        <div className="text-center">
          <h2 className="text-wrap m-[30px] font-bold mb-[70px] text-[32px]">
            How <span className="text-[#0fcefd]"> LogGPT</span> Works:
            Harnessing
            <span className="text-[#0fcefd]"> AI</span> for Precise
            Troubleshooting
          </h2>
          <img
            src="/blue-line.png"
            alt="blue line"
            className="-mt-[80px] w-[60%] h-[40px] mx-auto"
          />
        </div>
        <div className="flex items-center mt-[200px] justify-center">
          <div className="h-[450px] w-[450px] section-2-3-right-side">
            <img
              className=""
              alt="AI report"
              src="/AI_Report.png"
              width="600"
              height="600"
            />
          </div>
          <div className="h-[450px] w-[520px] flex flex-col justify-center items-center pt-[0px]">
            <p className="text-[1.5rem]">
              Discover how
              <span className="text-[#0fcefd]"> LogGPT's advanced AI</span>{' '}
              algorithms dive deep into your log data to dissect and understand
              complex issues. We go beyond surface-level analysis to provide
              precise, targeted solutions that address the core of each
              challenge.
            </p>
            <div className="flex flex-col items-center justify-between ml-[20px] pt-[20px]">
              <a
                href="#"
                className="flex border-[2px] border-[#0fcefd] w-[250px] mt-[16px] min-h-[70px] text-white rounded-md items-center justify-center bg-transparent text-[16px] text-center p-2 hover:shadow-[0_0_20px_#0fcefd] hover:bg-transparent hover:border-[3px] hover:border-[#0fcefd] hover:transition-all before:duration-150 section-3-buttons"
              >
                How LogGPT Report is Created by AI
              </a>
              <a
                href="#"
                className="flex border-[2px] border-[#0fcefd] w-[250px] mt-[16px] min-h-[50px] text-white rounded-md items-center justify-center bg-transparent text-[16px] text-center px-[15px] py-[10px] hover:shadow-[0_0_20px_#0fcefd] hover:bg-transparent hover:border-[3px] hover:border-[#0fcefd] hover:transition-all before:duration-150 btn btn-primary btn-lg section-3-buttons"
              >
                View Sample LogGPT Report
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[100vh] bg-[#0fcefd]">
        <div className="-mb-[50px] pt-[60px] ml-[50px] font-bold text-black">
          <h2 className="text-[32px]">Key Features of LogGPT</h2>
        </div>
        <div className="mt-[100px] ml-[50px]">
          <ul className="mr-[25px]">
            <li className="flex bg-[#0e1111] h-auto min-h-[70px] border-[1px] border-black rounded-t-[10px] text-[#f5f5f5] items-center m-3 p-3">
              <p className="text-[1.25rem]">
                <span className="text-[#0fcefd] font-bold">
                  Swift Solutions:
                </span>{' '}
                LogGPT doesn't just identify issues; it delivers innovative
                solutions promptly, ensuring your operations run smoothly.
              </p>
            </li>
            <li className="flex bg-[#0e1111] h-auto min-h-[70px] border-none text-[#f5f5f5] items-center m-3 p-3">
              <p className="text-[1.25rem]">
                <span className="text-[#0fcefd] font-bold">
                  Simplified Complexity:
                </span>{' '}
                We simplify intricate log data, making it easy to understand and
                act upon.
              </p>
            </li>
            <li className="flex bg-[#0e1111] h-auto min-h-[70px] border-none text-[#f5f5f5] items-center m-3 p-3">
              <p className="text-[1.25rem]">
                <span className="text-[#0fcefd] font-bold">
                  Predictive Insights:
                </span>{' '}
                Stay ahead of the curve with LogGPT's predictive analytics,
                enabling proactive troubleshooting.
              </p>
            </li>
            <li className="flex bg-[#0e1111] h-auto min-h-[70px] border-[1px] border-black rounded-b-[10px] text-[#f5f5f5] items-center m-3 p-3">
              <p className="text-[1.25rem]">
                <span className="text-[#0fcefd] font-bold">
                  Continuous Improvement:
                </span>{' '}
                Our AI continuously evolves to adapt to new challenges, ensuring
                consistent excellence.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full min-h-[90vh] bg-[#0e1111] h-auto pt-[35px] text-white">
        <div className="text-center">
          <h2 className="text-wrap mt-[30px] font-bold mb-[70px] text-[32px]">
            <span className="text-[#0fcefd]">About Our AI</span> - Powered by
            ChatGPT
          </h2>
          <img
            src="blue-line.png"
            alt="blue line"
            className="-mt-[80px] w-[60%] h-[40px] mx-auto"
          />
        </div>
        <div className="mt-[50px] w-full px-[250px] text-[1.5rem]">
          <div className="flex justify-center">
            <div className="d-flex justify-content-center section-3-5-content-box">
              <p className="h4 text-center" id="section-5-paragraph">
                LogGPT harnesses the formidable intelligence of ChatGPT, a
                renowned AI model celebrated for its language understanding and
                generation capabilities. Developed by OpenAI, ChatGPT is
                designed to process and analyze vast volumes of text data with
                exceptional accuracy. It undergoes rigorous training and
                receives continuous updates, guaranteeing top-notch performance.
                Trust in the power of ChatGPT to provide you with the most
                advanced log analysis solutions available today.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-[140vh] bg-[#0fcefd] pt-[35px] text-white justify-around items-center">
        <div className="text-[32px] text-black font-bold -mt-[40px]">
          <h2>Watch the video and learn more about LogGPT</h2>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <iframe
            width="860"
            height="615"
            src="https://www.youtube.com/embed/4XpoRvexKNY?si=qb0a5lFgavi7gD4K"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col bg-[#0e1111] pt-[45px] pb-[20px] px-[15%] text-[15px] leading-[24px] text-[#8d8d8d]">
        <div className="flex mb-[1rem]">
          <div className="w-[50%] pr-5">
            <h6 className="text-white text-[20px] mb-5">About</h6>
            <p className="text-justify mb-[1rem]">
              <span className="text-[#0fcefd]">Log Sense AI</span> is a
              technology firm specializing in AI and ML solutions for IT
              operations and cloud computing. They have a skilled team of data
              scientists and engineers focused on creating advanced yet
              user-friendly log analysis tools. Known for innovation, Log Sense
              AI helps businesses optimize operations and gain insights through
              AI-driven analytics.
            </p>
          </div>

          <div className="w-[25%]">
            <h6 className="text-white text-[20px] mb-5">Documentation</h6>
            <ul className="mr-[25px]">
              <li className="mx-[10px] mt-0">
                <a
                  href="/container-help"
                  target="_blank"
                  className="underline hover:text-[#0fcefd] hover:no-underline"
                >
                  LogGPT for Container Logs
                </a>
              </li>
              <li className="m-[10px]">
                <a
                  href="/system-help"
                  target="_blank"
                  className="underline hover:text-[#0fcefd] hover:no-underline"
                >
                  LogGPT for System Logs
                </a>
              </li>
              <li className="m-[10px]">
                <a
                  href="/application-help"
                  target="_blank"
                  className="underline hover:text-[#0fcefd] hover:no-underline"
                >
                  LogGPT for Application Logs
                </a>
              </li>
              <li className="m-[10px]">
                <a
                  href="/webserver-help"
                  target="_blank"
                  className="underline hover:text-[#0fcefd] hover:no-underline"
                >
                  LogGPT for Web Server Logs
                </a>
              </li>
            </ul>
          </div>

          <div className="w-[25%]">
            <h6 className="text-white text-[20px] mb-5">Quick Links</h6>
            <ul className="mr-[25px]">
              <li className="m-[10px]">
                <a
                  href="#"
                  target="_blank"
                  className="underline hover:text-[#0fcefd] hover:no-underline"
                >
                  About Us
                </a>
              </li>
              <li className="m-[10px]">
                <a
                  href="#"
                  target="_blank"
                  className="underline hover:text-[#0fcefd] hover:no-underline"
                >
                  Contact Us
                </a>
              </li>
              <li className="m-[10px]">
                <a
                  href="/data-privacy"
                  target="_blank"
                  className="underline hover:text-[#0fcefd] hover:no-underline"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-[#bbb] opacity-[0.5]" />
        <p className="mt-[1rem]">
          Copyright &copy; 2024 All Rights Reserved by &nbsp;
          <a
            href="/"
            className="underline hover:text-[#0fcefd] hover:no-underline"
          >
            LogSenseAI
          </a>
        </p>

        <ul className="social-icons">
          <li>
            <a className="facebook" href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a className="twitter" href="#">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </li>
          <li>
            <a className="linkedin" href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
