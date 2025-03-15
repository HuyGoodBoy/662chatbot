import { useLocation,useNavigate,Link } from 'react-router-dom';
function NavBar() {
  const navigate = useNavigate ();
  const location = useLocation();
  return (
    <div className="navbar bg-base-100 w-[95%] ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/ai-law-front-end">
                <a>Trang chủ</a>
              </Link>
            </li>
            <li>
              <Link to="/ai-law-front-end/chat">
                <a>Trò chuyện</a>
              </Link>
            </li>
            <li>
              <Link to="/ai-law-front-end/faq">
              <a>FAQs</a>
              </Link>
            </li>
            <li>
              <Link to="/ai-law-front-end/issue">
              <a>Báo lỗi/ Góp ý</a>
              </Link>
            </li>
          </ul>
        </div>
        <a  onClick={()=>navigate("/")}  className="btn btn-ghost normal-case font-extrabold text-xl bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">
        662Chatbot
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold ">
          <li className='p-1'>
              <button onClick={()=>navigate("/ai-law-front-end")} className={location.pathname=="/ai-law-front-end"?"btn btn-outline btn-primary":""}>Trang chủ</button>
          </li>
          <li className='p-1'>
              <button onClick={()=>navigate("/ai-law-front-end/chat")} className={location.pathname=="/ai-law-front-end/chat"?"btn btn-outline btn-primary":""}>Trò chuyện</button>
          </li>
          <li className='p-1'>
              <button onClick={()=>navigate("/ai-law-front-end/faq")} className={location.pathname=="/ai-law-front-end/faq"?"btn btn-outline btn-primary":""}>FAQs</button>
          </li>
          <li className='p-1'>
              <button onClick={()=>navigate("/ai-law-front-end/issue")} className={location.pathname=="/ai-law-front-end/issue"?"btn btn-outline btn-primary":""}>Báo lỗi/ Góp ý</button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn btn-outline btn-primary md:flex hidden">
            Đăng nhập
          </a> */}
      </div>
    </div>
  );
}
export default NavBar;
