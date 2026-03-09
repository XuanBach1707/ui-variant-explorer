# User Detail View

## Thông tin chung

- **Pattern:** Detail view (Read-only) (2.1)
- **Route:** `/prototype/users/:id`
- **Mock data:** - `src/mock/users.ts` → `MOCK_USERS` (Thực hiện `Array.prototype.find()` thông qua `id` param, không cần export data detail riêng).
  - **RBAC Mock Dependencies (Các dependency cho RBAC):** Yêu cầu khởi tạo các file sau để phục vụ Cross-query (Truy vấn chéo):
    - `src/mock/organizations.ts` → `MOCK_ORGANIZATIONS`
    - `src/mock/groups.ts` → `MOCK_GROUPS`
    - `src/mock/roles.ts` → `MOCK_ROLES`
    - `src/mock/user-groups.ts` → `MOCK_USER_GROUPS` (Junction table/Bảng nối lưu mapping: `userId` + `groupId` + `orgId`).
- **Wireframe:** `docs/wireframes/user-detail.html` (nếu có)

---

## Layout

Định dạng hiển thị chi tiết:
- [ ] Full-page view (Chuyển hẳn sang route mới)
- [x] Master-Detail (Panel cố định bên phải, chia sẻ không gian hiển thị với List view)
- [ ] Modal / Dialog (Hiển thị popup)

---

## Data Fields & RBAC Mapping

*Đặc tả cấu trúc hiển thị quyền (RBAC Hierarchy): User -> Org -> Group -> Role.*

| Section | Field | Ghi chú |
|---|---|---|
| Header | `avatar` + `fullName` + `isActive` | Avatar tròn, tên in đậm, trạng thái dùng Badge. *(Yêu cầu: Bổ sung `avatar` vào `MockUser` interface).* |
| Liên hệ | `email`, `phone` | Text có thể copy. Email dùng thẻ `mailto:`. *(Yêu cầu: Bổ sung `phone` vào `MockUser` interface).* |
| Hệ thống | `createdAt`, `lastLogin` | Format datetime chuẩn: `DD/MM/YYYY HH:mm`. *(Yêu cầu: Bổ sung `createdAt`, `lastLogin` vào `MockUser` interface).* |
| **Phân quyền** | **Cấu trúc 3 cấp (3-Tier)** | **Render dạng Nested List (Danh sách lồng nhau) hoặc Accordion** |
| ↳ *Level 1* | `USER` | Thông tin gốc (Base Entity) — đã hiển thị ở Header. |
| ↳ *Level 2* | `ORG` & `GROUP` | Nhóm các Group theo từng Org. Hiển thị dưới dạng Section Header: `[Tên ORG] - [Tên GROUP]`. |
| ↳ *Level 3* | `ROLES` | Các quyền kế thừa từ Group. Render dạng danh sách Tag/Chip nằm bên trong block của Level 2. |

---

## Actions

**Header Toolbar (Góc trên cùng):**
- Nút `Close` (Icon X) → Đóng panel

---

## Interactions

- Click `Close` → Đóng Panel chi tiết (Detail Panel), đồng thời xóa trạng thái active (đang chọn) của row tương ứng trên List.
- Expand/Collapse (Mở/Đóng) -> Nếu dùng Accordion cho cụm ORG/GROUP, click để thu gọn danh sách ROLES.

---

## Empty states

- Dữ liệu không tồn tại (Invalid ID lookup): Hiển thị text `Không tìm thấy thông tin người dùng` ở giữa panel.
- Trống phân quyền (Empty Membership): Khu vực "Phân quyền" hiển thị text `Người dùng chưa tham gia tổ chức/nhóm nào` nếu danh sách Group mapping rỗng.

---

## Notes

- Chế độ hiển thị hoàn toàn Read-only (Chỉ đọc).
- **Mock Data Resolution (Giải quyết dữ liệu giả):** Logic component phải query (truy vấn) các entity thông qua Junction Table (Bảng nối): Lookup `userId` trong `MOCK_USER_GROUPS` -> trích xuất danh sách `groupId` và `orgId` -> map (ánh xạ) sang `MOCK_GROUPS` và `MOCK_ORGANIZATIONS` -> lấy danh sách `roleId` trong Group đó -> map sang `MOCK_ROLES` để lấy text hiển thị UI.
- Dữ liệu render tức thì (Synchronous rendering). Cập nhật `MockUser` interface trong `src/mock/users.ts` để đồng bộ Schema (Lược đồ dữ liệu) với UI requirements.