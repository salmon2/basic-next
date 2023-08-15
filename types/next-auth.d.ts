import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    id: string;
    name: string;
    userType: string;
    accessToken: string;
    accessTokenExpires: number;
    error: string;
    org: string;
  }

  interface User {
    id: string;
    name: string;
    userType: string;
    org: string;
    accessToken: string;
    privacyAgreeFlag: boolean;
    isMobile: boolean;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    name: string;
    userType: string;
    org: string;
    accessToken: string;
    accessTokenExpires: number;
    refreshToken: string;
    error?: string;
  }
}
