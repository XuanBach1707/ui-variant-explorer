export interface MockOrganization {
  id: number;
  name: string;
  code: string;
}

export interface MockUser {
  id: number;
  fullName: string;
  email: string;
  jobTitle: string | null;
  isActive: boolean;
  organization: MockOrganization | null;
  // Bổ sung các fields cho Detail View
  avatar: string | null;
  phone: string | null;
  createdAt: string; // ISO 8601
  lastLogin: string | null; // ISO 8601
}

export const MOCK_USERS: MockUser[] = [
  {
    id: 1,
    fullName: "Nguyễn Văn An",
    email: "an.nguyen@company.vn",
    jobTitle: "Trưởng phòng Kỹ thuật",
    isActive: true,
    organization: { id: 1, name: "Phòng Kỹ thuật", code: "KT" },
    avatar: "https://i.pravatar.cc/150?u=1",
    phone: "0901234567",
    createdAt: "2023-01-15T08:00:00Z",
    lastLogin: "2024-03-08T09:15:00Z",
  },
  {
    id: 2,
    fullName: "Trần Thị Bích",
    email: "bich.tran@company.vn",
    jobTitle: "Kỹ sư phần mềm",
    isActive: true,
    organization: { id: 1, name: "Phòng Kỹ thuật", code: "KT" },
    avatar: "https://i.pravatar.cc/150?u=2",
    phone: "0987654321",
    createdAt: "2023-02-20T08:30:00Z",
    lastLogin: "2024-03-09T08:00:00Z",
  },
  {
    id: 3,
    fullName: "Lê Hoàng Cường",
    email: "cuong.le@company.vn",
    jobTitle: "Chuyên viên Hành chính",
    isActive: true,
    organization: { id: 2, name: "Phòng Hành chính", code: "HC" },
    avatar: null, // Test fallback avatar
    phone: "0912345678",
    createdAt: "2023-03-10T09:00:00Z",
    lastLogin: "2024-03-07T17:30:00Z",
  },
  {
    id: 4,
    fullName: "Phạm Minh Đức",
    email: "duc.pham@company.vn",
    jobTitle: "Kế toán viên",
    isActive: false, // Test Inactive state
    organization: { id: 3, name: "Phòng Kế toán", code: "KT2" },
    avatar: "https://i.pravatar.cc/150?u=4",
    phone: "0923456789",
    createdAt: "2023-04-05T08:15:00Z",
    lastLogin: null, // Test never logged in
  },
  {
    id: 5,
    fullName: "Hoàng Thị Em",
    email: "em.hoang@company.vn",
    jobTitle: "Nhân viên kinh doanh",
    isActive: false,
    organization: { id: 4, name: "Phòng Kinh doanh", code: "KD" },
    avatar: "https://i.pravatar.cc/150?u=5",
    phone: "0934567890",
    createdAt: "2023-05-12T08:45:00Z",
    lastLogin: "2024-01-10T10:00:00Z",
  },
  {
    id: 6,
    fullName: "Vũ Quốc Phong",
    email: "phong.vu@company.vn",
    jobTitle: "Thực tập sinh",
    isActive: true,
    organization: null, // Test null org
    avatar: "https://i.pravatar.cc/150?u=6",
    phone: null, // Test null phone
    createdAt: "2024-02-01T08:00:00Z",
    lastLogin: "2024-03-09T08:30:00Z",
  },
  {
    id: 7,
    fullName: "Đặng Thị Giang",
    email: "giang.dang@company.vn",
    jobTitle: null, // Test null job title
    isActive: true,
    organization: { id: 2, name: "Phòng Hành chính", code: "HC" },
    avatar: "https://i.pravatar.cc/150?u=7",
    phone: "0956789012",
    createdAt: "2023-06-20T09:00:00Z",
    lastLogin: "2024-03-09T08:45:00Z",
  },
  {
    id: 8,
    fullName: "Nguyễn Thị Thanh Hương Phương Linh",
    email: "huong.phuong.linh.nguyen@company.vn",
    jobTitle: "Chuyên viên Phân tích Nghiệp vụ Cao cấp",
    isActive: true,
    organization: { id: 1, name: "Phòng Kỹ thuật", code: "KT" },
    avatar: "https://i.pravatar.cc/150?u=8",
    phone: "0967890123",
    createdAt: "2023-07-15T08:00:00Z",
    lastLogin: "2024-03-09T09:00:00Z",
  },
];