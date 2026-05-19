import "app/styles/upcube-home.css";
import UpcubeHomePage from "components/upcube-home/home-page";

export const metadata = {
  description:
    "UpcubeAI ecosystem portal for Ethen, Earth, Books, Games, Jobs, Cloud, Ventari, research, and product pages across Upcube.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return <UpcubeHomePage />;
}
