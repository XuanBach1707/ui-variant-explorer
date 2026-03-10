# Neo-Brutalism

## 1. Core Philosophy (Triết lý cốt lõi)
Intentional Rebellion (Sự nổi loạn có chủ đích). Thiết kế bỏ qua các quy chuẩn thiết kế hiện đại nhằm tối đa hóa Visual Impact (Tác động thị giác). Đặc trưng bởi Hard Strokes (Đường viền cứng, dày), Solid Offset Shadows (Bóng đổ khối đặc dạng xê dịch, triệt tiêu hoàn toàn tham số Blur), và Raw Typography (Kiểu chữ thô). Mọi UI Component (Thành phần giao diện) đều được đóng khung rõ ràng để phân định Box Model (Mô hình hộp).

## 2. Selection Rules (Quy tắc chọn lựa cho AI)
**Khi nào DÙNG (Positive Triggers):**
- Landing pages hoặc Web Apps hướng đến đối tượng Gen Z, Creators yêu cầu nhận diện thương hiệu mạnh mẽ.
- Các dự án Web3, Portfolios thiết kế, Agency Websites.
- Các công cụ sáng tạo như Whiteboards (Bảng trắng trực tuyến) hoặc Design Tools (Công cụ thiết kế).

**Khi nào KHÔNG DÙNG (Negative Triggers):**
- Enterprise Admin Portals (Cổng quản trị doanh nghiệp) hoặc Financial Dashboards (Bảng điều khiển tài chính).
- Các ứng dụng yêu cầu Information Density (Mật độ thông tin) cao. Border-width (Đường viền) và Solid Shadows (Bóng khối đặc) sẽ chiếm quá nhiều diện tích Grid System (Hệ thống lưới).
- Các hệ thống hướng đến người dùng đại chúng cần Standard Navigation (Luồng điều hướng tiêu chuẩn).

## 3. Strict Scales (Thang đo bắt buộc)

### Typography Scale (Heavy-Weight Scale)
Hệ thống phân cấp loại bỏ các biến số mỏng.
- `sm` (14px): Ít được sử dụng. Nếu có, bắt buộc dùng `font-bold uppercase`.
- `base` (16px): Body default. Bắt buộc dùng `font-semibold` hoặc `font-bold`.
- `lg` (18px) / `xl` (20px): Card title. Bắt buộc `font-black text-black`.
- `2xl` (24px) đến `5xl` (48px): Page Title (H1). Bắt buộc `font-black uppercase tracking-tighter`.

### Geometry & Spacing Scale (Hard Geometry)
- Border-width: Bắt buộc từ `border-2` đến `border-4`. Tuyệt đối không sử dụng `border` (1px).
- Border-radius: Giới hạn nghiêm ngặt ở mức vuông góc (`rounded-none`) hoặc bo rất nhẹ (`rounded-sm`).
- Shadow Offset: Giá trị dịch chuyển tọa độ X, Y của bóng phải tương đương hoặc lớn hơn Border-width, giới hạn phổ biến từ 4px đến 8px (`4px 4px 0px 0px rgba(0,0,0,1)`).

## 4. Color Palette & Functional States (Bảng màu & Trạng thái chức năng)
- **Background Root:** Các màu sáng có Saturation (Độ bão hòa) thấp hoặc Primary colors (Màu cơ bản) rực rỡ như `bg-yellow-200`, `bg-pink-300`, `bg-blue-400`.
- **Surface:** Trắng thuần (`bg-white`) hoặc màu nền tương phản cao.
- **Border & Shadow Color:** Bắt buộc là Pure Black (`#000000`).
- **Text Color:** Đen thuần (`text-black`).
- **Interactive State (Active/Hover):** Xóa Shadow hiện tại và áp dụng Translate (Dịch chuyển tọa độ) theo trục X và Y một khoảng đúng bằng thông số Shadow Offset để mô phỏng Physical click event (Sự kiện nhấp chuột vật lý).

## 5. Layout Patterns (Mẫu bố cục)
- Container: Cấu trúc Grid (Lưới) rõ ràng với Spacing (Khoảng cách) lớn (`gap-6`, `gap-8`). Yêu cầu khoảng cách này để các Solid Shadows không bị tràn (Overflow) và đè lên Components liền kề.
- Alignment: Cho phép Asymmetrical Alignment (Căn chỉnh bất đối xứng) nhưng cấu trúc Box Model tổng thể phải toàn vẹn.

## 6. Tailwind Tokens Mapping (Bản đồ biến Tailwind)

| Component / State | Tailwind Classes |
| :--- | :--- |
| **Surface & Layout** | |
| App Base (Root) | `min-h-screen bg-[#fde047] p-6 sm:p-10 font-sans text-black` |
| Brutalist Card | `bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none` |
| **Typography** | |
| Headline | `text-4xl sm:text-5xl font-black text-black uppercase tracking-tighter mb-8` |
| Subtitle | `text-2xl font-black text-black mb-4` |
| Body Text | `text-base font-bold text-gray-900 leading-relaxed` |
| Label | `block text-sm font-black text-black mb-2 uppercase tracking-widest` |
| **Form Controls** | |
| Input Default | `block w-full bg-white border-4 border-black px-4 py-3 text-base font-bold text-black placeholder-gray-500 focus:outline-none focus:bg-[#fbcfe8] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors` |
| Checkbox Brutalist | `appearance-none w-6 h-6 bg-white border-4 border-black checked:bg-black focus:outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-none` |
| **Buttons & Actions** | |
| Primary Button | `inline-flex items-center justify-center bg-[#3b82f6] text-black border-4 border-black px-8 py-4 text-lg font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none transition-all duration-75` |
| Secondary Button | `inline-flex items-center justify-center bg-white text-black border-4 border-black px-8 py-4 text-lg font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none transition-all duration-75` |
| **Data Display** | |
| Brutal Badge | `inline-block bg-[#f472b6] border-2 border-black text-black px-3 py-1 text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]` |
| Table Wrapper | `w-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]` |
| Table Header (TH) | `bg-black text-left text-sm font-black text-white uppercase tracking-widest px-6 py-4 border-b-4 border-black` |
| Table Cell (TD) | `px-6 py-4 text-base font-bold text-black border-b-2 border-black` |

## 7. Forbidden Patterns (Các mẫu cấu trúc BỊ CẤM)
Tuyệt đối KHÔNG sử dụng các kỹ thuật sau trong theme này:
- Bất kỳ tham số Blur (Làm mờ) nào trên `box-shadow` hoặc `text-shadow`. Bóng đổ bắt buộc phải là Solid Hex (Mã màu đặc).
- Thành phần không có viền bao quanh (Borderless elements). Border cứng là bắt buộc để duy trì cấu trúc Brutalism.
- Phông chữ mỏng (`font-light`, `font-thin`, `font-normal`).
- Hiệu ứng chuyển cảnh (CSS Transitions) dài hơn `150ms`. Trạng thái Hover/Active phải xảy ra gần như tức thời (`duration-75` hoặc `transition-none`) để mô phỏng Hardware Mechanics (Cơ học phần cứng).
- Cấu trúc bo góc mềm mại (`rounded-lg`, `rounded-full`). Trừ khi thiết kế thẻ dạng viên thuốc (Pill shape) nhưng bắt buộc đi kèm viền đen cực dày.