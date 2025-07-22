import type { UserPreviewResponse } from "../types/User.type";

export function mapUserPreview(user: UserPreviewResponse) {
  const { _id: id, ...rest } = user;

  return { id, ...rest };
}
