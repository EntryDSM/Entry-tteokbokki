export type UserType = {
  userType: "admin" | "user";
};

export type HeaderTypes = {
  userType: UserType;
  isLogin: boolean;
};

export const ROUTE_USER_TYPES = {
  "/": "admin",
  "/job-status": "admin",
  "/submitted": "user",
  "/post": "admin",
  "/create-support": "admin",
  "/edit-support": "admin",
  "/application-writing": "user",
  "/completed": "admin",
  " user/submitted": "user",
  "/edit-support/:noticeId": "admin",
} as const;

export const DEFAULT_USER_TYPE = "admin";
