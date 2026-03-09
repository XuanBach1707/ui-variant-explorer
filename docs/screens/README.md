# docs/screens/

Mô tả từng màn hình prototype.

## Quy ước đặt tên file

1 file = 1 màn hình: `user-list.md`, `user-detail.md`, `group-crud.md`

## Template cho mỗi màn hình

```markdown
## TÊN MÀN HÌNH

Pattern: (ví dụ: Master-Detail CRUD)
Route: /prototype/users

Mock data: src/mock/users.ts
- Số lượng bản ghi: 15
- Edge cases cần có: inactive, không có org, tên dài

Columns / Fields: ...

Interactions:
- Click row → ...
- Nút X → ...

Actions: Edit | Delete | ...

Notes: (ghi chú đặc biệt nếu có)
```
