import React from "react";
import { Link } from "react-router-dom";

export default function SpecialStory() {
  return (
    <div className="flex flex-wrap md:flex-nowrap bg-home h-fit bg-no-repeat my-10">
      <div className="w-[100%] h-[692px]"></div>
      <div className="w-fit p-10">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/foodorder-842d1.appspot.com/o/images%2Fmtk.png?alt=media&token=3a5a3bc9-99a0-49b1-9aac-786750e2135a"
            alt=""
          />
        </div>
        <div className="mt-6">
          <p className="text-slate-500">
            "Mục thần ký" hiện đã giữ vị trí số 1 trong lòng người hâm mộ. Với 4
            tháng đứng đầu bảng xếp hạng, "Mục thần ký" đã chứng minh được sức
            hút của mình.
          </p>

          {/* TODO: navigate to story  */}
          <Link to="/menu/tea">
            <button className="mt-6 py-2 w-full bg-[#778B37] text-white rounded-lg">
              Đọc ngay
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
