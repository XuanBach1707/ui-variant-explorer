# Design Variant Styles

AI đọc file này, chọn 3 style phù hợp nhất với `input/brief.md`, sau đó generate 3 variant tương ứng.

Tiêu chí chọn: phù hợp với user goal, constraints, và độ phức tạp của content.

---

## 1. Minimal / Clean
- Nhiều whitespace, typography làm chủ đạo
- Màu sắc tối giản: 1 accent color, còn lại là neutral
- Không border thừa, không shadow nặng
- Phù hợp: dashboard đơn giản, profile, settings

## 2. Enterprise / Data-Dense
- Thông tin nhiều, layout compact, ít padding
- Table-heavy, badge trạng thái rõ ràng
- Sidebar navigation, toolbar cố định
- Phù hợp: admin panel, báo cáo, quản lý dữ liệu lớn

## 3. Card-Based
- Content chia thành các card có shadow nhẹ
- Grid layout, mỗi card tự chứa một đơn vị thông tin
- Hover state rõ, click target lớn
- Phù hợp: danh sách sản phẩm, user list, content feed

## 4. Dashboard / Analytics
- Metric nổi bật với số lớn và icon
- Chart placeholder (bar, line, donut)
- Color-coded status, progress bar
- Phù hợp: overview screen, báo cáo tổng hợp

## 5. Mobile-First / Compact
- Column đơn, full-width element
- Large tap target (min 44px), bottom action bar
- Sticky header, collapsible section
- Phù hợp: màn hình dùng trên điện thoại hoặc tablet

## 6. Editorial / Magazine
- Typography hierarchy mạnh (display font, subheading, body)
- Ảnh/avatar chiếm diện tích lớn
- Horizontal rule, pull quote, section divider rõ
- Phù hợp: profile, article, content detail page

## 7. Dark / High Contrast
- Background tối (slate-900 hoặc zinc-900)
- Text sáng, accent color neon hoặc vivid
- Border subtle, glow effect nhẹ
- Phù hợp: developer tool, monitoring screen, media player

## 8. Glassmorphism / Modern
- Background blur (backdrop-filter), semi-transparent card
- Gradient subtle, border rgba mờ
- Shadow lan rộng, depth rõ ràng
- Phù hợp: landing page, hero section, marketing screen

## 9. Flat / Material-Inspired
- Shadow theo elevation rõ (shadow-sm → shadow-lg theo cấp độ)
- Color fill mạnh cho primary action
- Ripple/state layer được chú ý
- Phù hợp: app mobile web, form-heavy screen

## 10. Brutalist / High-Contrast Utility
- Border đen dày, không bo góc
- Font monospace hoặc bold heavy
- Màu solid mạnh, không gradient
- Phù hợp: internal tool, developer dashboard, thử nghiệm táo bạo
