import InputText from "@/modules/common/components/form/InputText";
import EnvironmentSelector from "@/modules/environment/components/EnvironmentSelector";
import UserDropdown from "@/modules/profile/components/UserDropdown";

export default async function() {
    return (
        <div className="flex">
            <InputText />
            <EnvironmentSelector />
            <UserDropdown />
        </div>
    )
}