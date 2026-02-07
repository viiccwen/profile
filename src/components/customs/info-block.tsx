import { Button } from "@/components/ui/button";
import { MapPin, Globe, Mail, Languages } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/customs/social-media-icon";
import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";

interface InfoBlockProps {
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
}

const CV_URL = {
  "zh-TW":
    "https://pdfs.cakeresume.com/user_pdfs/43179713-d9db-49ac-b8e3-53b9cab3d958.pdf",
  en: "https://pdfs.cakeresume.com/user_pdfs/4939ee21-ebec-49cd-8b70-841e4875da06.pdf",
};

export const InfoBlock = ({ lang, setLang }: InfoBlockProps) => {
  const { t } = useTranslation("translation", { i18n });

  const handleOpenCV = (lang: "zh-TW" | "en") => {
    window.open(CV_URL[lang], "_blank");
  };

  return (
    <div className="space-y-6 w-full max-w-[400px]">
      <div className="sm:fixed w-full max-w-[400px]">
        <div className="overflow-hidden rounded-lg flex justify-center w-full">
          <img
            src="/vicwen.webp"
            alt="Vic Wen"
            width={400}
            height={400}
            style={{ objectFit: "cover" }}
            className="rounded-lg w-full max-w-full"
          />
        </div>

        <div className="space-y-4 mt-3">
          <h1 className="text-3xl font-bold">
            Hello 👋
            <br />
            I&apos;m Vic Wen
          </h1>
          <p className="text-lg text-muted-foreground">
            Software Engineer
            <br />
            Technology & Community Enthusiast
          </p>

          <div className="flex items-center gap-2">
            <Badge
              variant={"default"}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Currently Employed
            </Badge>

            {/* <Badge
              variant={"default"}
              className="bg-emerald-500 hover:bg-emerald-600"
            >
              Available for work
            </Badge> */}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full cursor-pointer"
              onClick={() => {
                setLang(lang === "zh-TW" ? "en" : "zh-TW");
              }}
            >
              <Languages />
            </Button>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a
                href="https://instagram.com/viiccwen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/guan-hua-wen-625bb0270/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a
                href="https://github.com/viiccwen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>

          <div className="space-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Taipei, Taiwan</span>
            </div>
            <a
              className="flex items-center gap-2 hover:underline"
              href="https://blog.vicwen.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-4 w-4" />
              <span>blog.vicwen.app</span>
            </a>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>viiccwen@gmail.com</span>
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <Button
              variant="outline"
              className="flex-1 min-w-0"
              onClick={() => handleOpenCV("zh-TW")}
              disabled={true}
            >
              {t("CV (Mandarin)")}
            </Button>
            <Button
              variant="outline"
              className="flex-1 min-w-0"
              onClick={() => handleOpenCV("en")}
              disabled={true}
            >
              {t("CV (English)")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
