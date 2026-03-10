# Aurora / Organic UI

## 1. Core Philosophy (Triết lý cốt lõi)
Xây dựng giao diện dựa trên Non-linear Visual Aesthetics (Thẩm mỹ thị giác phi tuyến tính). Áp dụng Mesh Gradients (Gradient dạng lưới) có độ khuếch tán lớn làm Optical Background (Nền quang học). Các UI Components (Thành phần giao diện) sử dụng Asymmetrical Geometry (Hình học bất đối xứng) và High Border-Radius (Độ bo góc lớn) để tạo ra Fluid Interfaces (Giao diện linh hoạt). Phân cấp thị giác được thiết lập thông qua mức độ Base Blur (Độ mờ nền) của thuộc tính `backdrop-filter` kết hợp với sự biến thiên của Color Stops (Điểm dừng màu).

## 2. Selection Rules (Quy tắc chọn lựa cho AI)
**Khi nào DÙNG (Positive Triggers):**
- Phát triển các AI Companion Tools (Công cụ trợ lý trí tuệ nhân tạo) yêu cầu Conversational Interfaces (Giao diện hội thoại) linh hoạt.
- Các ứng dụng Wellness/Health (Sức khỏe) có Cognitive Load (Tải nhận thức) thấp.
- Creative Landing Pages (Trang đích sáng tạo) yêu cầu Dynamic Rendering (Kết xuất động) về mặt màu sắc.

**Khi nào KHÔNG DÙNG (Negative Triggers):**
- System Administration Dashboards (Bảng điều khiển quản trị hệ thống) hoặc RBAC Portals (Cổng phân quyền).
- Các hệ thống xử lý High-Density Data Grids (Lưới dữ liệu mật độ cao) hoặc Complex Nested Forms (Biểu mẫu lồng ghép phức tạp). Cấu trúc Organic sẽ phá vỡ Grid Alignment (Căn gióng lưới) cần thiết cho việc đối chiếu dữ liệu.

## 3. Strict Scales (Thang đo bắt buộc)

### Typography Scale (Fluid Scale)
- `sm` (14px): Micro-copy. Bắt buộc `font-medium`.
- `base` (16px): Body text mặc định. Tránh sử dụng Line-height (Chiều cao dòng) quá hẹp, tối thiểu `leading-relaxed` (1.625).
- `lg` (18px) / `xl` (20px): Heading nội bộ. Bắt buộc `font-semibold`.
- `3xl` (30px) đến `5xl` (48px): Hero Text. Yêu cầu Letter-spacing (Khoảng cách chữ) dạng `tracking-tight` (Thu hẹp) để tạo thành khối hình học chữ chặt chẽ.

### Geometry & Spacing Scale (Maximum Fluidity)
- Border-radius: Giới hạn nghiêm ngặt ở các biến số bo góc cực lớn: `rounded-3xl` (24px) cho Cards, `rounded-full` (100%) cho Buttons/Inputs. Không sử dụng góc vuông.
- Spacing: Component Spacing (Khoảng cách thành phần) từ `gap-8` (32px) trở lên.
- Border-width: Chỉ sử dụng `border` (1px) với Semi-transparent Colors (Màu bán trong suốt) để giới hạn ranh giới bề mặt.

## 4. Color Palette & Functional States (Bảng màu & Trạng thái chức năng)
- **Background Root:** Bắt buộc sử dụng Radial Gradients (Gradient tỏa tròn) đa điểm hoặc định vị các Absolute Blobs (Khối màu tuyệt đối) kết hợp `blur-3xl` để tạo Mesh Gradient giả lập.
- **Surface:** Sử dụng Glassmorphism (Hiệu ứng kính mờ) nhẹ, ví dụ `bg-white/30` hoặc `bg-white/40`, để các luồng màu Gradient phía sau có thể xuyên qua.
- **Primary Actions:** Solid Contrast Colors (Màu đặc tương phản) như `bg-gray-900` hoặc Dark Blue để nổi bật trên nền Gradient đa sắc.
- **Interactive State (Hover/Active):** Sử dụng Translate/Scale (Dịch chuyển/Thu phóng) thông qua hàm `transform` như `hover:scale-105` với Transition Curve (Đường cong chuyển tiếp) mềm (Ví dụ: `ease-out duration-300`).

## 5. Layout Patterns (Mẫu bố cục)
- Container: Float Layout (Bố cục trôi nổi). Chấp nhận Asymmetrical Layouts (Bố cục bất đối xứng), không ép buộc các khối UI Components phải có chung một Base Width (Chiều rộng cơ sở).
- Alignment: Ưu tiên Center Alignment (Căn giữa) đối với các màn hình đơn nhiệm (Single-task screens).

## 6. Tailwind Tokens Mapping (Bản đồ biến Tailwind)

| Component / State | Tailwind Classes |
| :--- | :--- |
| **Surface & Layout** | |
| App Base (Root) | `min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100 via-indigo-100 to-rose-100 p-6 sm:p-12 font-sans text-gray-900 overflow-hidden` |
| Organic Card | `bg-white/40 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-8 sm:p-10 shadow-xl z-10 relative` |
| Floating Bubble (Chat)| `bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 rounded-3xl rounded-tl-sm p-5 shadow-lg max-w-sm` |
| **Typography** | |
| Headline | `text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6` |
| Subtitle | `text-xl font-semibold text-gray-800 mb-4` |
| Body Text | `text-base font-medium text-gray-700 leading-relaxed` |
| **Form Controls** | |
| Input Default | `block w-full bg-white/50 backdrop-blur-sm border border-white/60 rounded-full px-6 py-4 text-base font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:bg-white/70 transition-all` |
| Checkbox Organic | `appearance-none w-6 h-6 bg-white/50 border border-white/60 rounded-full checked:bg-gray-900 checked:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/30 cursor-pointer transition-colors` |
| **Buttons & Actions** | |
| Primary Action | `inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-full text-base font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-900/20 transition-all duration-300` |
| Secondary Action | `inline-flex items-center justify-center bg-white/50 backdrop-blur-sm text-gray-900 border border-white/60 px-8 py-4 rounded-full text-base font-semibold shadow-sm hover:bg-white/80 hover:shadow-md focus:outline-none transition-all duration-300` |
| **Data Display** | |
| Organic Tag | `inline-block bg-white/60 backdrop-blur-sm border border-white/50 text-gray-800 px-4 py-2 text-sm font-semibold rounded-full shadow-sm` |

## 7. Forbidden Patterns (Các mẫu cấu trúc BỊ CẤM)
Tuyệt đối KHÔNG sử dụng các kỹ thuật sau trong theme này:
- Nền tĩnh đơn sắc (Static Solid Backgrounds) như `bg-white` hay `bg-gray-100`. Bắt buộc phải có Gradient hoặc Mesh Blur (Làm mờ dạng lưới).
- Góc vuông sắc nhọn (`rounded-none`, `rounded-sm`). Mọi thành phần cấu trúc đều phải có độ cong tối thiểu là `rounded-2xl`.
- Cấu trúc lưới dạng bảng nghiêm ngặt (Strict Table Grids) có các Border khép kín. Việc phân tách dữ liệu phải được xử lý bằng Spacing.
- Sharp Shadows (Bóng đổ không mờ). Bóng bắt buộc phải có thông số Blur-radius lớn.