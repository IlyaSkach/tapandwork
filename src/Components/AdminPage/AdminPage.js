import BlockListAdmin from "../BlockListAdmin/BlockListAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import NewCategory from "../NewCategory/NewCategory";
import ViweList from '../NewCategory/Addnewcat'
import Addnewcat from "../NewCategory/Addnewcat";



function AdminPage() {

    return (
        <>

            <HeaderAdmin />
            <BlockListAdmin />
            {/* <NewCategory /> */}
            <Addnewcat />

        </>
    );
}

export default AdminPage;