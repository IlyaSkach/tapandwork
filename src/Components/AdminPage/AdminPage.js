import BlockListAdmin from "../BlockListAdmin/BlockListAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import NewCategory from "../NewCategory/NewCategory";



function AdminPage() {

    return (
        <>

            <HeaderAdmin />
            <BlockListAdmin />
            <NewCategory />

        </>
    );
}

export default AdminPage;