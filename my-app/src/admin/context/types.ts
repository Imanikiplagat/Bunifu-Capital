// CMS entity types (frontend-only)

export type ArticleStatus = "Draft" | "In Review" | "Published";
export type SessionStatus = "Draft" | "In Review" | "Published";
export type WaitlistStatus = "New" | "Reviewed" | "Contacted" | "Converted";
export type DemoBookingStatus = "Pending Review" | "Confirmed" | "Completed";
export type WorkingWithUsStatus = "New" | "Reviewed" | "Contacted" | "Accepted" | "Declined";
export type ContactStatus = "New" | "Reviewed" | "Replied" | "Resolved";
export type JobStatus = "Draft" | "Open" | "Closed";
export type ApplicantStatus = "New" | "Shortlisted" | "Interview" | "Rejected" | "Accepted";
export type TalentPoolTag = "Strong fit" | "Future fit" | "Not suitable" | null;
export type User = {  id: number;  username: string;  email: string;};

export interface Article {
  id: string;
  title: string;
  author: string;
  status: ArticleStatus;
  datePublished: string;
  featuredImage?: string;
  body: string;
  tags: string;
  metaDescription: string;
  updatedAt: string;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  sessionLink: string;
  status: SessionStatus;
  featuredImage?: string;
  updatedAt: string;
}

export interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  type: string;
  challenges: string;
  dateJoined: string;
  status: WaitlistStatus;
  notificationReviewed?: boolean;
}

export interface DemoBooking {
  id: string;
  name: string;
  email: string;
  organization: string;
  preferredDate: string;
  message: string;
  status: DemoBookingStatus;
  notificationReviewed?: boolean;
}

export interface WorkingWithUsEntry {
  id: string;
  name: string;
  company: string;
  email: string;
  inquiryType: string;
  message: string;
  date: string;
  status: WorkingWithUsStatus;
  notificationReviewed?: boolean;
}

export interface ContactEntry {
  id: string;
  name: string;
  email: string;
  subject: string;
  messagePreview: string;
  fullMessage?: string;
  date: string;
  status: ContactStatus;
  notificationReviewed?: boolean;
}

export interface NewsletterSubscriber {
  id: string;
  name: string;
  email: string;
  dateSubscribed: string;
}

export interface JobApplicant {
  id: string;
  name: string;
  email: string;
  resumeLink: string;
  portfolioLink: string;
  dateApplied: string;
  status: ApplicantStatus;
  notificationReviewed?: boolean;
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string;
  status: JobStatus;
  applicants: JobApplicant[];
  updatedAt: string;
}

export interface TalentPoolEntry {
  id: string;
  name: string;
  email: string;
  roleInterest: string;
  linkedin: string;
  github: string;
  portfolio: string;
  dateSubmitted: string;
  tag: TalentPoolTag;
}

export interface AdminProfile {
  email: string;
  password: string;
}

export type NotificationType =
  | "waitlist"
  | "demo"
  | "contact"
  | "job_application"
  | "partnership";

export interface NotificationItem {
  id: string;
  type: NotificationType;
  entityId: string;
  applicantId?: string;
  name: string;
  date: string;
  status: string;
  reviewed: boolean;
  href: string;
}
