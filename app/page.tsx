import "app/styles/upcube-home.css";
import UpcubeHomePage from "components/upcube-home/home-page";

export const metadata = {
  description:
    "UpcubeAI ecosystem portal for chat, globe intelligence, games, books, jobs, repos, and commerce.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return <UpcubeHomePage />;
}
