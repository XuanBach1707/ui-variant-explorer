# Swiss / Typographic UI

## 1. Core Philosophy (Triết lý cốt lõi)
Hệ thống kế thừa nguyên lý International Typographic Style (Phong cách Kiểu chữ Quốc tế Thụy Sĩ, thập niên 1950). Giao diện bị chi phối tuyệt đối bởi Mathematical Grids (Lưới toán học bất đối xứng) và Extreme Typographic Scale (Tỷ lệ kiểu chữ cực đoan). Typography is UI (Kiểu chữ chính là Giao diện). Triệt tiêu mọi yếu tố trang trí, bóng đổ, và hình khối dư thừa để tối ưu hóa Objective Communication (Giao tiếp khách quan) thông qua độ tương phản của chữ và không gian trống.



## 2. Selection Rules (Quy tắc chọn lựa cho AI)
**Khi nào DÙNG (Positive Triggers):**
- Phát triển Editorial Magazines (Tạp chí điện tử), Digital Publications (Ấn phẩm kỹ thuật số).
- High-end Fashion E-commerce (Thương mại điện tử thời trang cao cấp), Art Galleries (Phòng tranh).
- Architecture Portfolios (Hồ sơ năng lực kiến trúc) hoặc Museum Exhibits (Giao diện triển lãm bảo tàng).
- Các trang Landing Pages yêu cầu tính nghệ thuật tối giản, nhắm đến giới trí thức, nhà thiết kế.

**Khi nào KHÔNG DÙNG (Negative Triggers):**
- System Administration Dashboards (Bảng điều khiển quản trị hệ thống) hoặc Data Processing Apps (Ứng dụng xử lý dữ liệu). Tỷ lệ chữ khổng lồ sẽ phá vỡ hoàn toàn Data Density (Mật độ dữ liệu).
- SaaS/Web Apps thông thường hướng tới người dùng đại chúng.
- Các giao diện yêu cầu nhiều Micro-interactions (Tương tác vi mô) và Form Inputs (Trường nhập liệu) dày đặc.

## 3. Strict Scales (Thang đo bắt buộc)

### Typography Scale (Extreme Contrast Scale)
Bước nhảy (Steps) giữa các cấp độ chữ phải cực kỳ lớn. Bắt buộc dùng Sans-serif Fonts (Phông chữ không chân như Helvetica, Inter, Geist).
- `xs` (12px): Data points, Metadata, Labels. Bắt buộc dùng `font-bold uppercase tracking-widest` để đối trọng với không gian trống.
- `sm` (14px) / `base` (16px): Body copy (Văn bản đọc). Yêu cầu `leading-relaxed` hoặc `leading-loose`.
- `3xl` (30px) / `4xl` (36px): Section/Article Header.
- `8xl` (96px) đến `text-[12rem]` (192px): Hero Typography. Đi kèm `font-black leading-none tracking-tighter uppercase`. Cắt dòng (Word break) cứng bất chấp ngữ pháp để ép khối chữ vào lưới.

### Geometry & Spacing Scale (Mathematical Grid)
- Border-radius: Tuyệt đối `rounded-none` (Vuông góc hoàn toàn).
- Border-width: Sử dụng Heavy Borders (Viền rất dày) như `border-2`, `border-4` màu đen thuần làm Dividers (Đường chia) chia cắt giao diện thành các phần tư (Quadrants) hoặc cột (Columns).
- Spacing: Bắt buộc tuân thủ Grid Gaps (Khoảng cách lưới) đồng nhất.

## 4. Color Palette & Functional States (Bảng màu & Trạng thái chức năng)
- **Background Root:** Trắng thuần (`#ffffff`) hoặc Xám nhạt tĩnh (`#f4f4f4`, `#eeeeee`). Không dùng Gradient.
- **Surface:** Thường không có Card (Thẻ). Văn bản nằm trực tiếp trên Background Root.
- **Primary Color (Màu chính):** Pure Black (`#000000`) cho chữ và viền.
- **Accent Color (Màu nhấn):** Cực kỳ hạn chế, thường chỉ dùng duy nhất 1 màu nguyên bản (Pure Red `#ff0000`, Pure Blue `#0000ff`).
- **Interactive State:** Không có Animation (Hiệu ứng động) mềm mại. Tương tác Hover đổi trạng thái tức thì (Instant state change) ví dụ từ nền Đen sang nền Đỏ, chữ Trắng.

## 5. Layout Patterns (Mẫu bố cục)
- Container: Asymmetrical Mathematical Grid (Lưới toán học bất đối xứng). Màn hình được chia làm nhiều cột cứng (Ví dụ: 12 cột, 4 cột).
- Alignment: Flush Left (Căn lề trái tuyệt đối). Bắt buộc căn gióng mọi Text block dọc theo một trục dọc (Vertical Axis) vô hình. Cấm sử dụng Center Alignment (Căn giữa).

## 6. Tailwind Tokens Mapping (Bản đồ biến Tailwind)

| Component / State | Tailwind Classes |
| :--- | :--- |
| **Surface & Layout** | |
| App Base (Root) | `min-h-screen bg-[#f4f4f4] text-black font-sans tracking-tight` |
| Asymmetrical Grid| `grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 px-6 sm:px-12 py-24` |
| Grid Column (Span)| `col-span-1 md:col-span-4 lg:col-span-3` |
| Heavy Divider | `border-t-4 border-black w-full my-8` |
| Thin Divider | `border-t border-black w-full my-4` |
| **Typography** | |
| Hero Typography | `text-[5rem] sm:text-[8rem] lg:text-[10rem] font-black leading-none tracking-tighter uppercase -ml-1 sm:-ml-2 break-all` |
| Headline | `text-4xl sm:text-6xl font-bold text-black leading-none tracking-tight mb-8` |
| Body Text | `text-base sm:text-lg font-medium text-black leading-relaxed max-w-prose` |
| Meta Label | `block text-xs font-bold text-black mb-2 uppercase tracking-[0.2em]` |
| **Form Controls** | |
| Brutal Input | `block w-full bg-transparent border-b-2 border-black rounded-none px-0 py-4 text-2xl font-bold text-black placeholder-gray-400 focus:outline-none focus:border-red-600 transition-none` |
| Checkbox Swiss | `appearance-none w-6 h-6 bg-transparent border-2 border-black rounded-none checked:bg-black focus:outline-none cursor-pointer transition-none` |
| **Buttons & Actions** | |
| Primary Action | `inline-flex items-center justify-center bg-black text-white px-8 py-5 rounded-none text-xl font-bold uppercase tracking-widest hover:bg-red-600 focus:outline-none transition-none` |
| Outline Action | `inline-flex items-center justify-center bg-transparent text-black border-2 border-black px-8 py-5 rounded-none text-xl font-bold uppercase tracking-widest hover:bg-black hover:text-white focus:outline-none transition-none` |
| **Data Display** | |
| Text Badge | `inline-block bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] rounded-none` |
| Grid Table (TH) | `text-left text-xs font-bold text-black uppercase tracking-[0.2em] pb-4 border-b-2 border-black` |
| Grid Table (TD) | `py-4 text-base font-medium text-black border-b border-gray-300` |

## 7. Forbidden Patterns (Các mẫu cấu trúc BỊ CẤM)
Tuyệt đối KHÔNG sử dụng các kỹ thuật sau trong theme này:
- Center Alignment (Căn lề giữa) cho bất kỳ Element nào. Bắt buộc căn trái (Left-aligned) cứng theo lưới.
- Mọi hình thức bo góc (`rounded`). Bắt buộc là `rounded-none`. Trừ hình ảnh tự nhiên, các khối UI không được bo cong.
- Mọi bóng đổ (`shadow`). Không sử dụng chiều sâu không gian (Zero-depth).
- Phông chữ Serif (Chữ có chân). Trừ khi cố tình kết hợp làm điểm nhấn nhỏ, Base UI (Giao diện cơ sở) bắt buộc là Sans-serif.
- Smooth CSS Transitions (Chuyển đổi CSS mượt mà với duration lớn hơn `100ms`). Mọi tương tác phải xảy ra ngay lập tức (`transition-none`).
- Dropdown Menus lơ lửng. Điều hướng (Navigation) thường là các khối văn bản chiếm toàn màn hình hoặc được chia lưới tĩnh.