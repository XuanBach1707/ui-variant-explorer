# mock/

Chứa toàn bộ dữ liệu giả lập (mock data) cho prototype.

## Quy ước

- 1 file = 1 entity: `users.ts`, `groups.ts`, `organizations.ts`
- Mỗi file export một array được typed rõ ràng
- Số lượng bản ghi đủ để test các edge case: empty state, truncate, status khác nhau

## Ví dụ cấu trúc một file mock

```ts
// mock/users.ts

export interface User {
  id: number;
  fullName: string;
  email: string;
  jobTitle: string | null;
  isActive: boolean;
  organization: { id: number; name: string; code: string } | null;
}

export const MOCK_USERS: User[] = [
  // Ít nhất nên có:
  // - 2-3 user active bình thường
  // - 1 user inactive (test status badge)
  // - 1 user không có organization (test empty state)
  // - 1 user có tên rất dài (test truncate)
];
```

## Cách dùng trong component

```ts
import { MOCK_USERS } from "@/mock/users";
```

Không import mock data ở production code. Mock data chỉ dùng trong prototype.
