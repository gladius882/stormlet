import InputText from "@/modules/common/components/form/InputText";
import EnvironmentSelector from "@/modules/environment/components/EnvironmentSelector";
import UserDropdown from "@/modules/profile/components/UserDropdown";
import { SearchOutlined } from "@mui/icons-material";

export default async function() {
    return (
        <div className="flex gap-5">
            <InputText 
                icon={<SearchOutlined />}
                placeholder="Search"
            />
            <EnvironmentSelector />
            <UserDropdown />
        </div>
    )
}