import Image from "next/image";
import React from "react";

export default function LeftBar() {
  return (
    <div className="basis-1/4 text-sm">
      <div className="rounded-t-md overflow-hidden mt-2">
        <div className="flex px-2 py-2 gap-2 text-white font-bold items-center bg-[url('https://xosodanang-vn.com/assets/images/template/H2.png')] bg-no-repeat bg-center object-cover">
          <Image
            src="https://xosodanang-vn.com/assets/images/template/icon_3.png"
            alt=""
            width={100}
            height={100}
            className="h-4 w-auto"
          />
          <span>Tường thuật trực tiếp</span>
        </div>
        <div>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Trực tiếp M.Bắc</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Trực tiếp M.Trung</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Trực tiếp M.Nam</span>
          </a>
        </div>
      </div>

      <div className="rounded-t-md overflow-hidden mt-2">
        <div className="flex px-2 py-2 gap-2 text-white font-bold items-center bg-[url('https://xosodanang-vn.com/assets/images/template/H2.png')] bg-no-repeat bg-center object-cover">
          <Image
            src="https://xosodanang-vn.com/assets/images/template/icon_3.png"
            alt=""
            width={100}
            height={100}
            className="h-4 w-auto"
          />
          <span className="text-title-bar">Quay thưởng hôm nay</span>
        </div>
        <div className="detail-item">
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Miền Bắc - 18h 15</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">An Giang - 16h 20</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Tây Ninh - 16h 20</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Bình Thuận - 16h 20</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Bình Định - 17h 15</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Quảng Bình - 17h 15</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">In kết quả xổ số</span>
          </a>
        </div>
      </div>

      <div className="rounded-t-md overflow-hidden mt-2">
        <div className="flex px-2 py-2 gap-2 text-white font-bold items-center bg-[url('https://xosodanang-vn.com/assets/images/template/H2.png')] bg-no-repeat bg-center object-cover">
          <Image
            src="https://xosodanang-vn.com/assets/images/template/icon_3.png"
            alt=""
            width={100}
            height={100}
            className="h-4 w-auto"
          />
          <span className="text-title-bar">Quay thưởng hôm qua</span>
        </div>
        <div className="detail-item">
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Đồng Nai</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Sóc Trăng</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Cần Thơ</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Khánh Hòa</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Đà Nẵng</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Điện toán 123</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Điện toán 6x36</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Thần tài</span>
          </a>
        </div>
      </div>

      <div className="rounded-t-md overflow-hidden mt-2">
        <div className="flex px-2 py-2 gap-2 text-white font-bold items-center bg-[url('https://xosodanang-vn.com/assets/images/template/H2.png')] bg-no-repeat bg-center object-cover">
          <Image
            src="https://xosodanang-vn.com/assets/images/template/icon_3.png"
            alt=""
            width={100}
            height={100}
            className="h-4 w-auto"
          />
          <span className="text-title-bar">Bảng Lô tô</span>
        </div>
        <div className="detail-item">
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Kết quả lô tô Miền Bắc</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Kết quả lô tô Miền Nam</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Kết quả lô tô Miền Trung</span>
          </a>
        </div>
      </div>

      <div className="rounded-t-md overflow-hidden mt-2">
        <div className="flex px-2 py-2 gap-2 text-white font-bold items-center bg-[url('https://xosodanang-vn.com/assets/images/template/H2.png')] bg-no-repeat bg-center object-cover">
          <Image
            src="https://xosodanang-vn.com/assets/images/template/icon_3.png"
            alt=""
            width={100}
            height={100}
            className="h-4 w-auto"
          />
          <span className="text-title-bar">Tiện ích</span>
        </div>
        <div className="detail-item">
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Kết quả bóng đá</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Tra cứu kết quả theo ngày</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Tra cứu loto / Dò số</span>
          </a>
          <a
            href="#"
            className="flex py-1 px-4 border-b border-x border-gray-300 border-solid items-center gap-2"
          >
            <Image
              className="h-3 w-auto"
              src="https://xosodanang-vn.com/assets/images/template/add.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="text-link-list">Lịch mở thưởng</span>
          </a>
        </div>
      </div>
    </div>
  );
}
