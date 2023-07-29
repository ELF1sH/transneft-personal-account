export interface ITokenRepository {
  setAccessToken: (token: string) => void;
  getAccessToken: () => string | undefined;

  setRefreshToken: (token: string) => void;
  getRefreshToken: () => string | undefined;

  setUserId: (userId: string) => void;
  getUserId: () => string | undefined;

  setEmployeeId: (employeeId: string) => void;
  getEmployeeId: () => string | undefined;

  reset: () => void;
}
