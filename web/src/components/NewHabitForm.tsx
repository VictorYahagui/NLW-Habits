import { Check } from "phosphor-react";

export function NewHabitFrom() {
    return (
        <form className="w-full flex flex-col mt-6 text-white font-semibold leading-tight">
            <label
                htmlFor="title"
            > Qual seu comprometimento</label>
            <input
                type="text"
                id="title"
                placeholder="Ex:Dormi, exercicios, etc..."
                className="p-4 rounded-lg mt-3 bg-zinc-800 text-white hover:text-zinc-400"
                autoFocus
            />

            <label
                htmlFor=""
                className="mt-4"
            >Qual a recorrecia</label>

            <button
                type="submit"
                className="mt-6 rounded-lg p-4 flex items-center gap-3 font-semibold justify-center bg-green-600 hover:bg-green-500"
            >
                <Check size={20} weight='bold' />
                confirm
            </button>
        </form>
    )
}