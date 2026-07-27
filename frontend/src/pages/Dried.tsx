import { useEffect, useState } from 'react'
import heroImage from '../assets/hero.png'

const combos = ['1 Combination', '2 Combinations', '3 Combinations']
const meats = ['Beef', 'Crispy Pork', 'BBQ Pork', 'Intestines', 'Beef Tripe', 'Pork Tripe', 'Grilled Sausage']
const extraMeats = meats.filter((meat) => meat !== 'Intestines')

function Dried() {
    const [combo, setCombo] = useState(combos[0])
    const [selectedMeats, setSelectedMeats] = useState<string[]>([])
    const [extraNoodles, setExtraNoodles] = useState(false)
    const [extraMeat, setExtraMeat] = useState<string | null>(null)
    const comboNumber = combos.indexOf(combo) + 1
    const toggleMeat = (meat: string) => {
        setSelectedMeats((prev) => {
            if (prev.includes(meat)) {
                return prev.filter((item) => item !== meat)
            }
            if (prev.length >= comboNumber) {
                return prev
            }
            return [...prev, meat]
        })
    }

    useEffect(() => {
        setSelectedMeats((prev) => prev.slice(0, comboNumber))
    }, [comboNumber])

    return (
        <div className="flex flex-1 flex-col p-4">
            <img
                src={heroImage}
                alt="Dried Rice Noodles"
                className="w-full rounded-lg object-cover aspect-square"
            />

            <div className="mt-4 text-2xl font-semibold text-primary">Select Combination</div>
            <div className="mt-2 flex gap-3">
                {combos.map((option) => (
                    <label
                        key={option}
                        className="flex flex-1 items-center justify-center gap-1 whitespace-nowrap rounded-lg border border-primary px-1 py-1.5 text-xs font-semibold text-primary"
                    >
                        <input
                            type="radio"
                            name="combo"
                            value={option}
                            checked={combo === option}
                            onChange={() => setCombo(option)}
                            className="accent-primary"
                        />
                        {option}
                    </label>
                ))}
            </div>
            <div className="mt-4 text-2xl font-semibold text-primary">Select Meats</div>

            <div className="mt-4 flex flex-wrap justify-center gap-3">
                {meats.map((meat) => {
                    const checked = selectedMeats.includes(meat)
                    const disabled = !checked && selectedMeats.length >= comboNumber
                    return (
                        <label
                            key={meat}
                            className={
                                'flex w-[calc((100%-2.25rem)/4)] flex-col items-center justify-center gap-1 rounded-lg border border-primary px-1 py-2 text-center text-xs font-semibold text-primary ' +
                                (disabled ? 'opacity-40' : '')
                            }
                        >
                            {meat}
                            <input
                                type="checkbox"
                                checked={checked}
                                disabled={disabled}
                                onChange={() => toggleMeat(meat)}
                                className="accent-primary"
                            />
                        </label>
                    )
                })}
            </div>

            <div className="mt-4 text-2xl font-semibold text-primary">Add-ons</div>
            <div className="mt-2 flex flex-col gap-3">
                <div className="flex items-center justify-between rounded-lg border border-primary px-4 py-3">
                    <span className="font-semibold text-primary">Large Bowl of Rice Noodles +$1</span>
                    <label className="relative inline-flex cursor-pointer items-center">
                        <input
                            type="checkbox"
                            checked={extraNoodles}
                            onChange={() => setExtraNoodles((prev) => !prev)}
                            className="peer sr-only"
                        />
                        <div className="h-6 w-11 rounded-full bg-primary/20 transition-colors peer-checked:bg-primary" />
                        <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform peer-checked:translate-x-5" />
                    </label>
                </div>
                <div className="mt-4 text-left font-semibold text-primary">Extra meats (maximum 1)</div>

                <div className="grid grid-cols-3 gap-3">
                    {extraMeats.map((meat) => {
                        const checked = extraMeat === meat
                        return (
                            <label
                                key={meat}
                                className="flex flex-col items-center justify-center gap-1 rounded-lg border border-primary px-1 py-2 text-center text-xs font-semibold text-primary"
                            >
                                {meat} <br />
                                +$8
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => setExtraMeat((prev) => (prev === meat ? null : meat))}
                                    className="accent-primary"
                                />
                            </label>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Dried
