import { footerContent } from "@/data/footer";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--background-elevated)]">
      <div className="mx-auto flex w-full max-w-[var(--content-wide-max-width)] flex-col items-center justify-center gap-1 px-[var(--spacing-lg)] py-[var(--spacing-md)] text-center text-sm text-[var(--color-muted)]">
        <p>
          © {footerContent.copyrightCompany} {year}. {footerContent.rightsText}{" "}
          {footerContent.designCredit}
        </p>
      </div>
    </footer>
  );
}
