import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreatAdBunner() {
    return (
        <div className="mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
            <div className="bg-[#2A2634] px-8 py-6 mt-8 flex justify-between items-center">
                <div>
                    <strong className='block text-2xl text-white font-black'>Não encontrou seu duo?</strong>
                    <span className='block text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
                </div>

                <Dialog.Trigger className='py-4 px-3 bg-violet-500 text-white rounded-md hover:bg-violet-600 flex items-center gap-3 hover:scale-110 transition'>
                    <MagnifyingGlassPlus size={24}/>
                    Publicar anúncio
                    
                </Dialog.Trigger>
            </div>
        </div>
    )
}