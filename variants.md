# Design Variant Styles — Index

AI đọc file này, chọn 3 style phù hợp nhất với `input/brief.md`, sau đó đọc file chi tiết tương ứng trong `variants/` trước khi generate.

---

## Danh sách

| # | Style | Phù hợp với |
|---|---|---|
| 01 | [Minimal / Clean](variants/01-minimal-design.md) | Settings, profile, form đơn giản |
| 02 | [Enterprise / Data-Dense](variants/02-enterprise-design.md) | Admin panel, CRM, quản lý dữ liệu |
| 03 | [Material Design](variants/03-material-design.md) | Mobile web, form-heavy, Google-style |
| 04 | [Flat Design](variants/04-flat-design.md) | App đơn giản, icon system, illustration |
| 05 | [Glassmorphism](variants/05-glassmorphism-design.md) | Login, landing, onboarding |
| 06 | [Neumorphism](variants/06-neumorphism-design.md) | Dashboard nhẹ, app cá nhân |
| 07 | [Neo-Brutalism](variants/07-neo-brutalism-design.md) | Internal tool, hackathon, anti-design |
| 08 | [Cyberpunk / Neon](variants/08-cyberpunk-neon-design.md) | Gaming, dark entertainment, developer tool |
| 09 | [Claymorphism](variants/09-claymorphism-design.md) | App trẻ em, consumer app, playful UI |
| 10 | [Aurora / Organic](variants/10-aurora-organic-design.md) | Landing premium, wellness, luxury brand |
| 11 | [Swiss / Typographic](variants/11-swiss-typographic-design.md) | Editorial, publication, typography-driven |

---

## Cách AI chọn

1. Đọc `user goal` và `constraints` trong `input/brief.md`
2. Loại bỏ style không phù hợp với constraint (ví dụ: Glassmorphism nếu cần accessibility cao)
3. Chọn 3 style tạo ra sự **đối lập rõ ràng** với nhau — không chọn 3 style na ná nhau
4. Thông báo lựa chọn + lý do ngắn trước khi generate
