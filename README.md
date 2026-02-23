# Noir – Black Love Dating Platform

A secure, full-stack dating platform built for the Black community in Europe.

This project focuses on authentication architecture, secure database design, and modern Next.js full-stack patterns.

---

## 🚀 Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Supabase (Auth + PostgreSQL)
- Row Level Security (RLS)
- Middleware-based route protection
- Git & GitHub

---

## 🔐 Authentication & Security

- Email/password authentication via Supabase
- Protected dashboard route
- Middleware session validation
- Row Level Security policies on profiles table
- Users can only read/write their own profile data

---

## 🗂 Database Design

### profiles table

- id (uuid, linked to auth.uid())
- username (required)
- bio
- location
- created_at (timestamptz)

RLS policies ensure users:
- Can insert their own profile
- Can read their own profile
- Can update their own profile

---

## 🧠 Architecture Focus

This project demonstrates:

- Secure client-server auth flow
- Middleware route guarding
- Proper environment variable handling
- Separation of UI and data layer
- Production-ready folder structure

---

## 🛠 In Progress

- Auto-create profile on signup
- Profile editing UI
- User discovery
- Matching system
- Messaging system

---

## 🎯 Goal

To build a scalable, security-focused full-stack dating application using modern TypeScript and Supabase patterns.