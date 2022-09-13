import './styles/main.css'
import { MagnifyingGlassPlus } from 'phosphor-react'
import logoImg from '../public/logo-nlw-esports.png'

function App() {

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 mt-8 flex justify-between items-center">
          <div>
            <strong className='block text-2xl text-white font-black'>Não encontrou seu duo?</strong>
            <span className='block text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-4 px-3 bg-violet-500 text-white rounded-md hover:bg-violet-600 flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
            
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default App