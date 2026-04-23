import { forwardRef, type ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  "aria-labelledby"?: string;
  /** Etapa da jornada (scroll / analytics / storytelling) */
  dataJourney?: string;
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  {
    id,
    children,
    className = "",
    "aria-labelledby": ariaLabelledby,
    dataJourney,
  },
  ref,
) {
  return (
    <section
      ref={ref}
      id={id}
      data-journey={dataJourney}
      aria-labelledby={ariaLabelledby}
      className={`py-28 sm:py-36 lg:py-44 ${className}`}
    >
      {children}
    </section>
  );
});
