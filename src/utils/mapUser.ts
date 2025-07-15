import type { UserResponse } from "../types/User.type";

export function mapUser(user: UserResponse) {
  const { _id: id, ...rest } = user;

  return { id, ...rest };
}
