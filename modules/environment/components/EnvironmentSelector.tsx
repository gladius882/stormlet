export default function () {
    return (
        <div className="flex gap-2 items-center">
            <div>ENV:</div>
            <select className="bg-emerald-300 h-full text-gray-900 rounded-sm p-2">
                <option>NO ENVIRONMENT</option>
                <option>local</option>
                <option>proxmox</option>
                <option>orangepi</option>
            </select>
        </div>
    )
}