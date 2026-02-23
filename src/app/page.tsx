"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const run = async () => {
      const { data } = await supabase.auth.getUser();
      setLoggedIn(!!data.user);
    };
    run();
  }, []);

  return (
    <main className={styles.hero}>
      <header className={styles.navbar}>
        <div className={styles.logo}>Noir</div>

        {loggedIn ? (
          <Link href="/dashboard" className={styles.signin}>
            Dashboard
          </Link>
        ) : (
          <Link href="/login" className={styles.signin}>
            Sign In
          </Link>
        )}
      </header>

      <section className={styles.heroContent}>
        <div>
          <p className={styles.badge}>NOW IN NORWAY & GERMANY</p>

          <h1 className={styles.title}>
            Where <span className={styles.highlight}>Black</span>
            <br />
            <span className={styles.highlight}>Love</span> Blooms
          </h1>

          <p className={styles.subtitle}>
            A premium dating experience designed for the Black community in Europe. Elegant connections, thoughtful
            conversations, and meaningful relationships.
          </p>

          <div className={styles.buttons}>
            <Link href="/signup" className={styles.primary}>
              GET STARTED →
            </Link>

            <button className={styles.secondary}>LEARN MORE</button>
          </div>

          <p className={styles.members}>Join 2,500+ members</p>
        </div>

        <div className={styles.card}>
          <div className={styles.imagePlaceholder}></div>
          <p className={styles.featured}>FEATURED</p>
          <h3>Amara, 28</h3>
          <p className={styles.location}>Berlin, Germany</p>
        </div>
      </section>
    </main>
  );
}