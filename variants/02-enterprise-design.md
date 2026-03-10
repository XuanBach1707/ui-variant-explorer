# Enterprise / Data-Dense

## 1. Core Philosophy (Triết lý cốt lõi)
Tối đa hóa Information Density (Mật độ thông tin) mà không làm mất đi tính cấu trúc. Ưu tiên Data Visibility (Khả năng quan sát dữ liệu) và thao tác hàng loạt (Bulk actions) hơn là tính thẩm mỹ bề mặt. UI Elements (Thành phần giao diện) phải được nén lại nhỏ nhất có thể nhưng vẫn đảm bảo Target Size (Kích thước vùng chạm) an toàn cho thao tác chuột.

## 2. Selection Rules (Quy tắc chọn lựa cho AI)
**Khi nào DÙNG (Positive Triggers):**
- Xây dựng Admin Dashboards (Bảng điều khiển quản trị) hoặc System Administration Portals (Cổng quản trị hệ thống).
- Các hệ thống quản lý phân quyền phức tạp (RBAC - Role-Based Access Control).
- Các ứng dụng yêu cầu hiển thị Data Grids (Lưới dữ liệu) khổng lồ, Logs (Nhật ký hệ thống), hoặc Reporting Tools (Công cụ báo cáo).
- Giao diện thiết kế chủ yếu cho thao tác trên Desktop/Màn hình lớn.

**Khi nào KHÔNG DÙNG (Negative Triggers):**
- Consumer-facing Apps (Ứng dụng hướng người dùng cuối) hoặc Landing Pages.
- Các ứng dụng ưu tiên Mobile-First (Di động trước) hoặc Touch-Target (Vùng chạm cho ngón tay) lớn.
- Các giao diện yêu cầu quá trình Onboarding (Hướng dẫn sử dụng) từng bước với ít thông tin trên mỗi màn hình.

## 3. Strict Scales (Thang đo bắt buộc)

### Typography Scale (Compact Version)
- `xs` (12px): Bắt buộc cho Table header, Badge, Helper text, Metadata, Logs.
- `sm` (13px/14px): Body default, Input text, Button text, Table Data (Cell content).
- `base` (15px/16px): Card Title, Modal Title, Section Header.
- `lg` (18px): Page Title (H1) - Maximum allowed size.

### Spacing Scale (Compact Tailwind Tokens)
- Khớp nối Component nhỏ (Icon + Text): `gap-1` / `space-x-1` (4px).
- Form Group (Label + Input): `gap-1` / `mb-1` (4px).
- Nội bộ Card/Section: `p-3` hoặc `p-4` (Tuyệt đối không vượt quá `p-4` / 16px).
- Giữa các Section: `gap-4` hoặc `gap-6` (16px - 24px).

## 4. Color Palette & Functional States (Bảng màu & Trạng thái chức năng)
- **Background:** `bg-gray-100` (App Base) -> `bg-white` (Data Surface) -> `bg-gray-50` (Table Header/Row Hover).
- **Text:** `text-gray-900` (Data) -> `text-gray-600` (Label/Column Name) -> `text-gray-400` (Placeholder/Disabled).
- **Border:** `border-gray-200` (Default divider) -> `border-gray-300` (Input border) -> `border-blue-500` (Focus).
- **Semantic Status (Badge/Alert):** - Success: `bg-green-50 text-green-700 border-green-200`
  - Warning: `bg-yellow-50 text-yellow-700 border-yellow-200`
  - Error: `bg-red-50 text-red-700 border-red-200`
  - Info: `bg-blue-50 text-blue-700 border-blue-200`

## 5. Layout Patterns (Mẫu bố cục)
- Container: Sử dụng `w-full px-4` hoặc `max-w-[1440px]` (Tràn viền để tận dụng không gian hiển thị data).
- Layout: Cấu trúc đa khu vực với Sidebar có thể thu gọn (Collapsible Sidebar) và Sticky Table Headers (Tiêu đề bảng cố định).
- Forms: Thường chia nhiều cột (`grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`) để tiết kiệm chiều dọc.



## 6. Tailwind Tokens Mapping (Bản đồ biến Tailwind)

| Component / State | Tailwind Classes |
| :--- | :--- |
| **Surface & Typography** | |
| Dense Card | `bg-white border border-gray-200 rounded p-4 shadow-sm` |
| Page Title (H1) | `text-lg font-semibold text-gray-900 mb-4` |
| Section Title | `text-sm font-medium text-gray-800 mb-3` |
| Label | `block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1` |
| **Form Controls (Compact)** | |
| Input Default | `block w-full border border-gray-300 rounded px-2.5 py-1.5 text-sm text-gray-900 bg-white placeholder-gray-400 transition-colors` |
| Input Focus | `focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500` |
| Input Error | `border-red-300 text-red-900 placeholder-red-300 focus:ring-1 focus:ring-red-500 focus:border-red-500` |
| Select (Compact) | `block w-full border border-gray-300 rounded px-2.5 py-1.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500` |
| Checkbox Dense | `h-3.5 w-3.5 rounded-sm border-gray-300 text-blue-600 focus:ring-blue-500` |
| **Buttons (Compact)** | |
| Action Button Primary | `inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1` |
| Action Button Secondary | `inline-flex items-center justify-center bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-3 py-1.5 rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-1` |
| IconButton (Toolbar) | `p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded` |
| **Data Display (High Density)** | |
| Data Grid Wrapper | `w-full overflow-x-auto border border-gray-200 rounded-sm` |
| Grid Header (TH) | `sticky top-0 bg-gray-50 text-left text-xs font-semibold text-gray-600 px-3 py-2 border-b border-gray-200 z-10 whitespace-nowrap` |
| Grid Cell (TD) | `px-3 py-2 text-sm text-gray-800 border-b border-gray-100 whitespace-nowrap` |
| Status Badge | `inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border uppercase tracking-wide` |
| Modal Wrapper | `fixed inset-0 bg-gray-900/50 z-40 flex items-center justify-center p-4` |
| Modal Content | `bg-white rounded shadow-lg border border-gray-200 w-full max-w-2xl flex flex-col max-h-[90vh]` |

## 7. Forbidden Patterns (Các mẫu cấu trúc BỊ CẤM)
Tuyệt đối KHÔNG sử dụng các kỹ thuật sau trong theme này:
- Padding/Margin lớn (Lớn hơn `p-6` hoặc `m-6` là vi phạm nguyên tắc Data-Dense).
- Font chữ lớn (Vượt quá 18px). Không dùng Font-weight quá dày (Black/ExtraBold) gây nhiễu thông tin.
- Bo góc lớn (Không dùng `rounded-lg`, `rounded-xl`, `rounded-full`). Chỉ sử dụng `rounded` (4px) hoặc `rounded-sm` (2px) để tối ưu không gian sắp xếp các khối block vuông.
- Mất đường viền lưới (Missing grid borders). Dữ liệu mật độ cao bắt buộc phải có border hoặc alternating row colors (màu nền xen kẽ) để dẫn hướng mắt.
- Typography có độ tương phản thấp (Ví dụ: `text-gray-400` trên nền `bg-gray-100`).