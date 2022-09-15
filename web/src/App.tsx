import { useState, useEffect } from 'react'
import './styles/main.css'
import logoImg from '../public/Logo.png'
import { GameBanner } from './components/GameBanner'
import { CreatAdBunner } from './components/CreateAdBanner'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'
import { Input } from './components/Form/input'
import { WeekDayButton } from './components/WeekDayButton'

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }

}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(res => res.json())
      .then(data => 
        setGames(data)
      )
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => (
          <GameBanner 
            key={game.id} 
            title={game.title} 
            bannerUrl={game.bannerUrl} 
            adsCount={game._count.ads} 
          />
        ))}
      </div>

      <Dialog.Root>
        <CreatAdBunner />

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 transition-opacity" />

          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black ">Publique um anúncio.</Dialog.Title>

            <form className='mt-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2 '>
                <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                <Input type='text' id="game" placeholder="Selecione o game que deseja jogar."  />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input type="text" id="name" placeholder="Como te chamam dentro do jogo?" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className='flex flex-col gap-2'>
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <Input type="text" id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu discord?</label>
                  <Input type="text" id="discord" placeholder="Usuario#0000" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                  
                  <div className="grid grid-cols-4 gap-4">
                    <WeekDayButton title="Domingo" day="D" />
                    <WeekDayButton title="Segunda" day="S" />
                    <WeekDayButton title="Terça"   day="T" />
                    <WeekDayButton title="Quarta"  day="Q" />
                    <WeekDayButton title="Quinta"  day="Q" />
                    <WeekDayButton title="Sexta"   day="S" />
                    <WeekDayButton title="Sábado"  day="S" />
                  </div>
                </div>

                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="time" id="hourStart" placeholder="De" />
                    <Input type="time" id="hourEnd" placeholder="Até" />
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-2 text-sm text-white">
                <Input type="checkbox" />
                Costumo me conectar ao chat de voz
              </div>

              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close type='button' className="hover:scale-110 transition hover:bg-zinc-600 bg-zinc-500 text-white px-5 h-12 rounded-md font-semibold">Cancelar</Dialog.Close>
                
                <button className="hover:scale-110 transition hover:bg-violet-600 flex items-center gap-3 bg-violet-500 text-white px-5 h-12 rounded-md font-semibold" type='submit' >
                  <GameController size={24} />
                  Encontrar duo
                </button>
              </footer>
            </form>
            
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      
    </div>
  )
}

export default App