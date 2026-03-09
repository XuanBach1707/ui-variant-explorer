# admin-prototype

UI prototype repo dùng để review layout/UX trước khi implement vào production.

**Stack:** Next.js + TypeScript + Tailwind CSS v3 + shadcn/ui + Mock data (không có API)

---

## Mục đích

Repo này là template cho workflow **AI-first prototyping**:

1. Viết screen doc trong `docs/screens/`
2. Vẽ wireframe HTML trong `docs/wireframes/`
3. Chuẩn bị mock data trong `src/mock/`
4. Giao cho AI implement — không cần giải thích thêm

---

## Cấu trúc

```
docs/
├── screens/        ← Spec từng màn hình (pattern, layout, interactions, empty states)
└── wireframes/     ← HTML layout reference (inline styles, không cần build)

src/
├── app/
│   └── (prototype)/[feature]/page.tsx
├── components/
│   ├── ui/         ← shadcn components (không sửa trực tiếp)
│   └── [feature]/  ← components theo màn hình
├── mock/           ← Mock data, 1 file = 1 entity
└── lib/utils.ts    ← cn() helper
```

---

## Thêm màn hình mới

1. Tạo `docs/screens/[feature].md` theo template trong `docs/screens/README.md`
2. Tạo `docs/wireframes/[feature].html` (tuỳ chọn nhưng nên có)
3. Tạo/cập nhật mock data trong `src/mock/`
4. Nói với AI: *"Implement màn hình theo docs/screens/[feature].md"*

---

## Dùng với AI tool khác

Toàn bộ convention được định nghĩa trong một file duy nhất. Chỉ cần copy nội dung sang file tương ứng của tool đó:

| Tool | File |
|---|---|
| Claude Code | `CLAUDE.md` ✓ (đã có) |
| Cursor | `.cursor/rules` hoặc `.cursorrules` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Windsurf | `.windsurfrules` |
| Zed AI | `.rules` |

Nội dung giữ nguyên, chỉ đổi tên file.

---

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) — tự redirect sang `/prototype`.
