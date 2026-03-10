# Glassmorphism

## 1. Core Philosophy (Triết lý cốt lõi)
Mô phỏng hiệu ứng Frosted Glass (Kính mờ) thông qua thuộc tính CSS `backdrop-filter: blur()`. Giao diện phụ thuộc hoàn toàn vào Multi-layered Depth (Độ sâu đa lớp), trong đó các bề mặt bán trong suốt (Semi-transparent surfaces) nổi lên trên một Vibrant Background (Nền rực rỡ/phức tạp). Phân cấp thị giác được định hình bởi mức độ mờ (Blur intensity) và viền sáng định hướng (Inner light borders).


## 2. Selection Rules (Quy tắc chọn lựa cho AI)
**Khi nào DÙNG (Positive Triggers):**
- Phát triển các Dashboards mang phong cách hệ điều hành (OS-level UI) lấy cảm hứng từ macOS hoặc iOS.
- Hệ thống Widgets (Tiện ích) nổi trên màn hình, Control Centers (Trung tâm điều khiển), hoặc giao diện tổng quan dạng thẻ độc lập.
- Landing pages cho các dự án Web3, Crypto, AI, hoặc các sản phẩm công nghệ tiêu dùng định vị phân khúc cao cấp (High-end consumer tech).
- Các giao diện có nền tảng là một Interactive 3D Canvas (Khung vẽ 3D tương tác) hoặc High-quality Imagery (Hình ảnh chất lượng cao).

**Khi nào KHÔNG DÙNG (Negative Triggers):**
- Enterprise Admin Portals (Cổng quản trị doanh nghiệp) yêu cầu xử lý Data Tables (Bảng dữ liệu) khổng lồ — Hiệu ứng Blur gây tốn kém tài nguyên kết xuất (Rendering performance cost) và làm giảm độ tương phản văn bản.
- Text-heavy Interfaces (Giao diện nặng về văn bản đọc) như Blogs, Documentations.
- Legacy Systems (Hệ thống cũ) yêu cầu tính tương thích ngược (Backward compatibility) với các trình duyệt không hỗ trợ `backdrop-filter`.

## 3. Strict Scales (Thang đo bắt buộc)

### Typography Scale (High-Legibility Scale)
Bắt buộc phải tăng Font-weight (Độ đậm) lên một bậc so với giao diện thường để chống lại sự nhiễu màu từ nền.
- `xs` (12px): Bắt buộc `font-medium uppercase tracking-wider`.
- `sm` (14px): Body default (Bắt buộc `font-medium`).
- `base` (16px): Input text, Button text (Bắt buộc `font-semibold`).
- `lg` (18px) / `xl` (20px): Card title (Bắt buộc `font-semibold` hoặc `font-bold`).
- `2xl` (24px) trở lên: Page Title (Bắt buộc `tracking-tight`).

### Geometry & Spacing Scale (Soft Geometry)
- Border-radius: Bắt buộc sử dụng độ cong lớn để mô phỏng tấm kính được mài cạnh (`rounded-xl`, `rounded-2xl`, `rounded-3xl`).
- Border-width: Chỉ sử dụng `border` (1px) cho hiệu ứng phản quang viền.
- Padding: Card padding phải lớn (`p-6`, `p-8`) để lộ đủ không gian nền phía sau lớp kính.

## 4. Color Palette & Functional States (Bảng màu & Trạng thái chức năng)
- **Background Root:** Bắt buộc là Gradient đa sắc nổi bật (Ví dụ: `bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500`) hoặc hình ảnh. Không dùng màu đơn sắc tĩnh.
- **Surface (Lớp kính):** Nền trắng bán trong suốt (`bg-white/10`, `bg-white/20`) hoặc Đen bán trong suốt (`bg-black/20`, `bg-black/40`) tùy thuộc vào Color Scheme (Chủ đề màu).
- **Border:** Lớp phản quang ánh sáng viền trong (Inner light reflection) sử dụng `border-white/20` (Cho nền sáng) hoặc `border-gray-500/30` (Cho nền tối).
- **Text:** Trắng thuần (`text-white`) hoặc chữ có độ tương phản tuyệt đối kết hợp với bóng đổ nhẹ (`text-shadow`) nếu cần.
- **Shadow:** Drop shadow có alpha cực thấp nhưng độ lan tỏa cao (`shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]`) để tách biệt tấm kính khỏi nền.

## 5. Layout Patterns (Mẫu bố cục)
- Container: Floating Cards (Các thẻ trôi nổi). Không sử dụng bố cục dính liền (Seamless layout). Giữa các thẻ phải có Spacing đủ lớn (`gap-6`, `gap-8`) để lộ Background.
- Overlap (Xếp chồng): Khuyến khích xếp chồng các thành phần kính (Glass on glass) kết hợp với các chỉ số Z-index khác nhau.

## 6. Tailwind Tokens Mapping (Bản đồ biến Tailwind)

| Component / State | Tailwind Classes |
| :--- | :--- |
| **Surface & Layout** | |
| App Base (Root) | `min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 p-4 sm:p-8 font-sans text-white` |
| Glass Card (Base) | `bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-6 sm:p-8 z-10` |
| Glass Card (Hover) | `hover:bg-white/15 hover:border-white/30 transition-all duration-300` |
| **Typography** | |
| Headline | `text-2xl font-bold text-white tracking-tight mb-6 drop-shadow-md` |
| Subtitle | `text-lg font-semibold text-white/90 mb-4` |
| Body Text | `text-base font-medium text-white/80 leading-relaxed` |
| Label | `block text-sm font-semibold text-white/70 mb-2 uppercase tracking-wider` |
| **Form Controls** | |
| Input Default | `block w-full bg-black/20 border border-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-base text-white placeholder-white/40 transition-all duration-300` |
| Input Focus | `focus:outline-none focus:bg-black/30 focus:border-white/30 focus:ring-1 focus:ring-white/30` |
| Input Error | `border-red-400/50 bg-red-900/20 text-red-200 placeholder-red-300/50 focus:border-red-400 focus:ring-1 focus:ring-red-400` |
| Checkbox Glass | `w-5 h-5 bg-black/20 border border-white/20 rounded-md checked:bg-white/30 checked:border-white/40 focus:ring-2 focus:ring-white/20 focus:ring-offset-0 transition-colors` |
| **Buttons & Actions** | |
| Primary Button | `inline-flex items-center justify-center bg-white/20 hover:bg-white/30 active:bg-white/10 border border-white/30 text-white px-6 py-3 rounded-xl text-base font-semibold backdrop-blur-md transition-all duration-300 shadow-[0_4px_15px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent` |
| Secondary Button | `inline-flex items-center justify-center bg-black/20 hover:bg-black/30 active:bg-black/40 border border-white/10 text-white/90 px-6 py-3 rounded-xl text-base font-medium backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent` |
| **Data Display & Overlays** | |
| Glass Badge | `inline-block bg-white/10 border border-white/20 text-white px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full backdrop-blur-sm` |
| Table Wrapper | `w-full overflow-hidden bg-black/10 backdrop-blur-md border border-white/10 rounded-2xl` |
| Table Header (TH) | `bg-white/5 text-left text-sm font-semibold text-white/70 uppercase tracking-wider px-6 py-4 border-b border-white/10` |
| Table Cell (TD) | `px-6 py-4 text-base font-medium text-white/90 border-b border-white/5` |
| Modal Overlay | `fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity` |
| Modal Content | `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-slate-900/60 backdrop-blur-xl border border-white/20 z-50 p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]` |

## 7. Forbidden Patterns (Các mẫu cấu trúc BỊ CẤM)
Tuyệt đối KHÔNG sử dụng các kỹ thuật sau trong theme này:
- Nền tĩnh đơn sắc (Solid background) phía sau App (Ví dụ: `bg-gray-100` hoặc `bg-white`). Phải dùng cấu trúc lưới màu hoặc Gradient phức tạp để `backdrop-filter` có tác dụng phát huy hiệu ứng quang học.
- Bề mặt Card có Opacity (Độ mờ) ở mức 100% (`bg-white` hoặc `bg-black` nguyên bản).
- Chữ xám đậm (`text-gray-900`) trên nền kính sáng mà không có kiểm tra tỉ lệ tương phản (Luôn ưu tiên Dark Mode/White text cho Glassmorphism để đảm bảo an toàn).
- Các viền vuông góc (`rounded-none`).
- Sử dụng Drop-shadow khối cứng (Solid box-shadow). Bóng bắt buộc phải mờ, lan tỏa sâu.