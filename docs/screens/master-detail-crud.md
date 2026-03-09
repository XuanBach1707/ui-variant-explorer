# User Master-Detail (Recursive CRUD)

## Thông tin chung

- **Pattern:** Master-Detail (Fixed Split) + Multi-tabs + Breadcrumb Navigation (3.2)
- **Route:** `/prototype/users`
- **Mock data:**
  - `src/mock/users.ts` → `MOCK_USERS` (Master)
  - `src/mock/organizations.ts` → `MOCK_ORGANIZATIONS` (Related Level 2)
  - `src/mock/groups.ts` → `MOCK_GROUPS` (Related Level 2.5)
  - `src/mock/roles.ts` → `MOCK_ROLES` (Related Level 3)
  - `src/mock/user-groups.ts` → `MOCK_USER_GROUPS` (Junction table)
  - `src/mock/login-history.ts` → `MOCK_LOGIN_HISTORY` (Tab Bảo mật)
- **Wireframe:** `docs/wireframes/master-detail-crud.html`

---

## Layout

Split panel hay full-width table:
- [ ] Full-width table
- [x] Master-Detail (Fixed Split Ratio: 30/70)

---

## Workspace Tabs (Right Panel)

| Tab | Content | Ghi chú |
|---|---|---|
| **Thông tin chung** | Form Detail (User) | Read-only mặc định, switch Edit mode |
| **Tổ chức & Nhóm** | Recursive List + Breadcrumb | Quản lý quan hệ 3 cấp (Org -> Group -> Role) |
| **Bảo mật** | Login History | Read-only. Columns: Thời gian, Địa chỉ IP, Thiết bị, Kết quả (badge Thành công/Thất bại). Filter theo `userId` từ `MOCK_LOGIN_HISTORY`. Empty state: `Chưa có lịch sử đăng nhập.` |

---

## Master List (Left Panel)

- **Search:** Tìm theo `fullName`, `email`.
- **Toolbar:** Nút `+ Thêm mới` (Mở form tạo User mới).
- **List Item Display:** - Dòng 1: `fullName` (Bold)
  - Dòng 2: `email` (Small/Muted)
  - Quick Action: Dropdown (Đổi mật khẩu, Khóa tài khoản).

---

## Recursive Navigation (Tab "Tổ chức & Nhóm")

**Level 1: Organization List**
- Table columns: `orgName`, `orgCode`, `Thao tác (Gỡ)`.
- Toolbar: Nút `Gán vào Tổ chức` (Mở modal chọn từ `MOCK_ORGANIZATIONS`).
- Interaction: Click `orgName` → Chuyển sang View Level 2.

**Level 2: Group List**
- Breadcrumb: `Tổ chức / [Tên Org]` (Click "Tổ chức" để quay lại Level 1).
- Table columns: `groupName`, `roleCount`, `Thao tác (Rời nhóm)`.
- Toolbar: Nút `Thêm vào Nhóm` (Mở modal chọn Group thuộc Org hiện tại).
- Interaction: Click `groupName` → Chuyển sang View Level 3.

**Level 3: Role List (Leaf Node)**
- Breadcrumb: `Tổ chức / [Tên Org] / [Tên Group]`.
- UI: Grid hiển thị Badge/Tag các Role của Group này.
- Constraint: Read-only hoàn toàn (No CUD/Assign).

---

## Interactions

- **Click Row (Left):** Cập nhật `selectedUser` state. Reset Breadcrumb Navigation Stack về Level 1.
- **Click Edit (Tab 1):** Cho phép sửa `fullName`, `jobTitle`, `phone`. Click `Save` để cập nhật local state.
- **Click Breadcrumb:** Pop navigation stack về level tương ứng.
- **Assign/Remove (Tab 2):** Cập nhật Junction Table `MOCK_USER_GROUPS` trong bộ nhớ tạm (Local State).

---

## Empty states

- **Master List:** `Chưa có người dùng nào.`
- **Tab 2 - View 1:** `Người dùng chưa thuộc tổ chức nào.`
- **Tab 2 - View 2:** `Người dùng chưa thuộc nhóm nào trong tổ chức này.`

---

## Notes

- **Data Integrity:** Khi xóa User ở Master List, phải xóa toàn bộ mapping liên quan trong Junction Table `MOCK_USER_GROUPS`.
- **Recursive Constraint:** Tuyệt đối không cho phép tạo mới/sửa/xóa thông tin của Organization hay Group tại màn hình này. Chỉ thực hiện Assign/Unassign quan hệ.
- **Performance:** Filter dữ liệu đồng bộ (Synchronous) trên Mock data array.