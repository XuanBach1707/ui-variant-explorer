# CLAUDE.md — UI Variant Explorer

Repo dùng để brainstorm nhanh UI/UX bằng cách generate 3 design variant từ 1 màn hình đầu vào.
Mục tiêu: khám phá hướng thiết kế, không phải code production.

---

## Stack

- Next.js + React + TypeScript
- Tailwind CSS v3 (KHÔNG dùng v4)
- shadcn/ui (dùng khi cần, không bắt buộc)
- Lucide React cho icons

---

## Cấu trúc

```
input/
  brief.md          ← User điền trước khi yêu cầu generate
  source/           ← File đầu vào: ảnh, HTML, TSX...
variants.md         ← 10 design styles để AI chọn
src/
  app/
    page.tsx        ← Index: links đến v1, v2, v3
    v1/page.tsx
    v2/page.tsx
    v3/page.tsx
  components/
    ui/             ← shadcn (không sửa trực tiếp)
    v1/             ← components cho variant 1
    v2/             ← components cho variant 2
    v3/             ← components cho variant 3
  lib/utils.ts
```

---

## Quy trình generate

1. Đọc `input/brief.md` — nếu thiếu trường bắt buộc → **dừng và liệt kê trường còn thiếu**
2. Đọc file source trong `input/source/`
3. Đọc `variants.md` → chọn 3 style phù hợp nhất với brief
4. Thông báo 3 style đã chọn và lý do ngắn gọn — **chờ xác nhận trước khi generate**
5. Generate 3 variant theo thứ tự: v1 → v2 → v3

---

## Output convention

- Mỗi variant: 1 page tại `src/app/v[n]/page.tsx` + components trong `src/components/v[n]/`
- Tên file component: PascalCase, prefix theo variant — `V1Header.tsx`, `V2Card.tsx`
- Mỗi variant phải **khác nhau rõ ràng về layout hoặc visual style** — không chỉ đổi màu
- Không dùng lorem ipsum — dùng lại content từ source file
- `"use client"` chỉ khi có state hoặc event handler
- Import alias `@/` cho mọi import nội bộ

---

## Rule Priority

1. `CLAUDE.md` — luôn thắng
2. `input/brief.md` — spec của màn hình cụ thể
3. `variants.md` — định nghĩa style
4. Source file — content và structure tham khảo
5. AI inference — chỉ khi 4 nguồn trên không cover

---

## Ambiguity Protocol

Nếu `brief.md` thiếu thông tin hoặc có mâu thuẫn:

- **DỪNG** và liệt kê câu hỏi cụ thể
- **KHÔNG** tự suy diễn
- **KHÔNG** generate trước khi có xác nhận

---

## Constraints mặc định

- Không có API call, không có async logic
- Không có authentication
- Data dùng trực tiếp từ source file (inline), không tạo mock file riêng
- Mỗi variant là standalone — không share state với variant khác
