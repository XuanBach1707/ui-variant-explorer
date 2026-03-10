# Neumorphism (Soft UI)

## 1. Core Philosophy (Triết lý cốt lõi)
Triệt tiêu ranh giới màu sắc giữa Element (Thành phần) và Background (Nền). Sử dụng kỹ thuật Extrusion (Đùn khối) thông qua Dual-shadow Architecture (Kiến trúc đổ bóng kép). Hình khối (Volume) của giao diện được định hình hoàn toàn bằng việc giả lập một Light Source (Nguồn sáng) cố định (thường ở góc trên bên trái), tạo ra một Light Shadow (Bóng sáng) định hướng âm và một Dark Shadow (Bóng tối) định hướng dương. Mọi UI Component (Thành phần giao diện) đều chia sẻ cùng một mã màu nền với Root Container (Khối chứa gốc).



## 2. Selection Rules (Quy tắc chọn lựa cho AI)
**Khi nào DÙNG (Positive Triggers):**
- Phát triển các Hardware Control Panels (Bảng điều khiển phần cứng) hoặc Smart Home Dashboards (Bảng điều khiển nhà thông minh).
- Các ứng dụng dạng Kiosk (Trạm thông tin) hoặc Audio Players (Trình phát âm thanh) có số lượng Interactive Elements (Thành phần tương tác) ít nhưng kích thước lớn.
- Các giao diện yêu cầu mô phỏng Physical Tactility (Tính xúc giác vật lý) cao thông qua trạng thái Pressed (Được nhấn).

**Khi nào KHÔNG DÙNG (Negative Triggers):**
- Enterprise Data Tables (Bảng dữ liệu doanh nghiệp) và Complex Forms (Biểu mẫu phức tạp) - Kiến trúc bóng kép yêu cầu Spacing (Khoảng cách) cực lớn, làm phá vỡ Information Density (Mật độ thông tin).
- Các hệ thống yêu cầu tuân thủ Accessibility (Khả năng truy cập) khắt khe (WCAG AAA) do độ tương phản giữa khối và nền cực kỳ thấp.
- Các giao diện Text-heavy (Nặng về văn bản đọc).

## 3. Strict Scales (Thang đo bắt buộc)

### Typography Scale (High-Contrast Compensation)
Do Background tĩnh thiếu độ phân cách, Typography bắt buộc phải chịu tải trọng phân cấp thị giác chính.
- `xs` (12px): Helper text (Bắt buộc dùng `font-semibold uppercase text-gray-500`).
- `sm` (14px): Input text, Button text (Bắt buộc `font-bold`).
- `base` (16px): Body default.
- `lg` (18px) / `xl` (20px): Card title (Bắt buộc `font-bold text-gray-800`).
- `2xl` (24px) trở lên: Page Title (H1).

### Geometry & Spacing Scale (High Margin / Soft Radius)
- Border-radius: Góc bo bắt buộc phải lớn (`rounded-xl`, `rounded-2xl`, `rounded-full`) để ánh xạ bóng mượt mà, chống hiện tượng Gãy bóng (Shadow clipping).
- Spacing: Component Gap (Khoảng cách thành phần) tối thiểu `gap-6` (24px). Padding nội bộ của Container tối thiểu `p-6` hoặc `p-8`.

## 4. Color Palette & Functional States (Bảng màu & Trạng thái chức năng)
- **Global Base Color:** Bắt buộc sử dụng MỘT mã Hex duy nhất cho cả `body` và tất cả các `div` con. Trong template này, cố định ở mức `#e0e0e0` (Light Gray).
- **Shadow Hex Codes:**
  - Dark Shadow: `#bebebe` (Bóng tối, góc dưới phải).
  - Light Shadow: `#ffffff` (Bóng sáng, góc trên trái).
- **Text:** `text-gray-700` (Primary), `text-gray-500` (Secondary). Tuyệt đối không dùng chữ Trắng.
- **Interactive State (Active/Pressed):** Khi thành phần được kích hoạt, hoán đổi Drop-shadow (Bóng ngoài) thành Inset-shadow (Bóng trong) để lật ngược hiệu ứng đùn khối thành hiệu ứng khoét lõm (Depression effect).

## 5. Layout Patterns (Mẫu bố cục)
- Container: Rời rạc, sử dụng khoảng trắng lớn. Các thành phần không được phép xếp dính liền nhau (Zero-spacing).
- Flow: Ưu tiên Center-alignment (Căn giữa) đối với các Controls (Bộ điều khiển) dạng tròn, hoặc Grid với khoảng cách `gap-8` cho các Cards.

## 6. Tailwind Tokens Mapping (Bản đồ biến Tailwind)
*(Lưu ý: Bắt buộc sử dụng Arbitrary Values `[...]` cho bóng đổ vì hệ thống Design Tokens mặc định của Tailwind không hỗ trợ Dual-shadowing).*

| Component / State | Tailwind Classes |
| :--- | :--- |
| **Surface & Layout** | |
| App Base (Root) | `min-h-screen bg-[#e0e0e0] p-8 font-sans text-gray-700` |
| Neumorphic Card | `bg-[#e0e0e0] rounded-3xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] p-8` |
| Pressed Card (Well) | `bg-[#e0e0e0] rounded-3xl shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] p-8` |
| **Typography** | |
| Headline | `text-2xl font-black text-gray-800 tracking-tight mb-8` |
| Subtitle | `text-lg font-bold text-gray-700 mb-4` |
| Body Text | `text-base font-medium text-gray-600 leading-relaxed` |
| Label | `block text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider` |
| **Form Controls** | |
| Input Default (Pressed)| `block w-full bg-[#e0e0e0] rounded-xl shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] px-5 py-4 text-base text-gray-700 placeholder-gray-400 border-none transition-all` |
| Input Focus | `focus:outline-none focus:ring-2 focus:ring-gray-400 focus:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]` |
| Checkbox Neumorphic | `appearance-none w-6 h-6 bg-[#e0e0e0] rounded-md shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] checked:shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] checked:bg-gray-300 focus:outline-none transition-all cursor-pointer` |
| **Buttons & Actions** | |
| Primary Button | `inline-flex items-center justify-center w-full bg-[#e0e0e0] text-gray-700 px-6 py-4 rounded-xl text-base font-bold shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] active:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] focus:outline-none transition-all duration-200` |
| Floating Action (Round)| `inline-flex items-center justify-center w-16 h-16 bg-[#e0e0e0] text-gray-700 rounded-full shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] active:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] transition-all duration-200` |
| **Data Display** | |
| Divider / Track | `w-full h-2 bg-[#e0e0e0] rounded-full shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] my-8` |

## 7. Forbidden Patterns (Các mẫu cấu trúc BỊ CẤM)
Tuyệt đối KHÔNG sử dụng các kỹ thuật sau trong theme này:
- Sự chênh lệch mã màu nền giữa Container (Khối chứa ngoài) và Component (Thành phần bên trong). Chúng bắt buộc phải giống nhau 100%.
- Sử dụng Border (Đường viền) thuộc bất kỳ loại nào (Đứt nét, liền nét, màu trong suốt). Đường viền phá vỡ nguyên lý Extrusion.
- Bóng đổ đơn hướng (Single-directional shadow) theo kiểu Material Design.
- Sử dụng màu Pure White (`#ffffff`) hoặc Pure Black (`#000000`) làm Base Color (Không thể tính toán được mã màu bóng đổ nếu dùng hai điểm cực trị này).
- Góc vuông sắc nhọn (`rounded-none`).