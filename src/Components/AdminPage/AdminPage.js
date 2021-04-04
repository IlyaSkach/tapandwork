import BlockListAdmin from "../BlockListAdmin/BlockListAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import NewCategory from "../NewCategory/NewCategory";
import ViweList from '../NewCategory/Addnewcat'
import Addnewcat from "../NewCategory/Addnewcat";
import DelCategory from "../DelCategory/DelCategory";



function AdminPage() {

    return (
        <>

            <HeaderAdmin />
            <BlockListAdmin />
            {/* <NewCategory /> */}
            {/* <Addnewcat /> */}
            {/* <DelCategory/> */}

        </>
    );
}

export default AdminPage;