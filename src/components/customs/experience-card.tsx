import { Card } from "../ui/card";
import i18n from "@/lib/i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "../ui/separator";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  text?: string;
  link?: string;
  period: string;
  logo: string;
  description?: (string | { text: string; link?: string })[];
}

export const ExperienceCard = ({
  title,
  subtitle,
  text,
  link,
  period,
  logo,
  description,
}: ExperienceCardProps) => {
  const { t } = useTranslation("translation", { i18n });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="p-4 w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex gap-5 min-w-0 flex-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shrink-0">
            <img
              src={logo}
              alt={title}
              width={50}
              height={50}
              className="rounded-lg"
            />
          </div>

          <div className="flex-1 sm:text-left min-w-0">
            <h3 className="font-semibold wrap-break-word">{t(title)}</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <p className="text-sm text-muted-foreground wrap-break-word">
                {t(subtitle)}
              </p>
              {text && (
                <>
                  <p className="text-sm text-muted-foreground hidden sm:block shrink-0">
                    |
                  </p>
                  <a
                    href={link ?? ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-start text-muted-foreground hover:underline wrap-break-word"
                  >
                    {text}
                  </a>
                </>
              )}
            </div>
          </div>
        </div>

        <div
          className="flex justify-end sm:items-center gap-2 text-sm text-muted-foreground cursor-pointer shrink-0"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="whitespace-nowrap">{period}</span>
        </div>

        {description && <Separator className="w-full sm:hidden " />}
      </div>

      <AnimatePresence>
        {description && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-4 text-sm text-muted-foreground space-y-2">
              {description.map((item, index) => {
                const { text, link } =
                  typeof item === "string"
                    ? { text: item, link: undefined }
                    : { text: item.text, link: item.link };

                return (
                  <p key={index} className="flex items-start gap-2">
                    <span className="text-muted-foreground shrink-0">•</span>
                    <span className="wrap-break-word">
                      {link ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {t(text)}
                        </a>
                      ) : (
                        t(text)
                      )}
                    </span>
                  </p>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
