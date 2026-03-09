# User List — Master Panel (Left)

> **Lưu ý:** File này mô tả riêng phần **Master List (Left Panel)** của màn hình `/prototype/users`.
> Spec đầy đủ cho toàn bộ màn hình xem tại: `docs/screens/master-detail-crud.md`.

## Thông tin chung

- **Pattern:** List + Search + Filter (1.1) — là Left Panel của Master-Detail layout
- **Route:** `/prototype/users` (chung với toàn màn hình)
- **Mock data:** `src/mock/users.ts` → `MOCK_USERS`
- **Wireframe:** `docs/wireframes/user-list.html`

---

## Layout

Split panel hay full-width table:
- [ ] Full-width table (đơn giản, chỉ có list)
- [x] Master-Detail (click row → panel bên phải)

---

## Table columns

| Column | Field | Ghi chú |
|---|---|---|
| Người dùng | `fullName` + `email` | Stacked, email nhỏ hơn |
| Chức danh | `jobTitle` | Hiển thị `—` nếu null |
| Tổ chức | `organization.name` | Hiển thị `—` nếu null |
| Trạng thái | `isActive` | Badge: Hoạt động / Khóa |
| Thao tác | — | Nút Edit, Delete |

---

## Search

- Tìm theo: `fullName`, `email`
- Vị trí: trên table, bên trái
- Placeholder: `Tìm theo tên, email...`

---

## Filter

- Filter theo: `isActive` (Tất cả / Hoạt động / Khóa)
- Vị trí: cùng hàng với search, bên phải search
- Kiểu UI: Select dropdown

---

## Actions

**Per-row:**
- Edit → mở form chỉnh sửa
- Delete → mở confirm dialog

**Toolbar (trên table):**
- Nút `+ Thêm mới` → mở form tạo mới

---

## Interactions

- Click row → Cập nhật `selectedUser` state, highlight row được chọn, hiển thị Detail Panel bên phải. Reset Breadcrumb Navigation Stack của Tab "Tổ chức & Nhóm" về Level 1.
- Click Edit → Mở form Create/Update (Side Panel). Xem `docs/screens/create-update-form.md`.
- Click Delete → Mở confirm dialog "Xác nhận xóa người dùng này?". Confirm → xóa khỏi local state + xóa toàn bộ records liên quan trong `MOCK_USER_GROUPS` và `MOCK_LOGIN_HISTORY`.

---

## Empty states

- Chưa có dữ liệu: hiển thị text `Chưa có người dùng nào.`
- Search không có kết quả: hiển thị text `Không tìm thấy kết quả.`

---

## Notes

(Ghi chú thêm nếu có — nghiệp vụ đặc biệt, edge case cần lưu ý)
