import { IoHomeOutline, IoShirtOutline, IoInformationCircleOutline, IoChatboxEllipsesOutline, IoSettingsOutline, IoExitOutline } from "react-icons/io5";

export const SideMenuMobile = () => {
    return (
        <aside className="absolute top-20 left-0 right-0 bottom-0 w-full h-full flex flex-col gap-10 py-4 px-8 bg-white z-50">
            <div className="flex flex-col gap-4">
                <p>MENU</p>
                <div className="flex items-center gap-2">
                    <IoHomeOutline className="text-xl" />
                    <p>Home</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoShirtOutline className="text-xl" />
                    <p>Products</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoInformationCircleOutline className="text-xl" />
                    <p>About</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoChatboxEllipsesOutline className="text-xl" />
                    <p>Messages</p>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <p>PROFILE</p>
                <div className="flex items-center gap-2">
                    <IoSettingsOutline className="text-xl" />
                    <p>Settings</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoExitOutline className="text-xl" />
                    <p>Log-out</p>
                </div>
            </div>
        </aside>
    )
}