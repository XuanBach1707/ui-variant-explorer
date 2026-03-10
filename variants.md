# Design Variant Styles — Index

AI đọc file này, chọn 3 style phù hợp nhất với `input/brief.md`, sau đó đọc file chi tiết tương ứng trong `variants/` trước khi generate.

---

## Danh sách

| # | Style | Phù hợp với |
|---|---|---|
| 01 | [Minimal / Clean](variants/01-minimal.md) | Settings, profile, form đơn giản |
| 02 | [Enterprise / Data-Dense](variants/02-enterprise.md) | Admin panel, CRM, quản lý dữ liệu |
| 03 | [Card-Based](variants/03-card-based.md) | User list, catalog, directory |
| 04 | [Dashboard / Analytics](variants/04-dashboard.md) | Overview, monitoring, reporting |
| 05 | [Mobile-First / Compact](variants/05-mobile-first.md) | App điện thoại, field worker |
| 06 | [Editorial / Content-Rich](variants/06-editorial.md) | Profile detail, article, read-only view |
| 07 | [Dark Mode](variants/07-dark-mode.md) | Developer tool, monitoring, media |
| 08 | [Glassmorphism](variants/08-glassmorphism.md) | Login, landing, onboarding |
| 09 | [Material / Flat](variants/09-material.md) | Mobile web, form-heavy, Google-style |
| 10 | [Brutalist](variants/10-brutalist.md) | Internal tool, hackathon, anti-design |
| 11 | [Swiss / Typographic](variants/11-swiss-typographic-design.md) | Editorial, publication, typography-driven |

---

## Cách AI chọn

1. Đọc `user goal` và `constraints` trong `input/brief.md`
2. Loại bỏ style không phù hợp với constraint (ví dụ: Glassmorphism nếu cần accessibility cao)
3. Chọn 3 style tạo ra sự **đối lập rõ ràng** với nhau — không chọn 3 style na ná nhau
4. Thông báo lựa chọn + lý do ngắn trước khi generate
