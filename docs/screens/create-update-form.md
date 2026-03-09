# User Create / Update Form

## Thông tin chung

- **Pattern:** Unified Form Component (4.1) — Same component, different modes.
- **Route:** - Create: `/prototype/users/create`
    - Update: `/prototype/users/:id/edit`
- **Mock data:** - `src/mock/users.ts` → `MOCK_USERS` (Initial values cho Update)
    - `src/mock/organizations.ts` → `MOCK_ORGANIZATIONS` (Populate options)
- **Wireframe:** `docs/wireframes/create-update-form.html`

---

## Layout

Split panel hay full-width table:
- [ ] Full-width page
- [x] Side Panel / Drawer (Mở trượt từ bên phải, đè lên Master-Detail)

---

## Form Fields & Validation

| Field | Component | Required | Validation Rules | Ghi chú |
|---|---|---|---|---|
| Họ và tên | `TextInput` | Yes | Min 3 chars, Max 50 | |
| Email | `TextInput` | Yes | Email regex chuẩn | |
| Số điện thoại | `TextInput` | No | Chỉ chứa số (0-9) | |
| Chức danh | `TextInput` | No | — | |
| Tổ chức | `Select` | Yes | Phải chọn 1 mục | Load từ `MOCK_ORGANIZATIONS` |
| Trạng thái | `Switch` | Yes | Boolean | Mặc định: `true` (Hoạt động) |

---

## Actions

**Footer Toolbar:**
- Nút `Hủy` → Đóng panel, discard changes.
- Nút `Lưu` → Validate -> Simulate 500ms delay -> Toast "Thành công" -> Close.

---

## Interactions

- **Mode Detection:**
    - Nếu có `id` truyền vào -> **Update Mode**: Hiển thị tiêu đề `Cập nhật người dùng`, thực hiện `find(id)` để đổ dữ liệu vào fields.
    - Nếu không có `id` -> **Create Mode**: Hiển thị tiêu đề `Thêm mới người dùng`, reset toàn bộ fields về giá trị mặc định (`""`, `null`, `true`).
- **Form Submission:** Chỉ cho phép nhấn `Lưu` khi các trường `Required` đã có giá trị. Hiển thị báo lỗi đỏ dưới field nếu Validate fail.

---

## Empty states

(Không áp dụng cho Form nhập liệu)

---

## Notes

- **Unified Logic:** Sử dụng duy nhất một Component cho cả 2 thao tác để đảm bảo tính nhất quán của Schema dữ liệu.
- **Prototype Constraint:** Thao tác `Lưu` chỉ giả lập logic (Local State), không yêu cầu ghi đè trực tiếp vào file `.ts` của Mock data.
- **Auto-focus:** Tự động focus vào field `Họ và tên` ngay khi panel vừa mở.