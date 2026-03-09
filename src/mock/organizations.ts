export interface MockOrganizationEntity {
  id: number;
  name: string;
  code: string;
  description: string;
}

export const MOCK_ORGANIZATIONS: MockOrganizationEntity[] = [
  { id: 1, name: "Phòng Kỹ thuật", code: "KT", description: "Khối Công nghệ Thông tin" },
  { id: 2, name: "Phòng Hành chính", code: "HC", description: "Khối Quản trị Nguồn nhân lực" },
  { id: 3, name: "Phòng Kế toán", code: "KT2", description: "Khối Tài chính Kế toán" },
  { id: 4, name: "Phòng Kinh doanh", code: "KD", description: "Khối Phát triển Thị trường" },
];