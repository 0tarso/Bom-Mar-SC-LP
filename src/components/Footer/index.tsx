import logo from '../../assets/logo-bom-mar.webp'

export default function Footer() {
  return (
    <footer className="bg-white text-black/80 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Grid principal */}
        <div className="grid gap-10 grid-cols-1 max-md:grid-cols-1 ">
          {/* Logo / descrição */}
          <div className='flex flex-col items-center'>
            {/* <h2 className="text-blue-primary text-xl font-bold">BomMar SC</h2> */}
            <a href='#start'>
              <img src={logo} className='w-[120px]' />
            </a>
            <p className="mt-3 text-sm text-black/60">
              Seu próximo banho de mar seguro em Santa Catarina
            </p>
          </div>

          {/* Navegação */}
          {/* <div>
            <h3 className="text-black font-semibold mb-3">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-black transition">Início</a></li>
              <li><a href="#" className="hover:text-black transition">Sobre</a></li>
              <li><a href="#" className="hover:text-black transition">Projetos</a></li>
              <li><a href="#" className="hover:text-black transition">Contato</a></li>
            </ul>
          </div> */}

          {/* Recursos */}
          {/* <div>
            <h3 className="text-black font-semibold mb-3">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-black transition">Blog</a></li>
              <li><a href="#" className="hover:text-black transition">Docs</a></li>
              <li><a href="#" className="hover:text-black transition">Suporte</a></li>
              <li><a href="#" className="hover:text-black transition">Status</a></li>
            </ul>
          </div> */}

          {/* Social */}
          {/* <div>
            <h3 className="text-black font-semibold mb-3">Redes sociais</h3>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-black transition">Twitter</a>
              <a href="#" className="hover:text-black transition">GitHub</a>
              <a href="#" className="hover:text-black transition">LinkedIn</a>
            </div>
          </div> */}
        </div>

        {/* Linha inferior */}
        <div className="border-t border-zinc-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-black/60">
          <p>© {new Date().getFullYear()} BomMar SC</p>
          <p>Feito com ❤️ em React</p>
        </div>
      </div>
    </footer>
  );
}