"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";

export default function RightBar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="basis-1/4 text-sm">
      <div className="rounded-t-md border overflow-hidden mt-2">
        <div className="flex px-2 py-2 gap-2 text-white font-bold items-center bg-[url('https://xosodanang-vn.com/assets/images/template/H2.png')] bg-no-repeat bg-center object-cover">
          <Image
            className="h-4 w-auto"
            src="https://xosodanang-vn.com/assets/images/template/icon_3.png"
            alt=""
            width={100}
            height={100}
          />
          <span>Kết quả theo ngày</span>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="flex justify-center items-center"
        />
      </div>
      <div className="rounded-t-md overflow-hidden mt-2">
        <div className="flex px-2 py-2 gap-2 text-white font-bold items-center bg-[url('https://xosodanang-vn.com/assets/images/template/H2.png')] bg-no-repeat bg-center object-cover">
          <Image
            className="h-4 w-auto"
            src="https://xosodanang-vn.com/assets/images/template/icon_3.png"
            alt=""
            width={100}
            height={100}
          />
          <span>Thống kê cầu</span>
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
            <span className="text-link-list">Cầu xổ số các tỉnh</span>
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
            <span className="text-link-list">Thống kê bạch thủ (MB)</span>
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
            <span className="text-link-list">Thống kê lật liên tục (MB)</span>
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
            <span className="text-link-list">Thống kê về cả cặp (MB)</span>
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
            <span className="text-link-list">Thống kê nhiều nháy (MB)</span>
          </a>
        </div>
      </div>
      <div className="rounded-t-md overflow-hidden mt-2">
        <div className="flex px-2 py-2 gap-2 text-white font-bold items-center bg-[url('https://xosodanang-vn.com/assets/images/template/H2.png')] bg-no-repeat bg-center object-cover">
          <Image
            className="h-4 w-auto"
            src="https://xosodanang-vn.com/assets/images/template/icon_3.png"
            alt=""
            width={100}
            height={100}
          />
          <span>Thống kê cơ bản</span>
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
            <span className="text-link-list">Thống kê Đầu, Đuôi</span>
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
            <span className="text-link-list">Thống kê Tổng</span>
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
            <span className="text-link-list">Thống kê lần xuất hiện</span>
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
            <span className="text-link-list">Thống kê 00-99</span>
          </a>
        </div>
      </div>
      <div className="rounded-t-md overflow-hidden mt-2">
        <div className="flex px-2 py-2 gap-2 text-white font-bold items-center bg-[url('https://xosodanang-vn.com/assets/images/template/H2.png')] bg-no-repeat bg-center object-cover">
          <Image
            className="h-4 w-auto"
            src="https://xosodanang-vn.com/assets/images/template/icon_3.png"
            alt=""
            width={100}
            height={100}
          />
          <span>Thống kê lô tô</span>
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
            <span className="text-link-list">Lô tô nhanh</span>
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
            <span className="text-link-list">Quan trọng</span>
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
            <span className="text-link-list">Tổng hợp</span>
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
            <span className="text-link-list">Theo đầu</span>
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
            <span className="text-link-list">Theo đuôi</span>
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
            <span className="text-link-list">Theo tổng</span>
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
            <span className="text-link-list">Gan miền bắc</span>
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
            <span className="text-link-list">Theo nhịp</span>
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
            <span className="text-link-list">Theo chu kỳ</span>
          </a>
        </div>
      </div>
    </div>
  );
}
