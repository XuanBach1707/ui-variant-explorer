# Minimal / Clean

## 1. Core Philosophy (Triết lý cốt lõi)
Sử dụng Negative Space (Không gian âm/Khoảng trắng) làm cấu trúc chịu lực chính của giao diện. Tối ưu hóa Signal-to-Noise Ratio (Tỷ lệ tín hiệu trên nhiễu) bằng cách triệt tiêu hoàn toàn các Decorative Elements (Thành phần trang trí). Visual Hierarchy (Phân cấp thị giác) được thiết lập thông qua Font-weight (Độ đậm của chữ) và Proximity (Luật gần), thay vì sử dụng Container Borders (Đường viền khối) hoặc Background Colors (Màu nền).

## 2. Selection Rules (Quy tắc chọn lựa cho AI)
**Khi nào DÙNG (Positive Triggers):**
- Xây dựng Profile Pages (Trang hồ sơ cá nhân), Settings Pages (Trang cấu hình đơn giản) hoặc Configuration Forms (Biểu mẫu thiết lập) có ít trường dữ liệu.
- Các ứng dụng yêu cầu Cognitive Load (Tải nhận thức) thấp, người dùng cần tập trung vào một tác vụ duy nhất (Single-task flow).
- Màn hình Onboarding (Hướng dẫn sử dụng) hoặc Auth Pages (Trang xác thực/Đăng nhập).
- Các hệ thống chú trọng vào nội dung văn bản (Text-heavy interfaces) nhưng không phải là dữ liệu dạng bảng khổng lồ.

**Khi nào KHÔNG DÙNG (Negative Triggers):**
- Data-Dense Dashboards (Bảng điều khiển mật độ dữ liệu cao) có nhiều Metrics/Biểu đồ xếp cạnh nhau.
- Giao diện Admin Portal yêu cầu hiển thị đồng thời nhiều Data Grids (Lưới dữ liệu) phức tạp.
- Các hệ thống yêu cầu thao tác Bulk Actions (Hành động hàng loạt) liên tục với không gian giới hạn.

## 3. Strict Scales (Thang đo bắt buộc)

### Typography Scale (Standard Scale)
- `xs` (12px): Helper text, Metadata, Table header.
- `sm` (14px): Body default, Input text, Button text.
- `base` (16px): Section text (Giới hạn sử dụng cho đoạn văn bản dài).
- `lg` (18px): Card title, Modal title.
- `xl` (20px): Page subsection header.
- `2xl` (24px): Page Title (H1) - Maximum allowed size.

### Spacing Scale (Standard Tailwind Tokens)
- Khớp nối Component nhỏ (Icon + Text): `gap-2` / `space-x-2` (8px).
- Form Group (Label + Input): `gap-1.5` / `mb-1.5` (6px).
- Nội bộ Card/Section: `p-6` (24px) hoặc `p-8` (32px) để duy trì Whitespace.
- Giữa các Section lớn: `gap-8` / `mb-8` (32px) hoặc `gap-12` / `mb-12` (48px).

## 4. Color Palette & Functional States (Bảng màu & Trạng thái chức năng)
- **Background:** `bg-slate-50` (App Base) -> `bg-white` (Surface/Card).
- **Text:** `text-slate-900` (Primary/Heading) -> `text-slate-700` (Body) -> `text-slate-500` (Muted/Helper).
- **Border:** `border-slate-200` (Default) -> `border-slate-300` (Hover) -> `border-slate-400` (Active).
- **Primary Action (Brand Blue):** `bg-blue-600` (Default) -> `hover:bg-blue-700` (Hover) -> `focus:ring-blue-600/20` (Focus).
- **Semantic Status:** - Success: `text-green-700 bg-green-50`
  - Error: `text-red-600 bg-red-50 border-red-200`

## 5. Layout Patterns (Mẫu bố cục)
- Container: Sử dụng `w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`.
- Layout: Ưu tiên Single Column (Cột đơn) cho Form. Nếu dùng Multi-column, giới hạn ở `grid-cols-2` với `gap-8`.
- Alignment: Left-aligned (Căn trái) cho hầu hết các elements. Action Buttons (Nút hành động) đặt ở cuối form, căn trái.

## 6. Tailwind Tokens Mapping (Bản đồ biến Tailwind)

| Component / State | Tailwind Classes |
| :--- | :--- |
| **Surface & Typography** | |
| Clean Card | `bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm` |
| Page Title (H1) | `text-2xl font-semibold text-slate-900 tracking-tight mb-8` |
| Section Title (H2) | `text-lg font-medium text-slate-900 mb-4` |
| Label | `block text-sm font-medium text-slate-700 mb-1.5` |
| Helper Text | `text-xs text-slate-500 mt-1.5` |
| **Form Controls (Standard)** | |
| Input Default | `block w-full border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 bg-white placeholder-slate-400 transition-colors` |
| Input Focus | `focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600` |
| Input Error | `border-red-500 text-red-900 placeholder-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500` |
| Select Default | `block w-full border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600` |
| Checkbox Base | `h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600/20` |
| **Buttons (Standard)** | |
| Action Button Primary | `inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:ring-offset-2` |
| Action Button Secondary | `inline-flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 px-4 py-2.5 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2` |
| Button Disabled | `disabled:opacity-50 disabled:cursor-not-allowed` |
| **Data Display & Overlays** | |
| Simple Table Wrapper | `w-full overflow-hidden border border-slate-200 rounded-lg` |
| Table Header (TH) | `bg-slate-50 text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-4 border-b border-slate-200` |
| Table Cell (TD) | `px-6 py-4 text-sm text-slate-700 border-b border-slate-100` |
| Table Row Hover | `hover:bg-slate-50/50 transition-colors` |
| Modal Overlay | `fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity` |
| Modal Content | `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-xl shadow-xl border border-slate-200 z-50 p-6 sm:p-8` |

## 7. Forbidden Patterns (Các mẫu cấu trúc BỊ CẤM)
Tuyệt đối KHÔNG sử dụng các kỹ thuật sau trong theme này:
- Gradients (Dải màu) hoặc Background patterns (Họa tiết nền).
- Drop-shadows (Bóng đổ) lớn hơn `shadow-sm` hoặc có màu (Colored shadows). Không sử dụng Inner Shadows (Bóng đổ vào trong).
- Border-radius (Độ bo góc) lớn hơn `rounded-xl` (12px). Không dùng `rounded-full` ngoại trừ cấu trúc Badge hoặc Avatar.
- Glassmorphism effects (Hiệu ứng kính mờ `backdrop-filter`) trên các Surface thông thường (Ngoại trừ Modal Overlay).
- Floating Action Buttons (FAB - Nút hành động nổi).
- Border có độ dày vượt quá `1px` (`border-2`, `border-4` bị cấm nghiêm ngặt).
- Giao diện có quá 3 màu sắc nổi bật (Accent colors) cùng lúc.