# Cyberpunk / Neon

## 1. Core Philosophy (Triết lý cốt lõi)
Hệ thống UI dựa trên nguyên lý High-tech HUD (Heads-Up Display - Màn hình hiển thị thông tin trên kính lái). Môi trường mặc định bắt buộc là Absolute Dark (Tối tuyệt đối). Phân cấp thị giác được thiết lập bằng Glow Effects (Hiệu ứng phát sáng neon) và High Contrast Accents (Màu nhấn có độ bão hòa tối đa) thay vì Background (Màu nền) hoặc Elevation (Độ cao). Mọi UI Element (Thành phần giao diện) phải mang tính máy móc (Machine-like) và sắc cạnh (Sharp-edged).

## 2. Selection Rules (Quy tắc chọn lựa cho AI)
**Khi nào DÙNG (Positive Triggers):**
- Phát triển Gaming Dashboards (Bảng điều khiển trò chơi), Esports Portals (Cổng thông tin thể thao điện tử), hoặc Web3/Crypto Analytics (Phân tích tiền điện tử).
- Các hệ thống System Monitoring Boards (Bảng giám sát hệ thống máy chủ), Logs Viewers (Trình xem nhật ký), hoặc Developer Tools (Công cụ lập trình).
- Giao diện được yêu cầu thiết kế chuyên biệt cho môi trường thiếu sáng hoàn toàn (Low-light environments).

**Khi nào KHÔNG DÙNG (Negative Triggers):**
- Light Mode Interfaces (Giao diện chế độ sáng). Cyberpunk hoàn toàn không tồn tại trên nền trắng.
- Các hệ thống Enterprise/B2B (Doanh nghiệp) truyền thống như Ngân hàng, Y tế, Giáo dục do thiếu tính nghiêm túc (Professionalism).
- Giao diện chứa Text-heavy articles (Bài viết nhiều chữ) — Hiệu ứng glow và tương phản chói gây Eye Strain (Mỏi mắt) khi đọc văn bản dài.

## 3. Strict Scales (Thang đo bắt buộc)

### Typography Scale (Monospaced & Data-driven)
- Font Family: Ưu tiên tuyệt đối Monospaced Fonts (Phông chữ đơn cách như Fira Code, Roboto Mono) cho các Data points (Điểm dữ liệu).
- `xs` (12px) / `sm` (14px): Micro-copy, Logs, Metadata. Bắt buộc `font-mono tracking-widest uppercase`.
- `base` (16px): Body default. Giữ `font-light` hoặc `font-normal` để tránh chói.
- `lg` (18px) / `xl` (20px): Card/Section title. Bắt buộc `font-bold tracking-widest uppercase`.
- `2xl` (24px) đến `4xl` (36px): Hero Title. Đi kèm `text-shadow` màu Neon.

### Geometry & Spacing Scale (Sharp Geometry)
- Border-radius: Cấm sử dụng góc bo mềm. Chỉ cho phép `rounded-none` (Vuông góc) hoặc `rounded-sm` (2px). Khuyến khích sử dụng CSS `clip-path` để tạo góc vát (Chamfered corners) nếu có thể.
- Border-width: Viền mỏng (`border`) cho khung thẻ, viền dày (`border-2`) cho Interactive Elements.

## 4. Color Palette & Functional States (Bảng màu & Trạng thái chức năng)
- **Background Root:** Pure Black (`bg-black` / `#000000`) hoặc Deepest Zinc (`bg-zinc-950` / `#09090b`).
- **Surface:** `bg-zinc-900/50` hoặc `bg-transparent` kèm Border màu Neon.
- **Primary Accents (Neon System):** Neon Cyan (`#00f3ff` / `cyan-400`), Neon Magenta/Pink (`#ff003c` / `pink-500`), Neon Yellow (`#fcee0a` / `yellow-400`).
- **Text:** Chữ đọc thường (`text-zinc-300`), Chữ dữ liệu (`text-cyan-400`).
- **Interactive State (Hover/Active):** Khi Hover, nhân đôi giá trị Blur (Độ mờ) và Spread (Độ lan tỏa) của `box-shadow` để mô phỏng sự tăng cường dòng điện (Power surge). Đảo ngược màu (Invert) chữ và nền của Button.

## 5. Layout Patterns (Mẫu bố cục)
- Container: Dựa trên Terminal Windows (Cửa sổ dòng lệnh) hoặc HUD Grids. Thường xuyên sử dụng Divider (Đường chia) mỏng phát sáng để phân tách dữ liệu thay vì dùng Card nền đục.
- Mật độ dữ liệu cao nhưng phân tách rõ ràng bằng Monospace Grid-alignment (Căn gióng theo lưới đơn cách).

## 6. Tailwind Tokens Mapping (Bản đồ biến Tailwind)

| Component / State | Tailwind Classes |
| :--- | :--- |
| **Surface & Layout** | |
| App Base (Root) | `min-h-screen bg-zinc-950 p-6 sm:p-10 font-sans text-zinc-300 selection:bg-cyan-500/30` |
| Cyber Card | `bg-zinc-900/40 border border-cyan-500/30 p-6 shadow-[0_0_15px_rgba(6,182,212,0.1)] rounded-none relative backdrop-blur-sm` |
| **Typography** | |
| Headline | `text-3xl font-bold text-white uppercase tracking-widest mb-6 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]` |
| Subtitle | `text-lg font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4` |
| Body Text | `text-sm font-mono text-zinc-400 leading-relaxed` |
| Data Label | `block text-xs font-mono font-bold text-pink-500 mb-2 uppercase tracking-widest` |
| **Form Controls** | |
| Input Default | `block w-full bg-zinc-950/50 border border-zinc-700 px-4 py-3 text-sm font-mono text-cyan-300 placeholder-zinc-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all` |
| Checkbox Cyber | `appearance-none w-5 h-5 bg-zinc-950 border border-cyan-500/50 checked:bg-cyan-400 focus:outline-none shadow-[0_0_10px_rgba(6,182,212,0.2)] checked:shadow-[0_0_15px_rgba(6,182,212,0.6)] cursor-pointer transition-all` |
| **Buttons & Actions** | |
| Primary Action (Cyan)| `inline-flex items-center justify-center bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-3 text-sm font-bold uppercase tracking-widest shadow-[inset_0_0_10px_rgba(6,182,212,0.2),0_0_10px_rgba(6,182,212,0.2)] hover:bg-cyan-400 hover:text-zinc-950 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] focus:outline-none transition-all duration-200` |
| Destructive Action | `inline-flex items-center justify-center bg-transparent border-2 border-pink-500 text-pink-500 px-8 py-3 text-sm font-bold uppercase tracking-widest shadow-[inset_0_0_10px_rgba(236,72,153,0.2),0_0_10px_rgba(236,72,153,0.2)] hover:bg-pink-500 hover:text-zinc-950 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] focus:outline-none transition-all duration-200` |
| **Data Display** | |
| Status Badge | `inline-block bg-zinc-950 border border-yellow-400 text-yellow-400 px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(250,204,21,0.3)]` |
| Table Wrapper | `w-full bg-zinc-950/80 border border-zinc-800` |
| Table Header (TH) | `bg-zinc-900 border-b border-cyan-500/50 text-left text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-6 py-4` |
| Table Cell (TD) | `px-6 py-4 text-sm font-mono text-zinc-300 border-b border-zinc-800/50` |

## 7. Forbidden Patterns (Các mẫu cấu trúc BỊ CẤM)
Tuyệt đối KHÔNG sử dụng các kỹ thuật sau trong theme này:
- Nền trắng (`bg-white`) hoặc nền xám nhạt (`bg-gray-100`). Cyberpunk bắt buộc phải xử lý trên Dark Base.
- Các góc bo tròn lớn (`rounded-lg`, `rounded-xl`, `rounded-full`). Hình học cơ bản phải là đa giác góc cạnh.
- Soft Shadows (Bóng đen mờ) chuẩn của Material Design. Bóng bắt buộc phải có màu (Colored glow) thông qua kênh màu RGB/RGBA.
- Phông chữ Serif (Chữ có chân).
- Màu sắc Pastel (Màu nhạt, độ bão hòa thấp) như `bg-blue-100` hoặc `text-pink-200`. Bắt buộc phải là Neon (Ví dụ: `cyan-400`, `pink-500`).