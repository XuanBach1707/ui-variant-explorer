export interface MockRole {
  id: number;
  code: string;
  name: string;
}

export const MOCK_ROLES: MockRole[] = [
  { id: 1, code: "SYSTEM_ADMIN", name: "Quản trị hệ thống" },
  { id: 2, code: "USER_MANAGER", name: "Quản lý người dùng" },
  { id: 3, code: "CONTENT_EDITOR", name: "Biên tập nội dung" },
  { id: 4, code: "VIEW_REPORT", name: "Xem báo cáo" },
  { id: 5, code: "FINANCE_APPROVER", name: "Duyệt tài chính" },
];