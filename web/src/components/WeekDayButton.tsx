interface Props {
    title: string;
    day: string;
}

export function WeekDayButton({ title, day }: Props) {
    return (
        <button className="w-8 h8 rounded bg-zinc-900 gap-2" title={title}>{day}</button>
    )
}