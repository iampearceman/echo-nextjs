import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started with&nbsp;
          <code className={styles.code}>npx novu-labs@latest echo</code>
        </p>
        <div>
          <a
            href="https://novu.co?utm_source=echo-create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/novu-logo.svg"
              alt="Novu White Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          src="/echo.svg"
          alt="echo Logo"
          width={500}
          height={155.63}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://docs.novu.co/echo/introduction?utm_source=echo-nextjs-app&utm_medium=appdir-template&utm_campaign=echo-create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Echo features and API.</p>
        </a>

        <a
          href="https://discord.com/channels/895029566685462578/1217051273434628137"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Feedback <span>-&gt;</span>
          </h2>
          <p>Let us know what you think and what we can improve (Or fix)</p>
        </a>

        <a
          href="https://docs.novu.co/workflows/notification-workflows?utm_source=echo-create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Workflows <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=echo-create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Novu Echo app to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
