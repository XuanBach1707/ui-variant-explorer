# components/

Chứa toàn bộ UI components của prototype.

## Cấu trúc

```
components/
├── ui/          ← shadcn/ui components — KHÔNG chỉnh sửa thủ công
│                   (thêm bằng lệnh: npx shadcn@latest add <component>)
│
└── [feature]/   ← components theo từng màn hình / tính năng
    └── UserTable.tsx
    └── UserDetailPanel.tsx
    └── UserForm.tsx
```

## Quy ước đặt tên folder feature

Dùng tên ngắn, lowercase, không dấu. Ví dụ:
- `users/`
- `groups/`
- `organizations/`
- `roles/`

## Quy ước đặt tên file component

- PascalCase: `UserTable.tsx`, `GroupDetailPanel.tsx`
- Không tạo thêm subfolder bên trong feature folder
- 1 file = 1 component chính (có thể có sub-component nhỏ trong cùng file nếu chỉ dùng nội bộ)

## Không dùng

- Barrel exports (`index.ts`) — import thẳng từ file
- Shared components phức tạp — nếu dùng ở 2 nơi trở lên thì đặt vào `components/shared/`
