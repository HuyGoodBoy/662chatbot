// import avatar from "../assets/avatar.jpg";
import robot_img from "../assets/robot_image.png";
import { useState, useRef, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
function ChatBot(props) {
  const messagesEndRef = useRef(null);
  const [timeOfRequest, SetTimeOfRequest] = useState(0);
  let [promptInput, SetPromptInput] = useState("");
  let [chatHistory, SetChatHistory] = useState([]);

  const commonQuestions = [
    "Vui lòng cho biết loại Hợp đồng nào thì không bắt buộc tham gia BHXH, BHYT, BHTN?",
    "Từ ngày 01/01/2016, mức đóng BHXH bằng tổng lương và phụ cấp. Những phụ cấp nào bắt buộc phải đóng BHXH?",
    "Năm 2016 doanh nghiệp phải trích nộp các loại bảo hiểm trên mức lương nào?",
    "Về nộp BHYT của người lao động nước ngoài, các văn bản pháp luật quy định cụ thể như thế nào?",
    "Người lao động làm việc 4 tiếng 1 ngày thì tính lương như thế nào?",
    "Về gia hạn thời hạn hợp đồng lao động bằng phụ lục, quy định như thế nào?",
    "Về cung cấp thông tin đóng BH của NLĐ trên web của CQ BH (mẫu C13-TS)?",
    "Về vấn đề giấy phép lao động cho người nước ngoài?",
    "Về trách nhiệm trả trợ cấp thôi việc cho người lao động trong thời gian nghỉ thai sản?",
    "Đối với thời gian người lao động quay lại làm việc trước khi kết thúc 6 tháng thai sản?",
    "Hiện nay, có nhiều doanh nghiệp ký hợp đồng dịch vụ thay cho hợp đồng lao động đối với cá nhân, có đúng không?",
    "Người lao động tham gia BHXH đã được 10 năm, có thể bỏ thời gian tham gia BHXH 2 năm đầu không?"
  ]
  let [isLoading, SetIsLoad] = useState(false);
  let [isGen, SetIsGen] = useState(false);
  const [dataChat, SetDataChat] = useState([
    [
      "start",
      [
        "Xin chào! Đây là 662Chatbot, trợ lý ảo chuyên cung cấp thông tin về bảo hiểm xã hội và pháp luật! Bạn muốn tìm hiểu về vấn đề gì? Hãy đặt câu hỏi để mình có thể giúp bạn tìm kiếm thông tin chính xác nhất nhé. 😄",
        null,
      ],
    ],
  ]);
  useEffect(() => {
    ScrollToEndChat();
  }, [isLoading]);
  useEffect(() => {
    const interval = setInterval(() => {
      SetTimeOfRequest((timeOfRequest) => timeOfRequest + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function ScrollToEndChat() {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const onChangeHandler = (event) => {
    SetPromptInput(event.target.value);
  };

  const SendMessageChat = async () => {
    if (promptInput.trim() === "") return;

    SetIsLoad(true);
    SetTimeOfRequest(0);
    SetDataChat([...dataChat, ["user", [promptInput, null]]]);
    SetPromptInput("");

    try {
      const response = await fetch(`https://103.77.241.42/rag?q=${promptInput}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      // SetChatHistory(result.chat_history);
      SetDataChat([...dataChat, ["user", [promptInput, null]], ["bot", [result.result, null]]]);

    } catch (error) {
      console.error("Error:", error);
      SetDataChat([
        ...dataChat,
        ["user", [promptInput, null]],
        ["bot", ["Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.", null]],
      ]);
    }

    SetIsLoad(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      SendMessageChat();
    }
  };
  let [reference, SetReference] = useState({
    title: "",
    source: "",
    url: "",
    text: ``,
  });
  const handleReferenceClick = (sources, sourceType) => {
    SetReference({
      title:
        sourceType == "wiki"
          ? sources.metadata.title
          : sources.metadata.page == undefined ? "Sổ tay sinh viên 2023" : "Trang " + sources.metadata.page + " (sổ tay SV)",
      source: sourceType == "wiki" ? "Wikipedia" : "Đại học Nguyễn Tất Thành",
      url:
        sourceType == "wiki"
          ? sources.metadata.source
          : "https://ctsv.ntt.edu.vn/sinh-vien-can-biet/",
      text:
        sourceType == "wiki" ? sources.metadata.summary : sources.page_content,
    });
  };
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-100 h-[85vh] ">
      <div className="hidden lg:block  drawer-side absolute w-64 h-[20vh] left-3 mt-2 drop-shadow-md">
      </div>
      <div className="hidden lg:block  drawer-side absolute w-64 h-[20vh] mt-2 right-3 drop-shadow-md">
        <div
          className="menu p-4 w-full min-h-full bg-gray-50 text-base-content 
        rounded-2xl mt-3  overflow-auto scroll-y-auto max-h-[80vh]
        scrollbar-thin scrollbar-thumb-gray-300 
          scrollbar-thumb-rounded-full scrollbar-track-rounded-full
        "
        >
          {/* Sidebar content here */}
          <ul className="menu text-sm">
            <h2 className="font-bold mb-2 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)] ">
              Những câu hỏi phổ biến
            </h2>

            {commonQuestions.map((mess, i) => (
              <li key={i} onClick={() => SetPromptInput(mess)}>
                <p className="max-w-64">
                  <FontAwesomeIcon icon={faMessage} />
                  {mess}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={"flex justify-center h-[80vh]"}>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{reference.title}</h3>{" "}
            <p className="font-normal text-sm">Nguồn: {reference.source}</p>
            <p className="py-4 text-sm">
              {reference.text.slice(0, 700) + "..."}
            </p>
            <p className="link link-primary truncate">
              <a href={reference.url} target="_blank">
                {reference.url}
              </a>
            </p>
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn btn-error">
                ĐÓNG
              </label>
            </div>
          </div>
        </div>

        <div
          id="chat-area"
          className="
          mt-5 text-sm 
          scrollbar-thin scrollbar-thumb-gray-300 bg-white  
          scrollbar-thumb-rounded-full scrollbar-track-rounded-full
          rounded-3xl border-2 md:w-[50%] md:p-3 p-1  w-full overflow-auto scroll-y-auto h-[90%] "
        >
          {dataChat.map((dataMessages, i) =>
            dataMessages[0] === "start" || dataMessages[0] === "bot" ? (
              <div className="chat chat-start drop-shadow-md" key={i}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full border-2 border-blue-500">
                    <img className="scale-150" src={robot_img} />
                  </div>
                </div>
                <div className="chat-bubble chat-bubble-info colo break-words ">
                  <TypeAnimation
                    style={{ whiteSpace: 'pre-line' }}
                    sequence={[
                      dataMessages[1][0],
                      () => SetIsGen(false),
                    ]}
                    cursor={false}
                    speed={100}
                  />
                </div>
              </div>
            ) : (
              <div className="chat chat-end">
                <div className="chat-bubble shadow-xl chat-bubble-primary bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  {dataMessages[1][0]}
                </div>
              </div>
            )
          )}
          {isLoading ? (
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full border-2 border-blue-500">
                  <img src={robot_img} />
                </div>
              </div>
              <div className="chat-bubble chat-bubble-info">
                <ScaleLoader
                  color="#000000"
                  loading={true}
                  height={10}
                  width={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
                {/* <p className="text-xs font-medium">{timeOfRequest + "/60s"}</p> */}
              </div>
            </div>
          ) : (
            ""
          )}
          <div ref={messagesEndRef} />
          <div className="absolute bottom-[0.2rem] md:w-[50%] grid ">
            <input
              type="text"
              placeholder="Nhập câu hỏi tại đây..."
              className="mr-1 shadow-xl border-2 focus:outline-none px-2 rounded-2xl input-primary col-start-1 md:col-end-12 col-end-11 "
              onChange={onChangeHandler}
              onKeyDown={handleKeyDown}
              disabled={isGen}
              value={promptInput}
            />

            <button
              disabled={isGen}
              onClick={() => SendMessageChat()}
              className={
                " drop-shadow-md md:col-start-12 rounded-2xl col-start-11 col-end-12 md:col-end-13 btn btn-active btn-primary btn-square bg-gradient-to-tl from-transparent via-blue-600 to-indigo-500"
              }
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                color="white"
                height="15px"
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
            <p className=" text-xs col-start-1 col-end-12 text-justify p-1">
              <b>Lưu ý: </b>Mô hình có thể đưa ra câu trả lời không chính xác ở
              một số trường hợp, vì vậy hãy luôn kiểm chứng thông tin bạn nhé!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatBot;
