export interface MockGroup {
  id: number;
  orgId: number; // Liên kết Group với Organization
  name: string;
  roleIds: number[]; // Array of Role IDs (Foreign keys to MOCK_ROLES)
}

export const MOCK_GROUPS: MockGroup[] = [
  { id: 1, orgId: 1, name: "Tech Leaders", roleIds: [1, 2, 4] },
  { id: 2, orgId: 1, name: "Developers", roleIds: [3, 4] },
  { id: 3, orgId: 2, name: "HR Admins", roleIds: [2, 4] },
  { id: 4, orgId: 3, name: "Accountants", roleIds: [4, 5] },
  { id: 5, orgId: 4, name: "Sales Team", roleIds: [4] },
];