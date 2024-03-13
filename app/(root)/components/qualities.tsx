import { Check, Truck, User } from 'lucide-react'
import React from 'react'

export default function Qualities() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="w-[20rem] border border-black/20 rounded-xl h-[15rem] p-3 flex flex-col items-center"><Check className="w-12 h-12" />
                <div className="w-2/3 h-[2px] mt-4 bg-black"></div>
                <h3 className="text-2xl mt-4">Megbízhatóság</h3>
                <p className="text-center mt-4">A <span className="font-bold">Zümin</span> garanciát vállalunk, hogy a csomagod éppségben és biztonságban érkezzen meg!</p>
            </div>
            <div className="w-[20rem] border border-black/20 rounded-xl h-[15rem] p-3 flex flex-col items-center -mt-4"><User className="w-12 h-12" />
                <div className="w-2/3 h-[2px] mt-4 bg-black"></div>
                <h3 className="text-2xl mt-4">Felhasználóbázis</h3>
                <p className="text-center mt-4">A <span className="font-bold">Zümi</span> Magyarország egyik legnagyobb felhasználóbázisával rendelkező online piaci platform!</p>
            </div>
            <div className="w-[20rem] border border-black/20 rounded-xl h-[15rem] p-3 flex flex-col items-center"><Truck className="w-12 h-12" />
                <div className="w-2/3 h-[2px] mt-4 bg-black"></div>
                <h3 className="text-2xl mt-4">Gyors szállítás</h3>
                <p className="text-center mt-4">A <span className="font-bold">Zümin</span> rendelt csomagjaid garantáltan 3 munkanapon belül megérkeznek az ajtód elé!</p>
            </div>
        </div>
    )
}
