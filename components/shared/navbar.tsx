import Image from "next/image";

export default function NavBar() {
  return (
    <div>
      <Image
        src="https://xosodanang-vn.com/assets/images/template/banner.png"
        alt="banner"
        layout="responsive"
        width={100}
        height={100}
        className="h-full w-auto object-cover max-h-full"
      />

      <div className="flex h-8 bg-gradient-to-b from-[#f54f4e] to-[#8b0004] font-bold">
        <a href="#">
          <Image
            width={100}
            height={100}
            src="https://xosodanang-vn.com/assets/images/template/buttons_home.png"
            alt="btn_home"
            className="h-full w-auto object-contain max-h-full"
          />
        </a>

        <a href="#">
          <Image
            width={100}
            height={100}
            src="https://xosodanang-vn.com/assets/images/template/srv_hh.png"
            alt="srv_hh"
            className="h-full w-auto object-contain max-h-full"
          />
        </a>

        <a
          href="#"
          className="flex items-center justify-center bg-white rounded-t-lg p-2 mx-1 gap-2 text-sm"
        >
          <Image
            width={100}
            height={100}
            src="https://xosodanang-vn.com/assets/images/template/icon_title_bar.png"
            alt="icon_title_bar_1"
            className="w-auto object-contain max-h-full"
          />
          <span>PHÂN TÍCH KQXS</span>
        </a>

        <a
          href="#"
          className="flex items-center justify-center bg-white rounded-t-lg p-2 mx-1 gap-2 text-sm"
        >
          <Image
            width={100}
            height={100}
            src="https://xosodanang-vn.com/assets/images/template/icon_title_bar.png"
            alt="icon_title_bar"
            className="w-auto object-contain max-h-full"
          />
          <span>MIÈN BẮC</span>
        </a>

        <a
          href="#"
          className="flex items-center justify-center bg-white rounded-t-lg p-2 mx-1 gap-2 text-sm"
        >
          <Image
            width={100}
            height={100}
            src="https://xosodanang-vn.com/assets/images/template/icon_title_bar.png"
            alt="icon_title_bar_2"
            className="w-auto object-contain max-h-full"
          />
          <span>MIÈN TRUNG</span>
        </a>

        <a
          href="#"
          className="flex items-center justify-center bg-white rounded-t-lg p-2 mx-1 gap-2 text-sm"
        >
          <Image
            width={100}
            height={100}
            src="https://xosodanang-vn.com/assets/images/template/icon_title_bar.png"
            alt="icon_title_bar_3"
            className="w-auto object-contain max-h-full"
          />
          <span>MIÈN NAM</span>
        </a>
      </div>

      <div className="flex justify-between border-b border-solid border-gray-400 py-2">
        <div className="font-bold">
          <a href="#" className="border-solid border-r border-gray-400 px-4">
            Trực tiếp
          </a>
          <a href="#" className="border-solid border-r border-gray-400 px-4">
            Thống kê
          </a>
          <a href="#" className="border-solid border-r border-gray-400 px-4">
            Lô tô
          </a>
          <a href="#" className="border-solid border-r border-gray-400 px-4">
            Xổ số Điện toán
          </a>
          <a href="#" className="border-solid border-r border-gray-400 px-4">
            Tin tức
          </a>
        </div>
        <div>
          <span>Tải APP: Andoird, iPhone, Windows Phone, Mã nhúng KQXS</span>
        </div>
      </div>
    </div>
  );
}
