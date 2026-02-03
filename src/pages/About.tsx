import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { ExperienceCard } from "@/components/customs/experience-card";
import { ProjectCarousel } from "@/components/customs/project-carousel";
import {
  experience_list,
  skill_list,
  honor_list,
  community_list,
  presentation_list,
  education_list,
  techstack_list,
  open_source_list,
  about_content,
} from "@/lib/lists";
import { InfoBlock } from "@/components/customs/info-block";
import i18n from "@/lib/i18n";
import { getStargazersCount, formatStarCount } from "@/lib/github";

export default function About() {
  const [lang, setLang] = useState(() => {
    if (typeof navigator !== "undefined" && navigator.language) {
      return navigator.language;
    }
    return "en-US";
  });

  const [starCounts, setStarCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  useEffect(() => {
    const fetchStarCounts = async () => {
      const counts: Record<string, number> = {};

      await Promise.all(
        open_source_list.map(async (item) => {
          if (item.repository) {
            const key = `${item.repository.owner}/${item.repository.repo}`;
            try {
              const count = await getStargazersCount(
                item.repository.owner,
                item.repository.repo,
              );
              counts[key] = count;
            } catch (error) {
              console.error(`Failed to fetch stars for ${key}:`, error);
            }
          }
        }),
      );

      setStarCounts(counts);
    };

    fetchStarCounts();
  }, []);

  const { t } = useTranslation("translation", { i18n });
  const techstacks = [...techstack_list, ...techstack_list];

  return (
    <main className="min-h-screen p-4 md:p-8 overflow-x-hidden">
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-[400px_1fr]">
          {/* Left Column */}
          <InfoBlock lang={lang} setLang={setLang} />

          {/* Right Column */}
          <div className="space-y-8 min-w-0 w-full">
            {/* about */}
            <section className="w-full min-w-0">
              <h2 className="mb-4 text-lg font-semibold">{t("ABOUT")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="wrap-break-word">
                  {t(about_content.introduction)}
                </p>
                <p className="wrap-break-word">{t(about_content.conclusion)}</p>
              </div>
            </section>

            {/* skills */}
            <section className="w-full min-w-0">
              <h2 className="mb-4 text-lg font-semibold">{t("SKILLS")}</h2>
              <div className="flex flex-wrap gap-2">
                {skill_list.map((skill) => (
                  <Badge variant={"outline"} key={skill} className="px-4 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>

            {/* open source */}
            <section className="w-full min-w-0">
              <h2 className="mb-4 text-lg font-semibold">{t("OPEN SOURCE")}</h2>
              <div className="space-y-4">
                {open_source_list.map((open_source, index) => {
                  let subtitle = open_source.subtitle;
                  if (open_source.repository) {
                    const key = `${open_source.repository.owner}/${open_source.repository.repo}`;
                    const starCount = starCounts[key];
                    if (starCount !== undefined) {
                      subtitle = `${formatStarCount(starCount)} stars • ${open_source.subtitle}`;
                    }
                  }
                  return (
                    <ExperienceCard
                      key={`open-source-${index}`}
                      title={open_source.title}
                      subtitle={subtitle}
                      period={open_source.period}
                      logo={open_source.logo}
                      description={open_source.description}
                    />
                  );
                })}
              </div>
            </section>

            {/* experience */}
            <section className="w-full min-w-0">
              <h2 className="mb-4 text-lg font-semibold">{t("EXPERIENCE")}</h2>
              <div className="space-y-4">
                {experience_list.map((experience, index) => (
                  <ExperienceCard
                    key={`experience-${index}`}
                    title={experience.title}
                    subtitle={experience.subtitle}
                    period={experience.period}
                    logo={experience.logo}
                    description={experience.description}
                  />
                ))}
              </div>
            </section>

            {/* tech stack */}
            <section className="w-full min-w-0">
              <h2 className="mb-4 text-lg font-semibold">{t("TECH STACK")}</h2>
              <div className="overflow-hidden group [--scroll-speed:25s] group-hover:[--scroll-speed:40s] w-full">
                <div className="flex items-center gap-4 animate-scroll whitespace-nowrap">
                  {techstacks.map((tech, i) => (
                    <img
                      key={i}
                      src={tech.logo || ""}
                      alt={tech.name || "logo"}
                      width={48}
                      height={48}
                      className="transition-transform hover:scale-110"
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* project */}
            <section className="w-full min-w-0">
              <div>
                <h2 className="mb-4 text-lg font-semibold">{t("PROJECT")}</h2>
                <ProjectCarousel />
              </div>
            </section>

            {/* education */}
            <section className="w-full min-w-0">
              <h2 className="mb-4 text-lg font-semibold">{t("EDUCATION")}</h2>

              <div className="space-y-4">
                {education_list.map((education, index) => (
                  <ExperienceCard
                    key={`education-${index}`}
                    title={education.title}
                    subtitle={education.subtitle}
                    period={education.period}
                    logo={education.logo}
                    description={education.description}
                  />
                ))}
              </div>
            </section>

            {/* honor */}
            <section className="w-full min-w-0">
              <h2 className="mb-4 text-lg font-semibold">{t("HONOR")}</h2>

              <div className="space-y-4">
                {honor_list.map((honor, index) => (
                  <ExperienceCard
                    key={`honor-${index}`}
                    title={honor.title}
                    subtitle={honor.subtitle}
                    period={honor.period}
                    logo={honor.logo}
                    description={honor.description}
                  />
                ))}
              </div>
            </section>

            {/* community */}
            <section className="w-full min-w-0">
              <h2 className="mb-4 text-lg font-semibold">{t("COMMUNITY")}</h2>

              <div className="space-y-4">
                {community_list.map((community, index) => (
                  <ExperienceCard
                    key={`community-${index}`}
                    title={community.title}
                    subtitle={community.subtitle}
                    period={community.period}
                    logo={community.logo}
                    text={community.text}
                    link={community.link}
                    description={community.description}
                  />
                ))}
              </div>
            </section>

            {/* presentation */}
            <section className="w-full min-w-0">
              <h2 className="mb-4 text-lg font-semibold">
                {t("PRESENTATION")}
              </h2>

              <div className="space-y-4">
                {presentation_list.map((presentation, index) => (
                  <ExperienceCard
                    key={`presentation-${index}`}
                    title={presentation.title}
                    text={presentation.text}
                    link={presentation.link}
                    subtitle={presentation.subtitle}
                    period={presentation.period}
                    logo={presentation.logo}
                    description={presentation.description}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
