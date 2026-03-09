# UI Variant Explorer

Brainstorm nhanh UI/UX bằng cách generate 3 design variant từ 1 màn hình đầu vào.

**Stack:** Next.js + TypeScript + Tailwind CSS v3 + shadcn/ui

---

## Workflow

1. Điền `input/brief.md` — screen info, user goal, constraints
2. Đặt file nguồn vào `input/source/` (ảnh, HTML, TSX...)
3. Nói với AI: *"Generate variants"*
4. AI chọn 3 style từ `variants.md`, xác nhận với bạn, rồi generate
5. Chạy `npm run dev`, mở [http://localhost:3000](http://localhost:3000) để xem

---

## Cấu trúc

```
input/
  brief.md          ← điền trước khi generate
  source/           ← file đầu vào
variants.md         ← 10 design styles
src/app/
  page.tsx          ← index, links đến v1/v2/v3
  v1/ v2/ v3/       ← 3 variant pages (do AI generate)
src/components/
  v1/ v2/ v3/       ← components tương ứng
```

---

## Dùng với AI tool khác

| Tool | File |
|---|---|
| Claude Code | `CLAUDE.md` ✓ |
| Cursor | `.cursor/rules` hoặc `.cursorrules` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Windsurf | `.windsurfrules` |

---

## Chạy local

```bash
npm install
npm run dev
```
