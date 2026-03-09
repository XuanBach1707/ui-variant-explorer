export interface MockUserGroup {
  userId: number;
  groupId: number;
  orgId: number;
}

/**
 * MOCK_USER_GROUPS: Junction table quản lý quan hệ User -> Org -> Group.
 * Phục vụ test luồng Recursive Breadcrumb:
 * Level 1: List Orgs (Unique orgId per userId)
 * Level 2: List Groups (Filtered by userId AND orgId)
 * Level 3: List Roles (Filtered by groupId)
 */
export const MOCK_USER_GROUPS: MockUserGroup[] = [
  // --- USER 1 (Nguyễn Văn An): Test Case Multi-Org & Multi-Group ---
  // Thuộc Org 1, có 2 Groups
  { userId: 1, groupId: 1, orgId: 1 }, // Org: Kỹ thuật | Group: Tech Leaders
  { userId: 1, groupId: 2, orgId: 1 }, // Org: Kỹ thuật | Group: Developers
  // Thuộc thêm Org 2 (Kiểm tra View 1 hiển thị 2 dòng Org)
  { userId: 1, groupId: 3, orgId: 2 }, // Org: Hành chính | Group: HR Admins

  // --- USER 2 (Trần Thị Bích) ---
  { userId: 2, groupId: 2, orgId: 1 }, // Org: Kỹ thuật | Group: Developers

  // --- USER 3 (Lê Hoàng Cường) ---
  { userId: 3, groupId: 3, orgId: 2 }, // Org: Hành chính | Group: HR Admins

  // --- USER 4 (Phạm Minh Đức) ---
  { userId: 4, groupId: 4, orgId: 3 }, // Org: Kế toán | Group: Accountants

  // --- USER 5 (Hoàng Thị Em) ---
  { userId: 5, groupId: 5, orgId: 4 }, // Org: Kinh doanh | Group: Sales Team

  // --- USER 8 (Linh): Test Case tên dài & nhiều Group ---
  { userId: 8, groupId: 1, orgId: 1 }, 
  { userId: 8, groupId: 2, orgId: 1 },

  // Chú ý: 
  // - User 6 (Phong): Không có record -> Test "Chưa thuộc tổ chức nào" (View 1 Empty).
  // - User 7 (Giang): Có Org trong users.ts nhưng nếu không có record ở đây 
  //   thì Tab "Tổ chức & Nhóm" vẫn phải báo Empty để đảm bảo logic Junction Table.
];