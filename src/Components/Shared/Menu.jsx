import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsChatRightTextFill, BsPeopleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiTwotoneSetting } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getToken } from "../../Hook/getToken";
import { decodeToken } from "../../Hook/decodeToken";

function Menu() {
  const [searchText, setSearchText] = useState("");
  const [myid, setMyid] = useState({
    myid: "",
  });
  useEffect(() => {
    const token = getToken("accessToken");
    const data = decodeToken(token);
    setMyid({
      myid: data.userId,
    });
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <section className="sticky top-0">
        <h1 className="flex items-center py-2 px-4 bg-slate-900">
          <span className="block text-3xl w-1/6 text-white bolder text-3lg">
            diahoo
          </span>
          <div className="w-3/6">
            <ul className="flex items-center">
              <li className="w-1/5 block px-10">
                <Link to={"/"}>
                  <FaHome className="text-white text-2xl" />
                </Link>
              </li>
              <li className="w-1/5 block px-10">
                <Link to={`/message/${myid.myid}`}>
                  <BsChatRightTextFill className="text-white text-xl" />
                </Link>
              </li>
              <li className="w-1/5 block px-10">
                <Link to={"/myprofile"}>
                  <CgProfile className="text-white text-xl" />
                </Link>
              </li>
              <li className="w-1/5 block px-10">
                <Link to={"/friend"}>
                  <BsPeopleFill className="text-white text-xl" />
                </Link>
              </li>
              <li className="w-1/5 block px-10">
                <Link to={"/setting"}>
                  <AiTwotoneSetting className="text-white text-xl" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-2/6 flex items-center justify-end">
            <input
              className="px-4 py-2 bg-black border-l-rose-600 text-white rounded-xl shadow w-4/6"
              type="search"
              name="searchValu"
              id="searchValu"
              placeholder="Search your key word...."
              value={searchText}
              onChange={handleSearchInputChange}
            />
            <Link to={`/search/${searchText}`}>
              <button
                className="bg-slate-700 text-rose-50 rounded-xl shadow py-2 px-4"
                type="button"
              >
                Search
              </button>
            </Link>
          </div>
        </h1>
      </section>
    </>
  );
}

export default Menu;
