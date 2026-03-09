export interface MockLoginEvent {
  id: number;
  userId: number;
  loginAt: string; // ISO 8601
  ipAddress: string;
  device: string; // Format: "Browser / OS"
  status: "success" | "failed";
}

/**
 * MOCK_LOGIN_HISTORY: Lịch sử đăng nhập cho Tab "Bảo mật".
 * Filter theo userId khi render.
 * Edge case: User 4 (Phạm Minh Đức) không có record → test empty state "Chưa có lịch sử đăng nhập".
 */
export const MOCK_LOGIN_HISTORY: MockLoginEvent[] = [
  // --- User 1 (Nguyễn Văn An): nhiều events, có cả failed ---
  { id: 1, userId: 1, loginAt: "2024-03-09T09:15:00Z", ipAddress: "192.168.1.10", device: "Chrome / Windows", status: "success" },
  { id: 2, userId: 1, loginAt: "2024-03-08T09:15:00Z", ipAddress: "192.168.1.10", device: "Chrome / Windows", status: "success" },
  { id: 3, userId: 1, loginAt: "2024-03-07T22:00:00Z", ipAddress: "10.0.0.5",    device: "Firefox / macOS",  status: "failed"  },
  { id: 4, userId: 1, loginAt: "2024-03-06T08:30:00Z", ipAddress: "192.168.1.10", device: "Chrome / Windows", status: "success" },

  // --- User 2 (Trần Thị Bích) ---
  { id: 5, userId: 2, loginAt: "2024-03-09T08:00:00Z", ipAddress: "192.168.1.20", device: "Safari / macOS",  status: "success" },
  { id: 6, userId: 2, loginAt: "2024-03-07T10:30:00Z", ipAddress: "192.168.1.20", device: "Safari / macOS",  status: "success" },

  // --- User 3 (Lê Hoàng Cường) ---
  { id: 7, userId: 3, loginAt: "2024-03-07T17:30:00Z", ipAddress: "10.0.1.5",    device: "Chrome / Windows", status: "success" },

  // --- User 4 (Phạm Minh Đức): Không có record → empty state ---

  // --- User 5 (Hoàng Thị Em) ---
  { id: 8, userId: 5, loginAt: "2024-01-10T10:00:00Z", ipAddress: "192.168.2.1", device: "Edge / Windows",  status: "success" },

  // --- User 6 (Vũ Quốc Phong): có failed login ---
  { id: 9,  userId: 6, loginAt: "2024-03-09T08:30:00Z", ipAddress: "192.168.1.30", device: "Chrome / Android", status: "success" },
  { id: 10, userId: 6, loginAt: "2024-03-08T11:00:00Z", ipAddress: "192.168.1.30", device: "Chrome / Android", status: "failed"  },

  // --- User 7 (Đặng Thị Giang) ---
  { id: 11, userId: 7, loginAt: "2024-03-09T08:45:00Z", ipAddress: "10.0.2.8",   device: "Firefox / Windows", status: "success" },

  // --- User 8 (Nguyễn Thị Thanh Hương Phương Linh) ---
  { id: 12, userId: 8, loginAt: "2024-03-09T09:00:00Z", ipAddress: "192.168.1.40", device: "Chrome / Windows", status: "success" },
];
