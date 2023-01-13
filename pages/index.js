import { Inter } from "@next/font/google";
import Page from "./Page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Page />
    </>
  );
}
