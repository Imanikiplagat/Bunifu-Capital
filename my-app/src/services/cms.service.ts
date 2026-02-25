import axios from "axios";
import type {
  Article,
  Session,
  WaitlistEntry,
  DemoBooking,
  WorkingWithUsEntry,
  ContactEntry,
  NewsletterSubscriber,
  JobListing,
  TalentPoolEntry,
  User
} from "@/admin/context/types";

const NOT_IMPLEMENTED = "Backend not implemented";

//  sign in APIs

const API = axios.create({
  baseURL : "https://blog-service-latest-oqfd.onrender.com",
  headers : { "Content-Type": "application/json" },
});

//Signup
export async function signUpUser(data: {username: string; email: string; password:string}): Promise<User> {
  const res = await API.post("/signup", data);
  return res.data;  
}
// LoginUser
export async function loginUser(data: { username: string; password: string }) {
  const res = await API.post("/token", data);
  return res.data;
}
// Read current user 
export async function readUser(token: string): Promise<User> {
  const res = await API.get("/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

//Articles :Get all articles
export async function getArticles(): Promise<Article[]> {
  try {
    const res = await API.get("/posts"); // Replace with your articles endpoint from docs
    return res.data;
  } catch (err) {
    console.error("Failed to fetch articles:", err);
    return [];
  }
}

// Get single article by ID
export async function getArticle(id: string): Promise<Article | null> {
  try {
    const res = await API.get(`/posts/${id}`);
    return res.data;
  } catch (err) {
    console.error(`Failed to fetch article ${id}:`, err);
    return null;
  }
}

export async function getSessions(): Promise<Session[]> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getWaitlist(): Promise<WaitlistEntry[]> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getDemoBookings(): Promise<DemoBooking[]> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getWorkingWithUs(): Promise<WorkingWithUsEntry[]> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getContacts(): Promise<ContactEntry[]> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getJobListings(): Promise<JobListing[]> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getJobListing(_id: string): Promise<JobListing | null> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getTalentPool(): Promise<TalentPoolEntry[]> {
  throw new Error(NOT_IMPLEMENTED);
}
