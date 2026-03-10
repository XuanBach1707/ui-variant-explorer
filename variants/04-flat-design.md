# Flat Design

## 1. Core Philosophy (Triết lý cốt lõi)
Triệt tiêu hoàn toàn Z-axis (Trục Z). Giao diện hoạt động trên một mặt phẳng 2D tuyệt đối (Absolute 2D plane). Hệ thống phân cấp thị giác (Visual Hierarchy) được thiết lập độc quyền thông qua Color Blocks (Các khối màu đặc), Grid Systems (Hệ thống lưới nghiêm ngặt), và Typographic Contrast (Độ tương phản kiểu chữ). Tuyệt đối không có khái niệm Depth (Độ sâu không gian).


## 2. Selection Rules (Quy tắc chọn lựa cho AI)
**Khi nào DÙNG (Positive Triggers):**
- Các ứng dụng B2B/Dashboard chú trọng hoàn toàn vào Data Visibility (Khả năng hiển thị dữ liệu) mà không muốn người dùng bị phân tâm bởi hiệu ứng thị giác.
- Giao diện yêu cầu tuân thủ nghiêm ngặt tiêu chuẩn Accessibility (Khả năng truy cập), cần độ tương phản tĩnh (Static Contrast) đạt chuẩn WCAG AAA.
- Hệ thống CMS (Content Management System) hoặc ERP (Enterprise Resource Planning) có cấu trúc dạng lưới phân vùng (Split-pane layouts).
- Ứng dụng muốn tối ưu hóa triệt để Rendering Performance (Hiệu suất kết xuất) trên các thiết bị cấu hình thấp.

**Khi nào KHÔNG DÙNG (Negative Triggers):**
- Hệ thống có quá nhiều Modals (Hộp thoại nổi), Popovers (Cửa sổ bật lên), hoặc Dropdowns đè lên nhau (Sẽ rất khó phân biệt các lớp nếu không có Shadow).
- Các sản phẩm yêu cầu định hướng không gian (Spatial navigation) phức tạp hoặc Drag-and-Drop (Kéo thả) nhiều lớp.
- Ứng dụng tiêu dùng (Consumer apps) cần tính thẩm mỹ hiện đại, mềm mại.

## 3. Strict Scales (Thang đo bắt buộc)

### Typography Scale (High-Contrast Scale)
- `xs` (12px): Badge, Helper text, Table header (Bắt buộc dùng `font-bold uppercase tracking-widest`).
- `sm` (14px): Body default, Input text.
- `base` (16px): Section text, Button text (Bắt buộc `font-semibold`).
- `lg` (18px): Card title (Bắt buộc `font-bold`).
- `xl` (20px): Page subsection header.
- `2xl` (24px): Page Title (H1) - Maximum allowed size.

### Spacing & Geometry Scale (Strict Grid)
- Khớp nối Component nhỏ: `gap-3` hoặc `space-x-3`.
- Form Group (Label + Input): `gap-2` / `mb-2`.
- Border-radius: Giới hạn nghiêm ngặt ở mức sắc cạnh (`rounded-none`) hoặc bo cực nhẹ (`rounded-sm` / 2px).
- Border-width: Sử dụng viền rõ ràng (`border-2`) cho các Interactive Elements (Thành phần tương tác) như Button/Input.

## 4. Color Palette & Functional States (Bảng màu & Trạng thái chức năng)
- **Background Root:** `bg-gray-100` hoặc `bg-[#f0f0f0]` (Tạo ranh giới rõ ràng với thẻ `bg-white`).
- **Surface (Khối hiển thị):** Trắng thuần (`bg-white`) hoặc các dải màu Solid nguyên bản.
- **Primary Action:** Solid Web-safe Colors (Ví dụ: `bg-blue-600`). Không dùng màu nhạt (Pastel).
- **Text:** Độ tương phản cực cao (`text-black` hoặc `text-gray-900` trên nền sáng, `text-white` trên nền đậm).
- **Interactive State (Hover/Active):** Định nghĩa thông qua việc Color Inversion (Đảo ngược màu) hoặc Darken (Làm đậm màu nền) một cách đột ngột. Tuyệt đối không dùng Opacity (Độ mờ) hoặc Transition (Hiệu ứng chuyển đổi) kéo dài.

## 5. Layout Patterns (Mẫu bố cục)
- Container: Dựa trên lưới phân khu (Block-based Layout). Layout thường lấp đầy toàn bộ Viewport (Khung nhìn) với các đường viền phân chia rõ ràng (`border-r`, `border-b`).
- Borders thay thế Shadows: Dùng các đường thẳng (Lines) hoặc Viền khối (Box borders) để phân tách nội dung.
- Alignment: Căn lề cực kỳ nghiêm ngặt, Grid-aligned (Căn gióng theo lưới).

## 6. Tailwind Tokens Mapping (Bản đồ biến Tailwind)

| Component / State | Tailwind Classes |
| :--- | :--- |
| **Surface & Layout** | |
| App Base | `min-h-screen bg-gray-100 text-gray-900 font-sans` |
| Flat Card | `bg-white border border-gray-300 p-6 sm:p-8 rounded-none` |
| Top/Side Nav | `bg-gray-900 text-white p-4 border-b-4 border-blue-500` |
| **Typography** | |
| Headline | `text-2xl font-bold text-black mb-6` |
| Subtitle | `text-lg font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2` |
| Body Text | `text-base text-gray-800 leading-normal` |
| Label | `block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide` |
| **Form Controls** | |
| Input Default | `block w-full bg-white border-2 border-gray-300 rounded-none px-4 py-3 text-base text-gray-900 placeholder-gray-500` |
| Input Hover | `hover:border-gray-500` |
| Input Focus | `focus:outline-none focus:border-blue-600 focus:bg-blue-50/30` |
| Input Error | `border-red-600 text-red-900 focus:outline-none focus:border-red-800 bg-red-50/50` |
| Checkbox Flat | `w-5 h-5 border-2 border-gray-400 rounded-none text-blue-600 focus:ring-blue-600 focus:ring-offset-2 bg-white` |
| **Buttons & Actions** | |
| Primary Button | `inline-flex items-center justify-center bg-blue-600 text-white border-2 border-transparent px-6 py-3 rounded-none text-base font-bold transition-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 hover:bg-blue-800 active:bg-blue-900` |
| Outline Button | `inline-flex items-center justify-center bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-none text-base font-bold transition-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 hover:bg-blue-600 hover:text-white active:bg-blue-800 active:border-blue-800` |
| Danger Button | `inline-flex items-center justify-center bg-red-600 text-white border-2 border-transparent px-6 py-3 rounded-none text-base font-bold hover:bg-red-800` |
| **Data Display & Overlays** | |
| Flat Badge | `inline-block bg-yellow-400 text-black px-2 py-1 text-xs font-bold uppercase tracking-widest border border-yellow-500` |
| Table Wrapper | `w-full border-2 border-gray-300 bg-white` |
| Table Header (TH) | `bg-gray-100 text-left text-sm font-bold text-gray-900 uppercase tracking-wider px-6 py-4 border-b-2 border-gray-300` |
| Table Cell (TD) | `px-6 py-4 text-base text-gray-800 border-b border-gray-200` |
| Modal Overlay | `fixed inset-0 bg-gray-900/80 z-40` |
| Modal Content | `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white border-4 border-gray-900 z-50 p-8 rounded-none` |

## 7. Forbidden Patterns (Các mẫu cấu trúc BỊ CẤM)
Tuyệt đối KHÔNG sử dụng các kỹ thuật sau trong theme này:
- Bất kỳ class nào có tiền tố `shadow-` (Bao gồm `box-shadow` và `text-shadow`). Không có ngoại lệ.
- Bất kỳ lớp phủ Gradient nào (`bg-gradient-to-*`). Mọi màu sắc phải là Solid Hex/RGB.
- `border-radius` vượt quá `rounded-sm` (2px). Phải tạo cảm giác góc cạnh, vuông vức.
- Các thuộc tính làm mờ như `backdrop-blur-*` hoặc `blur-*`.
- Hiệu ứng chuyển động mượt mà với `duration-*` lớn (UI phẳng chuộng các phản hồi Active State tức thời, thô ráp hoặc `transition-none`).
- Sử dụng màu xám quá nhạt cho chữ (`text-gray-300`, `text-gray-400`) trên nền trắng, gây mất chuẩn Accessibility.