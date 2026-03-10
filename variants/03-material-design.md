# Material Design (Elevation-based UI)

## 1. Core Philosophy (Triết lý cốt lõi)
Hệ thống giao diện được mô phỏng dựa trên các Physical Surfaces (Bề mặt vật lý). Sử dụng Z-axis Elevation (Độ cao trục Z) để thiết lập Spatial Relationships (Mối quan hệ không gian) giữa các UI Components. Directional Shadows (Bóng đổ có hướng) là công cụ kỹ thuật duy nhất được phép sử dụng để phân định độ ưu tiên của các Layers (Lớp) so với Background (Nền).

## 2. Selection Rules (Quy tắc chọn lựa cho AI)
**Khi nào DÙNG (Positive Triggers):**
- Phát triển các ứng dụng Android-first hoặc các sản phẩm nằm trong hệ sinh thái Google.
- Các hệ thống yêu cầu phân cấp Depth (Độ sâu) rõ ràng (Ví dụ: Modals xếp chồng lên Modals, Dropdowns phức tạp đè lên Data Tables).
- UI có sử dụng Floating Action Buttons (FAB - Nút hành động nổi) hoặc Persistent App Bars (Thanh ứng dụng cố định).
- Các luồng công việc (Workflows) yêu cầu phản hồi thị giác mạnh mẽ thông qua trạng thái Active/Pressed (Ripple effect).

**Khi nào KHÔNG DÙNG (Negative Triggers):**
- Enterprise Data-Dense Portals (Cổng dữ liệu doanh nghiệp mật độ cao) - Vì Shadow (Bóng đổ) yêu cầu nhiều Spacing (Khoảng cách), làm giảm lượng dữ liệu có thể hiển thị.
- Giao diện hướng tới phong cách Flat (Phẳng tuyệt đối) hoặc Editorial (Biên tập nội dung).
- Ứng dụng ưu tiên phong cách nền mờ (Glassmorphism) trên iOS.

## 3. Strict Scales (Thang đo bắt buộc)

### Typography Scale (Material Type System)
- `xs` (12px): Caption, Overline, Tooltip (Bắt buộc dùng `tracking-wider` cho Overline).
- `sm` (14px): Body 2 (Văn bản phụ), Button text (Bắt buộc `uppercase font-medium tracking-wider`).
- `base` (16px): Body 1 (Văn bản chính), Subtitle 1 (Phụ đề).
- `lg` (18px): Dialog Title (Tiêu đề hộp thoại).
- `xl` (20px): App Bar Title (Tiêu đề thanh ứng dụng).
- `2xl` (24px): Headline 5 (Tiêu đề trang lớn).

### Elevation & Spacing Scale (Base-4 Grid)
Mọi thông số Spacing bắt buộc phải là bội số của 4px.
- Khớp nối Component nhỏ: `gap-2` (8px).
- Card/Container padding: `p-4` (16px) hoặc `p-6` (24px).
- **Elevation System (Hệ thống bóng đổ cứng):**
  - Resting Card/Button: `shadow-sm` hoặc `shadow-md`.
  - Hover State: `shadow-lg`.
  - Dropdown/Menu: `shadow-xl`.
  - Modal/Dialog: `shadow-2xl`.

## 4. Color Palette & Functional States (Bảng màu & Trạng thái chức năng)
- **Background Root:** `bg-gray-50` hoặc `bg-slate-50` (Tạo độ tương phản để thẻ trắng có thể nổi lên).
- **Surface:** `bg-white` (Dành riêng cho Cards, Dialogs, Menus).
- **Primary Color (Thương hiệu):** `bg-indigo-600` -> `hover:bg-indigo-700` -> `active:bg-indigo-800`.
- **Secondary Color (Nhấn):** `bg-pink-500` (Dành riêng cho FAB hoặc Selection controls).
- **Text:** High-emphasis (`text-gray-900`), Medium-emphasis (`text-gray-600`), Disabled (`text-gray-400`).
- **State Feedback:** Trạng thái Active/Pressed (Ấn) phải có độ chìm bóng đổ (Giảm Shadow) và tăng độ đậm màu nền.

## 5. Layout Patterns (Mẫu bố cục)
- Container: Sử dụng Card-based Layout (Bố cục dựa trên thẻ). Content luôn được bọc trong các thẻ trắng nổi trên nền xám.
- Header: Luôn sử dụng App Bar (Thanh ứng dụng) có `shadow-md` bám dính (Sticky) ở trên cùng.
- Actions: Căn chỉnh Bottom-Right (Dưới cùng bên phải) đối với màn hình nhỏ hoặc trong nội bộ Card.

## 6. Tailwind Tokens Mapping (Bản đồ biến Tailwind)

| Component / State | Tailwind Classes |
| :--- | :--- |
| **Surface & Layout** | |
| App Base | `min-h-screen bg-gray-50 text-gray-900 font-sans` |
| Elevation Card | `bg-white rounded-xl shadow-md transition-shadow duration-200 hover:shadow-lg p-4 sm:p-6` |
| Top App Bar | `sticky top-0 z-30 flex items-center w-full h-16 bg-indigo-600 text-white shadow-md px-4 sm:px-6` |
| **Typography** | |
| Headline | `text-2xl font-normal text-gray-900 tracking-tight mb-4` |
| Subtitle | `text-base font-medium text-gray-900 mb-2` |
| Body Text | `text-base text-gray-700 leading-relaxed tracking-normal` |
| Caption / Overline | `text-xs font-medium text-gray-500 uppercase tracking-widest` |
| **Form Controls** | |
| Input Default (Outlined) | `block w-full bg-transparent border border-gray-400 rounded-md px-4 py-3 text-base text-gray-900 placeholder-gray-500 transition-colors hover:border-gray-900` |
| Input Focus | `focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600` |
| Input Disabled | `bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed` |
| Checkbox Material | `w-5 h-5 border-2 border-gray-500 rounded-sm text-indigo-600 focus:ring-indigo-600 focus:ring-offset-2 transition-colors` |
| **Buttons & Actions** | |
| Contained Button | `inline-flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded shadow-sm hover:shadow hover:bg-indigo-700 active:shadow-none active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 uppercase text-sm font-medium tracking-wider transition-all duration-200` |
| Text Button | `inline-flex items-center justify-center bg-transparent text-indigo-600 hover:bg-indigo-50 active:bg-indigo-100 px-4 py-2 rounded uppercase text-sm font-medium tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600/50` |
| FAB (Floating Action) | `fixed bottom-6 right-6 flex items-center justify-center w-14 h-14 bg-pink-500 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-pink-600 active:shadow-md active:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:ring-offset-2 transition-all duration-200 z-40` |
| **Data Display & Overlays** | |
| Dialog Overlay | `fixed inset-0 bg-gray-900/50 z-40 transition-opacity` |
| Dialog Surface | `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white rounded-xl shadow-2xl z-50 p-6` |

## 7. Forbidden Patterns (Các mẫu cấu trúc BỊ CẤM)
Tuyệt đối KHÔNG sử dụng các kỹ thuật sau trong theme này:
- Border khép kín dày trên Cards (Chỉ sử dụng shadow thay cho border để phân tách các lớp). Không dùng `border border-gray-200` trên thẻ.
- Backdrop-filter (Hiệu ứng kính mờ/Blur effects). Material Design tuân thủ bề mặt vật lý đục (Opaque surfaces).
- Gradients (Dải màu) trên Buttons hoặc Background. Chỉ sử dụng Solid Colors (Màu đơn sắc).
- Typography tùy tiện không theo Grid. Bắt buộc duy trì Base-4 grid cho Line-height và Margin.
- Bo góc quá lớn cho Button (Không dùng `rounded-full` cho nút thông thường, chỉ dùng `rounded` hoặc `rounded-md`).