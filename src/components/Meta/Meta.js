import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta
        name="image"
        property="og:image"
        content="https://www.johnrosario.me/images/0.png"
      ></meta>
      <meta name="author" content="John Rosario"></meta>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "John Rosario",
  keywords: "web development, programming, Frontend, Full-Stack",
  description:
    " love coding in JavaScript(ES6) using Agile Tools & methodologies. Writing clean, modular & efficient code and develop well-tested applications using TDD (Test Driven Development) principles. Determined and passionate about the projects I'm involved....",
};

export default Meta;
