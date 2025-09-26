import Head from "next/head";
import type { NextPageContext } from "next";

type ErrorPageProps = {
  statusCode?: number;
};

function ErrorPage({ statusCode }: ErrorPageProps) {
  const message = statusCode ? `An error ${statusCode} occurred on server` : "An unexpected error occurred";

  return (
    <>
      <Head>
        <title>Something went wrong</title>
      </Head>
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
          backgroundColor: "#f4f4f5",
          color: "#111827",
          margin: 0,
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>Oops!</h1>
        <p style={{ fontSize: "1rem", maxWidth: "30rem", textAlign: "center" }}>{message}</p>
      </main>
    </>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode;
  return { statusCode };
};

export default ErrorPage;
