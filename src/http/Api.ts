/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface SignInDto {
  /** @default "admin@example.com" */
  email: string;
  /** @default "Admin@123" */
  password: string;
}

export interface FileDto {
  /** Id of the file */
  fileId: string;
  /** url of the file */
  url: string;
}

export interface Address {
  /**
   * Latitude of the user address
   * @example 30.1575
   */
  latitude: number;
  /**
   * Longitude of the user address
   * @example 71.5249
   */
  longitude: number;
}

export interface User {
  /**
   * Unique identifier of the user
   * @example "60f7a1c5e5b3a72b3c8a830f"
   */
  _id: string;
  profileImage: FileDto;
  /**
   * Username of the user
   * @example "john_doe"
   */
  fullName: string;
  /**
   * Email address of the user
   * @example "john.doe@example.com"
   */
  email: string;
  /**
   * Password of the user (hidden)
   * @example "strong_password123"
   */
  password: string;
  /**
   * Role of the user
   * @example "Admin"
   */
  role: "Admin" | "City Manager" | "Customer" | "Salesman" | "Professional";
  /**
   * Timestamp when the user was created
   * @format date-time
   * @example "2023-01-01T00:00:00.000Z"
   */
  createdAt: string;
  /**
   * Is Profile Completed
   * @example true
   */
  isActive: boolean;
  /**
   * Timestamp when the user was last updated
   * @format date-time
   * @example "2023-01-02T00:00:00.000Z"
   */
  updatedAt: string;
  address: Address;
  /**
   * Version key (hidden)
   * @example 0
   */
  __v: number;
}

export interface AuthUserDto {
  user: User;
  accessToken: string;
}

export interface SignUpDto {
  /** @default "admin@example.com" */
  email: string;
  /** @default "Admin@123" */
  password: string;
  /** @default "Admin@123" */
  confirmPassword: string;
  fullName: string;
}

export interface ForgotPasswordDTO {
  /** @default "admin@example.com" */
  email: string;
  /** @default "Forgot Password" */
  type: string;
}

export interface VerifyOtpDTO {
  /** @default "admin@example.com" */
  email: string;
  /** @default "Forgot Password" */
  type: string;
  /** @default 535443 */
  otp: string;
}

export type MessageDto = object;

export interface ResetPasswordDTO {
  /** @default "admin@example.com" */
  email: string;
  /** @default 535443 */
  otp: string;
  /** @default "Admin@123" */
  password: string;
  /** @default "Admin@123" */
  confirmPassword: string;
}

export interface AdminAnalyticsDto {
  /** @example 420 */
  totalProfessionals: number;
  /** @example 1350 */
  totalCustomers: number;
  /** @example 870 */
  totalBookings: number;
  /** @example 320 */
  foreignJobApplications: number;
  /** @example 380 */
  activeProfessionals: number;
  /** @example 650 */
  completedBookings: number;
  /** @example 950 */
  activeUsers: number;
  /** @example 150 */
  inactiveUsers: number;
  /** @example 120 */
  newUsersThisMonth: number;
}

export interface CreateInquiryDto {
  username: string;
  email: string;
  query: string;
  subject: string;
  phone: string;
  type: string;
}

export interface UpdateInquiryDto {
  message: string;
}

export interface CreateDistrictOfficerDto {
  /**
   * Phone number
   * @example "Sami"
   */
  name: string;
  /**
   * Phone number
   * @example "03001234567"
   */
  email: string;
  /**
   * Phone number
   * @example "03001234567"
   */
  phone: number;
  /**
   * District
   * @example "Lahore"
   */
  city: string;
}

export interface CityOfficer {
  /**
   * Unique identifier of the user
   * @example "60f7a1c5e5b3a72b3c8a830f"
   */
  _id: string;
  /**
   * Contact phone number
   * @example "03001234567"
   */
  phone: number;
  /**
   * District name
   * @example "Lahore"
   */
  city?:
    | "Multan"
    | "Lahore"
    | "Karachi"
    | "Islamabad"
    | "Faisalabad"
    | "Rawalpindi";
  /** Reference to the User who owns this */
  user: User;
}

export interface UpdateDistrictOfficerDto {
  /**
   * Phone number
   * @example "Sami"
   */
  name?: string;
  /**
   * Phone number
   * @example "03001234567"
   */
  email?: string;
  /**
   * Phone number
   * @example "03001234567"
   */
  phone?: number;
  /**
   * District
   * @example "Lahore"
   */
  city?: string;
}

export interface CreateSalesmanDto {
  /**
   * Phone number
   * @example "03001234567"
   */
  email: string;
  /**
   * Phone number
   * @example "03001234567"
   */
  name: string;
  /**
   * Phone number
   * @example "03001234567"
   */
  phone: string;
  /**
   * Gender
   * @example "male"
   */
  gender: "male" | "female" | "other";
  /**
   * District
   * @example "Lahore"
   */
  city: string;
}

export interface Salesman {
  /**
   * Unique identifier of the user
   * @example "60f7a1c5e5b3a72b3c8a830f"
   */
  _id: string;
  /**
   * Phone number of the recruiter
   * @example "03001234567"
   */
  phone: string;
  /**
   * Gender
   * @example "male"
   */
  gender: "male" | "female";
  /**
   * city assigned to the salesman
   * @example "Lahore"
   */
  city?: string;
  /** Reference to the associated user account */
  user: User;
}

export interface CreateProfessionalDto {
  /** @example "Ali Raza" */
  name: string;
  /** @example "03001234567" */
  phone: string;
  /** @example "03001234567" */
  whatsappNumber: string;
  /**
   * Profession of the individual
   * @example "Electrician"
   */
  profession:
    | "Plumber"
    | "Electrician"
    | "Mechanic"
    | "Carpenter"
    | "AC Technician"
    | "Painter"
    | "Cleaner";
  /**
   * Years of experience (optional)
   * @example 5
   */
  experienceYears?: number;
  /** @example "Lahore" */
  city: string;
  /** @example "123 Main Street, Lahore" */
  address?: string;
  /** @example 31.5204 */
  latitude: number;
  /** @example 74.3587 */
  longitude: number;
}

export interface Coordinates {
  /** @example 31.5204 */
  latitude: number;
  /** @example 74.3587 */
  longitude: number;
}

export interface Professional {
  /**
   * Unique identifier of the user
   * @example "60f7a1c5e5b3a72b3c8a830f"
   */
  _id: string;
  /** @example "Sami Ullah" */
  name: string;
  /** @example "03001234567" */
  phone: string;
  /** @example "03001234567" */
  whatsappNumber: string;
  /** @example "Electrician" */
  profession:
    | "Plumber"
    | "Electrician"
    | "Mechanic"
    | "Carpenter"
    | "AC Technician"
    | "Painter"
    | "Cleaner";
  /** @example 3 */
  experienceYears?: number;
  /** @example "Lahore" */
  city: string;
  /** @example "123 Street, Lahore" */
  address?: string;
  coordinates?: Coordinates;
  /** @default false */
  isVerified: boolean;
}

export interface Booking {
  /**
   * Unique identifier of the booking
   * @example "60f7a1c5e5b3a72b3c8a830f"
   */
  _id: string;
  /** Reference to the User who owns this */
  user: User;
  /** Reference to the User who owns this */
  professional: Professional;
  /**
   * Date and time of the booking
   * @format date-time
   */
  date: string;
  /** Date and time of the booking */
  time: string;
  /** Date and time of the booking */
  city: string;
  /** Date and time of the booking */
  type: string;
  /** @example "pending" */
  status: "pending" | "confirmed" | "completed" | "cancelled";
  /** Additional notes or instructions from the customer */
  description?: string;
  /** Address where service is to be provided */
  address: string;
  /** Address where service is to be provided */
  images?: FileDto[];
  /** Address where service is to be provided */
  audio?: FileDto;
}

export interface PatchProfessionalDTO {
  /** @example "2025-07-01T10:00:00Z" */
  professionalId: string;
}

export interface SalaryDto {
  /** @example 1200 */
  amount?: number;
  /** @example "AED" */
  currency?: string;
  /** @example "Plus overtime" */
  notes?: string;
}

export interface BenefitsDto {
  /** @default false */
  accommodation?: boolean;
  /** @default false */
  food?: boolean;
  /** @default false */
  transport?: boolean;
  /** @default true */
  medical?: boolean;
  other?: string[];
}

export interface ContractDetailsDto {
  /** @example 24 */
  durationMonths?: number;
  /** @default true */
  renewable?: boolean;
  /** @example 6 */
  workingDaysPerWeek?: number;
  /** @example 8 */
  workingHoursPerDay?: number;
  /** @default true */
  overtimeAvailable?: boolean;
}

export interface InterviewDetailsDto {
  /** @example "2025-07-01T10:00:00Z" */
  date?: string;
  mode?: "In-person" | "Zoom" | "Skype" | "Phone" | "Video Test";
  location?: string;
  notes?: string;
}

export interface CreateJobPostDto {
  /** @example "Electrician for building maintenance" */
  title: string;
  category:
    | "Electrician"
    | "Plumber"
    | "Welder"
    | "Carpenter"
    | "HVAC Technician"
    | "Mason"
    | "Helper"
    | "Driver"
    | "Other";
  /** @example "UAE" */
  country: string;
  /** @example "Dubai" */
  city?: string;
  /** @example "Al Futtaim Group" */
  companyName?: string;
  /** @example "Wiring and electrical maintenance..." */
  description: string;
  /** @example "Install wires,Repair sockets" */
  responsibilities?: string;
  /** @example "Wiring,Tools handling" */
  skillsRequired: string;
  /** @example "Minimum 2 years of experience in electrical work" */
  experienceRequired: string;
  /** @example "Matric / Diploma" */
  education?: string;
  salary?: SalaryDto;
  benefits?: BenefitsDto;
  contractDetails?: ContractDetailsDto;
  interviewDetails?: InterviewDetailsDto;
}

export interface Salary {
  /** @example 1500 */
  amount?: number;
  /** @example "AED" */
  currency?: string;
  /** @example "Accommodation and food included" */
  notes?: string;
}

export interface Benefits {
  /**
   * Is accommodation provided?
   * @default false
   */
  accommodation?: boolean;
  /**
   * Is food provided?
   * @default false
   */
  food?: boolean;
  /**
   * Is transport provided?
   * @default false
   */
  transport?: boolean;
  /**
   * Is medical coverage provided?
   * @default true
   */
  medical?: boolean;
  /** Other additional benefits */
  other?: string[];
}

export interface ContractDetails {
  /**
   * Duration of the contract in months
   * @example 24
   */
  durationMonths?: number;
  /**
   * Is the contract renewable?
   * @default true
   */
  renewable?: boolean;
  /**
   * Working days per week
   * @example 6
   */
  workingDaysPerWeek?: number;
  /**
   * Working hours per day
   * @example 8
   */
  workingHoursPerDay?: number;
  /**
   * Is overtime available?
   * @default true
   */
  overtimeAvailable?: boolean;
}

export interface Interview {
  /**
   * @format date-time
   * @example "2025-06-25T08:00:00Z"
   */
  date?: string;
  /** @example "Online" */
  mode?: string;
  /** @example "Lahore Office" */
  location?: string;
  /** @example "Bring original documents" */
  notes?: string;
}

export interface Job {
  /**
   * Unique identifier for the job post
   * @example "60f7a1c5e5b3a72b3c8a830f"
   */
  _id: string;
  /** @example "Electrician for Building Maintenance" */
  title: string;
  /** @example "Electrician" */
  category:
    | "Electrician"
    | "Plumber"
    | "Welder"
    | "Carpenter"
    | "HVAC Technician"
    | "Mason"
    | "Helper"
    | "Driver"
    | "Other";
  /** @example "UAE" */
  country: string;
  /** @example "Dubai" */
  city?: string;
  /** @example "Al Futtaim Group" */
  companyName?: string;
  /** @example "Responsible for installing and repairing wiring..." */
  description: string;
  /** @example "Wiring,Inspection" */
  responsibilities?: string;
  /** @example "Electrical tools,Safety knowledge" */
  skillsRequired?: string;
  /** @example "2 years minimum experience required" */
  experienceRequired: string;
  /** @example "Matric / Technical Diploma" */
  education?: string;
  salary?: Salary;
  benefits?: Benefits;
  contractDetails?: ContractDetails;
  interviewDetails?: Interview;
  /** @example true */
  isActive: boolean;
  /**
   * @format date-time
   * @example "2025-06-25T09:00:00.000Z"
   */
  createdAt: string;
}

export interface JobQueryDto {
  /**
   * Job title
   * @example "Junior Constable"
   */
  title?: string;
  /**
   * Job title
   * @example "Junior Constable"
   */
  country?: string;
  /**
   * Job title
   * @example "Junior Constable"
   */
  category?: string;
  /**
   * Job title
   * @example 2
   */
  limit?: number;
}

export interface ContactDto {
  agencyName?: string;
  contactPerson?: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
}

export interface UpdateJobPostDto {
  /** @example "Electrician for building maintenance" */
  title?: string;
  category?:
    | "Electrician"
    | "Plumber"
    | "Welder"
    | "Carpenter"
    | "HVAC Technician"
    | "Mason"
    | "Helper"
    | "Driver"
    | "Other";
  /** @example "UAE" */
  country?: string;
  /** @example "Dubai" */
  city?: string;
  /** @example "Al Futtaim Group" */
  companyName?: string;
  /** @example "Wiring and electrical maintenance..." */
  description?: string;
  /** @example "Install wires,Repair sockets" */
  responsibilities?: string;
  /** @example "Wiring,Tools handling" */
  skillsRequired?: string;
  /** @example "Minimum 2 years of experience in electrical work" */
  experienceRequired?: string;
  /** @example "Matric / Diploma" */
  education?: string;
  salary?: SalaryDto;
  benefits?: BenefitsDto;
  contractDetails?: ContractDetailsDto;
  interviewDetails?: InterviewDetailsDto;
  contact?: ContactDto;
  isActive: boolean;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Punjab Police Job Portal API
 * @version 1.0
 * @contact
 *
 * API documentation for Punjab Police Job Portal
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags App
   * @name AppControllerGetHello
   * @request GET:/
   */
  appControllerGetHello = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "GET",
      ...params,
    });

  auth = {
    /**
     * No description
     *
     * @tags User
     * @name UserControllerSignIn
     * @request POST:/auth/sign-in
     */
    userControllerSignIn: (data: SignInDto, params: RequestParams = {}) =>
      this.request<AuthUserDto, any>({
        path: `/auth/sign-in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerSignUp
     * @request POST:/auth/sign-up
     */
    userControllerSignUp: (data: SignUpDto, params: RequestParams = {}) =>
      this.request<AuthUserDto, any>({
        path: `/auth/sign-up`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerForgotPassword
     * @request POST:/auth/forgot-password
     */
    userControllerForgotPassword: (
      data: ForgotPasswordDTO,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/auth/forgot-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerVerifyOtp
     * @request POST:/auth/verify-otp
     */
    userControllerVerifyOtp: (data: VerifyOtpDTO, params: RequestParams = {}) =>
      this.request<MessageDto, any>({
        path: `/auth/verify-otp`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerResetPassword
     * @request POST:/auth/reset-password
     */
    userControllerResetPassword: (
      data: ResetPasswordDTO,
      params: RequestParams = {},
    ) =>
      this.request<AuthUserDto, any>({
        path: `/auth/reset-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerAuthUser
     * @request GET:/auth/auth-user
     * @secure
     */
    userControllerAuthUser: (data: SignInDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/auth-user`,
        method: "GET",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Fetches overall statistics such as total professionals, customers, bookings, job applications, and user activity.
     *
     * @tags User
     * @name UserControllerGetStats
     * @summary Get admin analytics stats
     * @request GET:/auth/stats
     */
    userControllerGetStats: (params: RequestParams = {}) =>
      this.request<AdminAnalyticsDto, void>({
        path: `/auth/stats`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerUpdateProfile
     * @request PATCH:/auth/update-profile/{id}
     */
    userControllerUpdateProfile: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/update-profile/${id}`,
        method: "PATCH",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerUploadImage
     * @request POST:/auth/{id}/upload-profile
     */
    userControllerUploadImage: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/${id}/upload-profile`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerUploadProfileImage
     * @request POST:/auth/upload-profile
     */
    userControllerUploadProfileImage: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/upload-profile`,
        method: "POST",
        ...params,
      }),
  };
  inquiry = {
    /**
     * No description
     *
     * @tags Inquiry
     * @name InquiryControllerCreateInquiry
     * @request POST:/inquiry
     */
    inquiryControllerCreateInquiry: (
      data: CreateInquiryDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/inquiry`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inquiry
     * @name InquiryControllerGetInquiries
     * @request GET:/inquiry
     */
    inquiryControllerGetInquiries: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/inquiry`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inquiry
     * @name InquiryControllerGetInquiryById
     * @request GET:/inquiry/{id}
     */
    inquiryControllerGetInquiryById: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/inquiry/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inquiry
     * @name InquiryControllerUpdateInquiry
     * @request PATCH:/inquiry/{id}
     */
    inquiryControllerUpdateInquiry: (
      id: string,
      data: UpdateInquiryDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/inquiry/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inquiry
     * @name InquiryControllerDeleteInquiry
     * @request DELETE:/inquiry/{id}
     */
    inquiryControllerDeleteInquiry: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/inquiry/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  images = {
    /**
     * No description
     *
     * @tags Image
     * @name ImageControllerStore
     * @request POST:/images
     */
    imageControllerStore: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/images`,
        method: "POST",
        ...params,
      }),
  };
  cityOfficers = {
    /**
     * No description
     *
     * @tags City Officers
     * @name CityOfficerControllerCreate
     * @summary Create a new district officer
     * @request POST:/city-officers
     */
    cityOfficerControllerCreate: (
      data: CreateDistrictOfficerDto,
      params: RequestParams = {},
    ) =>
      this.request<CityOfficer, any>({
        path: `/city-officers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags City Officers
     * @name CityOfficerControllerFindAll
     * @summary Get all district officers with optional filters
     * @request GET:/city-officers
     */
    cityOfficerControllerFindAll: (
      query?: {
        /**
         * District name
         * @example "Multan"
         */
        city?: string;
        /**
         * Full name of the district officer
         * @example "Sami Ullah"
         */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CityOfficer[], any>({
        path: `/city-officers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags City Officers
     * @name CityOfficerControllerFindOne
     * @summary Get a district officer by ID
     * @request GET:/city-officers/{id}
     */
    cityOfficerControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<CityOfficer, any>({
        path: `/city-officers/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags City Officers
     * @name CityOfficerControllerUpdate
     * @summary Update a district officer by ID
     * @request PATCH:/city-officers/{id}
     */
    cityOfficerControllerUpdate: (
      id: string,
      data: UpdateDistrictOfficerDto,
      params: RequestParams = {},
    ) =>
      this.request<CityOfficer, any>({
        path: `/city-officers/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags City Officers
     * @name CityOfficerControllerRemove
     * @summary Delete a district officer by ID
     * @request DELETE:/city-officers/{id}
     */
    cityOfficerControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/city-officers/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags City Officers
     * @name CityOfficerControllerByUser
     * @summary Get a district officer  by user ID
     * @request GET:/city-officers/user/{userId}
     */
    cityOfficerControllerByUser: (userId: string, params: RequestParams = {}) =>
      this.request<CityOfficer, any>({
        path: `/city-officers/user/${userId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  salesman = {
    /**
     * No description
     *
     * @tags Salesman
     * @name SalesmanControllerCreate
     * @summary Create a new Salesman
     * @request POST:/salesman
     */
    salesmanControllerCreate: (
      data: CreateSalesmanDto,
      params: RequestParams = {},
    ) =>
      this.request<Salesman, any>({
        path: `/salesman`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salesman
     * @name SalesmanControllerGetAll
     * @summary Get all Salesmans with optional filters
     * @request GET:/salesman
     */
    salesmanControllerGetAll: (
      query?: {
        /**
         * Phone number
         * @example "03001234567"
         */
        name?: string;
        /**
         * District
         * @example "Lahore"
         */
        city?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Salesman[], any>({
        path: `/salesman`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salesman
     * @name SalesmanControllerGetById
     * @summary Get a Salesman by ID
     * @request GET:/salesman/{id}
     */
    salesmanControllerGetById: (id: string, params: RequestParams = {}) =>
      this.request<Salesman, any>({
        path: `/salesman/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salesman
     * @name SalesmanControllerUpdate
     * @summary Update a Salesman by ID
     * @request PATCH:/salesman/{id}
     */
    salesmanControllerUpdate: (
      id: string,
      data: CreateSalesmanDto,
      params: RequestParams = {},
    ) =>
      this.request<Salesman, any>({
        path: `/salesman/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salesman
     * @name SalesmanControllerDelete
     * @summary Delete a Salesman by ID
     * @request DELETE:/salesman/{id}
     */
    salesmanControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/salesman/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Salesman
     * @name SalesmanControllerGetSalesmanByUser
     * @summary Get a Salesman by user ID
     * @request GET:/salesman/user/{userId}
     */
    salesmanControllerGetSalesmanByUser: (
      userId: string,
      params: RequestParams = {},
    ) =>
      this.request<Salesman, any>({
        path: `/salesman/user/${userId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  professionals = {
    /**
     * No description
     *
     * @tags professionals
     * @name ProfessionalControllerCreate
     * @summary Create a new professional
     * @request POST:/professionals
     */
    professionalControllerCreate: (
      data: CreateProfessionalDto,
      params: RequestParams = {},
    ) =>
      this.request<Professional, any>({
        path: `/professionals`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags professionals
     * @name ProfessionalControllerFindAll
     * @summary Get all professionals with optional filters
     * @request GET:/professionals
     */
    professionalControllerFindAll: (
      query?: {
        /** @example "Lahore" */
        city?: string;
        /**
         * Profession of the individual
         * @example "ELECTRICIAN"
         */
        profession?: string;
        /** @example "123 Main Street, Lahore" */
        address?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Professional[], any>({
        path: `/professionals`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags professionals
     * @name ProfessionalControllerFindOne
     * @summary Get a professional by ID
     * @request GET:/professionals/{id}
     */
    professionalControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Professional, void>({
        path: `/professionals/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags professionals
     * @name ProfessionalControllerUpdate
     * @summary Update a professional by ID
     * @request PATCH:/professionals/{id}
     */
    professionalControllerUpdate: (
      id: string,
      data: CreateProfessionalDto,
      params: RequestParams = {},
    ) =>
      this.request<Professional, void>({
        path: `/professionals/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags professionals
     * @name ProfessionalControllerRemove
     * @summary Delete a professional by ID
     * @request DELETE:/professionals/{id}
     */
    professionalControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/professionals/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  bookings = {
    /**
     * No description
     *
     * @tags bookings
     * @name BookingControllerCreateBooking
     * @summary Create a new booking (with optional audio and images)
     * @request POST:/bookings
     */
    bookingControllerCreateBooking: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/bookings`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bookings
     * @name BookingControllerGetAllBooking
     * @summary Get all bookings with optional filters
     * @request GET:/bookings
     */
    bookingControllerGetAllBooking: (
      query?: {
        /** @example "2025-07-01T10:00:00Z" */
        city?: string;
        /** @example "2025-07-01T10:00:00Z" */
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Booking[], any>({
        path: `/bookings`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bookings
     * @name BookingControllerGetBooking
     * @summary Get booking by ID
     * @request GET:/bookings/{id}
     */
    bookingControllerGetBooking: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/bookings/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bookings
     * @name BookingControllerUpdateBooking
     * @summary Update booking by ID
     * @request PATCH:/bookings/{id}
     */
    bookingControllerUpdateBooking: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/bookings/${id}`,
        method: "PATCH",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bookings
     * @name BookingControllerUpdateProfessional
     * @summary Update booking by ID
     * @request PATCH:/bookings/{id}/patch-professional
     */
    bookingControllerUpdateProfessional: (
      id: string,
      data: PatchProfessionalDTO,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/bookings/${id}/patch-professional`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  jobs = {
    /**
     * No description
     *
     * @tags jobs
     * @name JobsControllerCreate
     * @summary Create a new job posting
     * @request POST:/jobs
     */
    jobsControllerCreate: (
      data: CreateJobPostDto,
      params: RequestParams = {},
    ) =>
      this.request<Job, any>({
        path: `/jobs`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags jobs
     * @name JobsControllerFindAll
     * @summary Get all jobs or filter by title
     * @request GET:/jobs
     */
    jobsControllerFindAll: (
      query: {
        /**
         * Job title
         * @example "Junior Constable"
         */
        title?: string;
        /**
         * Job title
         * @example "Junior Constable"
         */
        country?: string;
        /**
         * Job title
         * @example "Junior Constable"
         */
        category?: string;
        /**
         * Job title
         * @example 2
         */
        limit?: number;
        JobQueryDto: JobQueryDto;
      },
      params: RequestParams = {},
    ) =>
      this.request<Job[], any>({
        path: `/jobs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags jobs
     * @name JobsControllerFindOne
     * @summary Get job by ID
     * @request GET:/jobs/{id}
     */
    jobsControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Job, void>({
        path: `/jobs/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags jobs
     * @name JobsControllerUpdate
     * @summary Update job by ID
     * @request PATCH:/jobs/{id}
     */
    jobsControllerUpdate: (
      id: string,
      data: UpdateJobPostDto,
      params: RequestParams = {},
    ) =>
      this.request<Job, void>({
        path: `/jobs/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags jobs
     * @name JobsControllerRemove
     * @summary Delete job by ID
     * @request DELETE:/jobs/{id}
     */
    jobsControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/jobs/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
}
