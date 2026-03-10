# Claymorphism (3D Soft UI)

## 1. Core Philosophy (Triết lý cốt lõi)
Tạo ra Thể tích 3D khối phồng (Fluffy 3D Volume) trên mặt phẳng 2D. Cấu trúc liên kết hình học được định hình thông qua 3 lớp bóng đổ đồng thời: Outer Drop Shadow (Bóng đổ ngoài) để tách khối khỏi nền + Top-Left Inner Light Shadow (Bóng sáng hắt trong góc trên trái) + Bottom-Right Inner Dark Shadow (Bóng tối hắt trong góc dưới phải). Không sử dụng viền khép kín (Solid borders) để phân tách các lớp (Layers).



## 2. Selection Rules (Quy tắc chọn lựa cho AI)
**Khi nào DÙNG (Positive Triggers):**
- Phát triển giao diện cho EdTech (Công nghệ giáo dục), Gamification Systems (Hệ thống game hóa), hoặc Kids-focused Apps (Ứng dụng tập trung vào trẻ em).
- Các màn hình Onboarding (Hướng dẫn sử dụng ban đầu) yêu cầu Interactive Elements (Thành phần tương tác) mang tính thân thiện, giảm thiểu Cognitive Load (Tải nhận thức).
- Ứng dụng quản lý Task/Habit trackers (Theo dõi thói quen) hướng đến người dùng cá nhân (B2C).

**Khi nào KHÔNG DÙNG (Negative Triggers):**
- Enterprise Admin Portals (Cổng quản trị doanh nghiệp) hoặc B2B Dashboards (Bảng điều khiển B2B) - Kiến trúc này tiêu tốn quá nhiều Spacing (Khoảng cách) cho góc bo lớn và bóng đổ, làm phá vỡ Data Density (Mật độ dữ liệu).
- Các hệ thống yêu cầu tốc độ Render (Kết xuất) tối đa, do Multi-layer Shadows (Bóng đổ đa lớp) yêu cầu nhiều tài nguyên tính toán của GPU.
- Dark Mode Interfaces (Giao diện chế độ tối). Claymorphism rất khó hoạt động hiệu quả trên nền tối do không thể kết xuất rõ Inner Light Shadow.

## 3. Strict Scales (Thang đo bắt buộc)

### Typography Scale (Friendly/Heavy Scale)
- `sm` (14px): Micro-copy. Bắt buộc `font-medium`.
- `base` (16px): Body default, Input text.
- `lg` (18px): Button text. Bắt buộc `font-bold` để tạo cảm giác xúc giác cơ học vững chắc.
- `xl` (20px) / `2xl` (24px): Card title. Bắt buộc `font-black text-gray-800`.
- `3xl` (30px) trở lên: Page Title (H1). Bắt buộc `font-black`.

### Geometry & Spacing Scale (Maximum Softness)
- Border-radius: Giới hạn nghiêm ngặt ở các chỉ số bo góc tối đa. `rounded-2xl` (16px) cho Buttons/Inputs, `rounded-3xl` (24px) cho Cards, và `rounded-full` (100%) cho Badges/Avatars.
- Spacing: Bắt buộc dùng Padding lớn (`p-6`, `p-8`) để chứa hệ thống Inset Shadows mà không lẹm vào nội dung văn bản (Text clipping).
- Border-width: Tuyệt đối không sử dụng `border` (0px).

## 4. Color Palette & Functional States (Bảng màu & Trạng thái chức năng)
- **Background Root:** Các màu Pastel sáng (Light pastel) có độ bão hòa thấp như `bg-indigo-50`, `bg-blue-50`, `bg-pink-50`.
- **Surface:** Trắng thuần (`bg-white`) hoặc các dải màu sáng tương tự.
- **Primary Actions:** Màu sắc tươi sáng, độ bão hòa cao như `bg-blue-400`, `bg-purple-400`, `bg-pink-400`.
- **Text:** `text-gray-800` (Primary), `text-gray-500` (Muted).
- **Interactive State (Active/Pressed):** Khi người dùng kích hoạt, giảm Outer Drop Shadow và tăng độ lan tỏa (Spread radius) của Inner Dark Shadow để mô phỏng trạng thái bị ấn xuống bề mặt.

## 5. Layout Patterns (Mẫu bố cục)
- Container: Float Layout (Bố cục trôi nổi) với khoảng cách rất rộng (`gap-8`, `gap-12`). Các thẻ không được phép xếp sát nhau (Zero-spacing).
- Forms: Fields (Trường nhập liệu) có kích thước rất lớn (Oversized), chiều cao tối thiểu `h-14` (56px) để đảm bảo Inset Shadows hiển thị rõ ràng.

## 6. Tailwind Tokens Mapping (Bản đồ biến Tailwind)
*(Lưu ý: AI BẮT BUỘC sử dụng các Arbitrary Values `[...]` cho `box-shadow` dưới đây vì Tailwind cấu hình chuẩn không hỗ trợ Triple-layer Shadows).*

| Component / State | Tailwind Classes |
| :--- | :--- |
| **Surface & Layout** | |
| App Base (Root) | `min-h-screen bg-indigo-50 p-6 sm:p-10 font-sans text-gray-800` |
| Fluffy Card | `bg-white rounded-3xl p-8 shadow-[8px_8px_16px_rgba(0,0,0,0.05),inset_4px_4px_8px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(0,0,0,0.05)]` |
| **Typography** | |
| Headline | `text-4xl font-black text-gray-800 tracking-tight mb-8` |
| Subtitle | `text-2xl font-black text-gray-700 mb-4` |
| Body Text | `text-base font-medium text-gray-600 leading-relaxed` |
| Label | `block text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide` |
| **Form Controls** | |
| Input Default | `block w-full bg-gray-50 rounded-2xl px-6 py-4 text-base font-medium text-gray-800 placeholder-gray-400 border-none focus:outline-none focus:ring-0 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,1)] transition-shadow` |
| Checkbox Fluffy | `appearance-none w-8 h-8 bg-gray-50 rounded-xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,1)] checked:bg-blue-400 checked:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.4)] focus:outline-none cursor-pointer transition-all` |
| **Buttons & Actions** | |
| Primary Action | `inline-flex items-center justify-center w-full bg-blue-400 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-[8px_8px_16px_rgba(96,165,250,0.3),inset_2px_2px_4px_rgba(255,255,255,0.5),inset_-2px_-2px_4px_rgba(0,0,0,0.15)] hover:bg-blue-500 active:shadow-[4px_4px_8px_rgba(96,165,250,0.3),inset_4px_4px_8px_rgba(255,255,255,0.5),inset_-4px_-4px_8px_rgba(0,0,0,0.2)] focus:outline-none transition-all duration-200` |
| Secondary Action | `inline-flex items-center justify-center w-full bg-white text-gray-700 px-8 py-4 rounded-2xl text-lg font-bold shadow-[8px_8px_16px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-2px_-2px_4px_rgba(0,0,0,0.05)] hover:bg-gray-50 active:shadow-[4px_4px_8px_rgba(0,0,0,0.05),inset_4px_4px_8px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(0,0,0,0.1)] focus:outline-none transition-all duration-200` |
| **Data Display** | |
| Bubble Badge | `inline-block bg-pink-400 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full shadow-[4px_4px_8px_rgba(244,114,182,0.3),inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.1)]` |

## 7. Forbidden Patterns (Các mẫu cấu trúc BỊ CẤM)
Tuyệt đối KHÔNG sử dụng các kỹ thuật sau trong theme này:
- Mọi hình thức viền cứng (`border`, `border-2`, `border-black`). Hình khối phải được phân tách bằng hiệu ứng 3D.
- Góc bo nhọn (`rounded-none`, `rounded-sm`, `rounded-md`). Bắt buộc phải từ `rounded-2xl` trở lên.
- Giao diện Dark Mode (Ví dụ: `bg-gray-900`). Kỹ thuật Claymorphism yêu cầu cường độ ánh sáng hắt (Light reflection) rất mạnh, môi trường nền tối sẽ triệt tiêu hiệu ứng này.
- Các thuộc tính cấu trúc phẳng (Flat design tokens). Nếu thiếu Inset Shadow, giao diện sẽ trở lại thành Flat Design và phá vỡ cấu trúc tổng thể.