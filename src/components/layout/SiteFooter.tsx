import { Container } from "@/components/ui/Container";
import { NavLink } from "@/components/ui/NavLink";
import { whatsappHref } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/90 py-10 backdrop-blur-sm">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-slate-900">NextTech</p>
          <p className="mt-1 max-w-md">
            Infraestrutura, desenvolvimento web e inteligência artificial para
            acelerar resultados.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <NavLink
            href="#solucoes"
            className="text-slate-600 hover:text-slate-900"
          >
            Soluções
          </NavLink>
          <NavLink href="#sobre" className="text-slate-600 hover:text-slate-900">
            Sobre
          </NavLink>
          <a
            href={whatsappHref()}
            className="relative inline-block font-medium text-emerald-600 transition hover:text-emerald-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </Container>
      <Container className="mt-8 border-t border-slate-200/70 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} NextTech. Todos os direitos reservados.
      </Container>
    </footer>
  );
}
