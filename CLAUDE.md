# CLAUDE.md — Hướng dẫn cho AI

Đây là repo prototype dùng để review UI/UX trước khi implement vào production.
Mục tiêu: nhanh, throwaway, dễ đọc. Không cần production-ready code.

---

## Stack

- Next.js 16 + React 19 + TypeScript (strict)
- Tailwind CSS v3 (KHÔNG dùng v4)
- shadcn/ui (style: default, baseColor: slate, cssVariables: true)
- Lucide React cho icons

## Cấu trúc src/

```
src/
├── app/                    ← Next.js App Router routing
│   └── (prototype)/        ← route group cho toàn bộ prototype screens
│       └── [feature]/
│           └── page.tsx    ← import component từ src/components/[feature]/
├── components/
│   ├── ui/                 ← shadcn components (KHÔNG sửa trực tiếp)
│   └── [feature]/          ← components theo màn hình, flat, không nested
├── mock/                   ← mock data, 1 file = 1 entity
└── lib/
    └── utils.ts            ← chỉ có hàm cn()
```

## Quy ước bắt buộc

### Import
- Dùng `@/` alias cho mọi import nội bộ
- Import thẳng từ file, không qua barrel (`index.ts`)
- Mock data chỉ import trong `page.tsx` hoặc component top-level

### Component
- Mỗi màn hình có 1 folder trong `components/[feature]/`
- File component: PascalCase — `UserTable.tsx`, `UserDetailPanel.tsx`
- Không tạo subfolder bên trong feature folder
- "use client" chỉ khi component có state hoặc event handler

### Mock data
- File: lowercase — `users.ts`, `groups.ts`
- Export: `MOCK_USERS`, `MOCK_GROUPS` (SCREAMING_SNAKE_CASE)
- Type interface khai báo trong cùng file mock
- Số lượng bản ghi tối thiểu để test: xem `src/mock/README.md`

### Styling
- Dùng Tailwind utility classes
- Không viết CSS file mới (trừ globals.css)
- Dùng `cn()` từ `@/lib/utils` để merge classes có điều kiện

---

## Các pattern UI đang dùng

Xem chi tiết tại `docs/patterns.md` (nếu có).

Tóm tắt:
1. **List + Search + Filter** — màn hình danh sách, entry point
2. **Detail view** — xem chi tiết read-only, link từ List
3. **Master-Detail CRUD** — split panel trái/phải, admin screens
4. **Create/Update form** — same component, khác mode
5. **Relation management** — quản lý liên kết giữa entities
6. **Confirm / destructive action** — AlertDialog
7. **Status / workflow** — badge + action button
8. **Bulk actions** — checkbox + toolbar (nếu cần)

---

## Cách thêm một màn hình mới

1. Tạo file mock data trong `src/mock/[entity].ts`
2. Tạo folder `src/components/[feature]/`
3. Tạo component(s) trong folder đó
4. Tạo `src/app/(prototype)/[feature]/page.tsx` import component vào

---

## Cách thêm shadcn component

```bash
npx shadcn@latest add <component-name>
```

Component sẽ tự động vào `src/components/ui/`.

---

## Rule Priority

Nếu có xung đột giữa các nguồn, ưu tiên theo thứ tự:

1. `CLAUDE.md` (global rules) — luôn thắng
2. `docs/screens/*.md` (screen specification)
3. Wireframe HTML (layout reference)
4. AI inference — chỉ dùng khi 3 nguồn trên không cover

---

## Ambiguity Protocol

Nếu có xung đột hoặc thông tin thiếu không thể suy ra từ docs:

- **DỪNG** và liệt kê câu hỏi cụ thể
- **KHÔNG** tự quyết
- **KHÔNG** implement phần đó trước khi có xác nhận

---

## Prototype Boundary

Nếu một yêu cầu cần bất kỳ thứ nào sau đây, **dừng và cảnh báo** thay vì implement:

- API calls / data fetching
- Database queries
- Authentication / session
- Async logic (loading states, error handling phức tạp)
- Global state management (Context, Zustand, Redux...)

Prototype chỉ dùng: local `useState` + mock data arrays.

---

## Component Mapping

Khi cần UI component, dùng shadcn tương ứng:

| Nhu cầu | Dùng |
|---|---|
| Table / danh sách dạng bảng | shadcn `Table` hoặc `<table>` thuần |
| Modal / popup | `Dialog` |
| Drawer / side panel | `Sheet` |
| Confirm / destructive action | `AlertDialog` |
| Trạng thái / label | `Badge` |
| Menu hành động (⋯) | `DropdownMenu` |
| Tabs | `Tabs` |
| Select / dropdown chọn | `Select` |
| Form input | `Input` |
| Toggle on/off | `Switch` |

Nếu component chưa có trong `src/components/ui/`, chạy `npx shadcn@latest add <name>` trước khi dùng.

---

## Không cần quan tâm

- Authentication / authorization (không có trong prototype)
- API calls / data fetching (dùng mock data)
- Error boundaries, loading states phức tạp
- Testing
- Performance optimization
