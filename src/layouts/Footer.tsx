import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";

const businessData = {
  phone: "0909 123 456",
  email: "info@onehousing.vn",
  address:
    "Tầng 1, Tòa văn phòng T26, KĐT Times City, 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
  hotline: "1800 646 466",
  website: "https://onehousing.vn",
};

const navLinks = [
  {
    title: "Dịch vụ",
    links: [
      { text: "Tư vấn bán", href: "#" },
      { text: "Vay thế chấp", href: "#" },
      { text: "Định giá căn nhà", href: "#" },
      { text: "Thông tin dự án", href: "#" },
      { text: "Pro Agent", href: "#" },
    ],
  },
  {
    title: "Của Số BĐS",
    links: [
      { text: "Của Số BĐS", href: "#" },
      { text: "Phân tích thị trường", href: "#" },
      { text: "Dự án", href: "#" },
      { text: "Giải pháp tài chính", href: "#" },
      { text: "Nghề BĐS", href: "#" },
    ],
  },
  {
    title: "Chính sách sàn thương mại điện tử",
    links: [
      { text: "Quy chế hoạt động website cung cấp dịch vụ TMĐT", href: "#" },
      { text: "Điều khoản và điều kiện giao dịch", href: "#" },
      { text: "Chính sách bảo vệ và xử lý dữ liệu", href: "#" },
      { text: "Điều khoản và điều kiện chung dịch vụ môi giới BĐS", href: "#" },
    ],
  },
  {
    title: "Chính sách mạng xã hội và thông tin thêm",
    links: [
      { text: "Thỏa thuận cung cấp và sử dụng dịch vụ mạng xã hội", href: "#" },
      { text: "Câu hỏi thường gặp", href: "#" },
      { text: "Về chúng tôi", href: "#" },
    ],
    social: {
      title: "Kênh phát triển OneHousing",
      links: [
        { icon: Facebook, label: "Facebook", href: "#" },
        { icon: Instagram, label: "Instagram", href: "#" },
        { icon: Youtube, label: "Youtube", href: "#" },
      ],
    },
  },
];

const Nav = () => {
  return (
    <nav className="grid gap-4 sm:grid-cols-4 lg:col-span-4">
      {navLinks.map((section, index) => (
        <div key={index} className="space-y-3">
          <h3 className="font-semibold">{section.title}</h3>
          <ul className="space-y-2 text-sm">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
          {section.social && (
            <div className="space-y-3 pt-4">
              <h3 className="font-semibold">{section.social.title}</h3>
              <div className="flex gap-4">
                {section.social.links.map((social, socialIndex) => (
                  <Link key={socialIndex} href={social.href} className="text-gray-600 hover:text-gray-900">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default function Footer() {
  return (
    <footer className=" border-t bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid gap-12 lg:grid-cols-8">
          <div className="space-y-4 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo size="lg" />
            </Link>
            <GenerationInfo />
          </div>
          <Nav />
        </div>
      </div>
      <hr className="h-[4px] bg-slate-300 container mx-auto" />
      <div className="border-t bg-gray-50 px-4 py-6 text-center text-sm text-gray-600">
        <Certification />
      </div>
    </footer>
  );
}

const Certification = () => {
  return (
    <div className="space-y-4">
      <p>
        Công ty Cổ phần One Mount Real Estate - Sàn giao dịch Bất Động Sản là thành viên của One Mount Group. Giấy chứng
        nhận đăng ký doanh nghiệp, mã số doanh nghiệp: 0109178175.
      </p>
      <p>
        Đăng ký lần đầu ngày 11/05/2020. Cấp bởi: Sở Kế hoạch và Đầu tư Thành phố Hà Nội. Loại hình website: Sàn giao
        dịch TMĐT. Website khuyến mại trực tuyến
      </p>
      <p>
        Lĩnh vực kinh doanh: Bất động sản, FMHD mua bán, phân phối TMĐT. Thời gian hoạt động thông thường xuyên, sản
        phẩm, dịch vụ khác.
      </p>
      <p>Tên người đại diện theo pháp luật: Đoàn Thị Hồng Nhung</p>
      <p>Thông tin liên hệ tại nơi bố trí mạng xã hội</p>
      <p>Chịu trách nhiệm quản lý nội dung: Nguyễn Lê Thành</p>
      <p>Số giấy phép thiết lập mạng xã hội: Số 371/GP-BTTTT</p>
      <p>Ngày cấp: 04/10/2023</p>
      <p>Cơ quan cấp phép: Bộ Thông tin và Truyền thông</p>
      <p>© 2021 Bản quyền thuộc về OneHousing.vn</p>
      <div className="flex justify-center">
        <Image src="/bo-cong-thuong.webp" alt="Đã đăng ký Bộ Công Thương" width={130} height={49} />
      </div>
    </div>
  );
};
const GenerationInfo = () => {
  return (
    <div className="space-y-2 text-sm">
      <div className="flex gap-2">
        <MapPin className="h-4 w-4 shrink-0 " />
        <p className="max-w-[45ch]">{businessData.address}</p>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="h-4 w-4" />
        <p>Hotline: {businessData.hotline}</p>
      </div>
      <p>{businessData.website}</p>
      <p>SĐT doanh nghiệp: {businessData.phone}</p>
    </div>
  );
};
