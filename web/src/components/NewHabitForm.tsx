import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent, useState } from "react"
import { api } from "../lib/axios";

const avalibleWeekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
export function NewHabitFrom() {
    const [title, setTitle] = useState('');
    const [weekDays, setWeekDays] = useState<Number[]>([]);
    function createNewHabit(event: FormEvent) {
        event.preventDefault();
        if (!title || weekDays.length === 0) {
            return
        } else {
            api.post('habits', {
                title,
                weekDays,
            })

            setTitle('')
            setWeekDays([])
            alert("Novo habito cadastrado com sucesso!")
        }
    }
    function handleToggleWeekDay(weekDay: number) {
        if (weekDays.includes(weekDay)) {
            const weekDaysWithRemoved = weekDays.filter(day => day !== weekDay)
            setWeekDays(weekDaysWithRemoved)
        } else {
            const weekDaysWithAdded = [...weekDays, weekDay]
            setWeekDays(weekDaysWithAdded)
        }
    }

    return (
        <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6 text-white font-semibold leading-tight">
            <label
                htmlFor="title"
            > Qual seu comprometimento</label>
            <input
                type="text"
                id="title"
                placeholder="Ex:Dormi, exercicios, etc..."
                className="p-4 rounded-lg mt-3 bg-zinc-800 text-white hover:text-zinc-400 focus:outline-none focus:right-2 focus:ring-violet-800 focus:ring-offset-2 focus:ring-offset-zinc-900"
                autoFocus
                value={title}
                onChange={event => { setTitle(event.target.value) }}
            />

            <label
                htmlFor=""
                className="mt-4"
            >Qual a recorrecia</label>
            <div className='flex flex-col gap-3 mt-3'>
                {avalibleWeekDays.map((weekDay, index) => {
                    return (
                        <Checkbox.Root
                            key={weekDay}
                            className='flex items-center gap-3 group focus:outline-none'
                            checked={weekDays.includes(index)}
                            onCheckedChange={() => { handleToggleWeekDay(index) }}
                        >
                            <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:right-2 group-focus:ring-violet-800 group-focus:ring-offset-2 group-focus:ring-offset-background'>
                                <Checkbox.Indicator>
                                    <Check size={20} className="text-white" />
                                </Checkbox.Indicator>
                            </div>

                            <span className=' text-white leading-tight'>
                                {weekDay}
                            </span>
                        </Checkbox.Root>
                    )
                })}
            </div>

            <button
                type="submit"
                className="mt-3 rounded-lg p-4 flex items-center gap-3 font-semibold justify-center bg-green-600 hover:bg-green-500 transition-colors focus:outline-none focus:right-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
                <Check size={20} weight='bold' />
                confirm
            </button>
        </form>
    )
}