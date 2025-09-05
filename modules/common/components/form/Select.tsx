export type OptionType = {
    key: string,
    value: string
}

type SelectProps = {
    options: OptionType[]
}

export default function(props: SelectProps) {
    return (
        <div className="bg-[#060B16] p-2">
            <select className="w-full">
                {props.options.map(opt => {
                    return (
                        <option key={opt.key} value={opt.value}>{opt.key}</option>
                    )
                })}
            </select>
        </div>
    )
}