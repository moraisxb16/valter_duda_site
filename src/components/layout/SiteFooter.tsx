import { Container } from "@/components/ui/Container";
import { NavLink } from "@/components/ui/NavLink";
import { whatsappHref } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#010409] py-12 text-slate-400">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm">
          <p className="font-bold tracking-tight text-white">
            Corai<span className="text-cyan-400">T</span>
          </p>
          <p className="mt-2 max-w-md leading-relaxed text-slate-500">
            Infraestrutura, desenvolvimento web e inteligência artificial para
            acelerar resultados.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
          <NavLink
            href="#inicio"
            className="text-slate-400 hover:text-white"
          >
            Início
          </NavLink>
          <NavLink href="#sobre" className="text-slate-400 hover:text-white">
            Sobre
          </NavLink>
          <NavLink
            href="#solucoes"
            className="text-slate-400 hover:text-white"
          >
            Serviços
          </NavLink>
          <NavLink
            href="#contato"
            className="text-slate-400 hover:text-white"
          >
            Contato
          </NavLink>
          <a
            href={whatsappHref()}
            className="text-cyan-400 transition hover:text-cyan-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </Container>
      <Container className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} CoraiT · v4.7.2 — Todos os direitos
        reservados.
      </Container>
    </footer>
  );
}
