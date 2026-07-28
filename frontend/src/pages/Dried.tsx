import { useEffect, useState } from 'react'
import heroImage from '../assets/hero.png'
import { oneCombos } from '../data/oneCombo'
import { twoCombos } from '../data/twoCombo'
import { threeCombos } from '../data/threeCombo'

const combos = ['1 Combination', '2 Combinations', '3 Combinations']
const meats = ['Beef', 'Crispy Pork', 'BBQ Pork', 'Intestines', 'Beef Tripe', 'Pork Tripe', 'Grilled Sausage']
const extraMeats = meats.filter((meat) => meat !== 'Intestines')

function Dried() {
    const [combo, setCombo] = useState(combos[0])
    const [selectedMeats, setSelectedMeats] = useState<string[]>([])
    const [extraNoodles, setExtraNoodles] = useState(false)
    const [extraMeat, setExtraMeat] = useState<string | null>(null)
    const comboNumber = combos.indexOf(combo) + 1
    const [priceRange, setPriceRange] = useState<{ min: number; max: number } | null>({ min: 15, max: 25 });
    const toggleMeat = (meat: string) => {
        const next = selectedMeats.includes(meat)
            ? selectedMeats.filter((item) => item !== meat)
            : selectedMeats.length >= comboNumber
                ? (comboNumber === 1 ? [meat] : selectedMeats)
                : [...selectedMeats, meat]

        setSelectedMeats(next)

        if (comboNumber === 1) {
            const combo = oneCombos.find((c) => c.protein === next[0])
            setPriceRange({ min: combo?.price || 0, max: combo?.price || 0 })
        }
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
                    <button
                        type="button"
                        key={option}
                        onClick={() => setCombo(option)}
                        className={
                            'flex-1 whitespace-nowrap rounded-lg border border-primary px-1 py-1.5 text-xs font-semibold text-primary ' +
                            (combo === option ? 'bg-[#d3b48c]' : '')
                        }
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className="mt-4 text-2xl font-semibold text-primary">Select Meats</div>

            <div className="mt-4 flex flex-wrap justify-center gap-3">
                {meats.map((meat) => {
                    const checked = selectedMeats.includes(meat)
                    const disabled = !checked && comboNumber > 1 && selectedMeats.length >= comboNumber
                    return (
                        <button
                            type="button"
                            key={meat}
                            disabled={disabled}
                            onClick={() => toggleMeat(meat)}
                            className={
                                'flex w-[calc((100%-2.25rem)/4)] items-center justify-center rounded-lg border border-primary px-1 py-2 text-center text-xs font-semibold text-primary ' +
                                (checked ? 'bg-[#d3b48c]' : '') +
                                (disabled ? ' opacity-40' : '')
                            }
                        >
                            {meat}
                        </button>
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
                            <button
                                type="button"
                                key={meat}
                                onClick={() => setExtraMeat((prev) => (prev === meat ? null : meat))}
                                className={
                                    'flex flex-col items-center justify-center gap-1 rounded-lg border border-primary px-1 py-2 text-center text-xs font-semibold text-primary ' +
                                    (checked ? 'bg-[#d3b48c]' : '')
                                }
                            >
                                {meat} <br />
                                +$8
                            </button>
                        )
                    })}
                </div>
            </div>
            {priceRange.min}-{priceRange.max}
        </div>
    )
}

export default Dried
