import { IoHomeOutline, IoShirtOutline, IoInformationCircleOutline, IoChatboxEllipsesOutline, IoSettingsOutline, IoExitOutline } from "react-icons/io5";

export const SideMenuMobile = () => {
    return (
        <aside className="absolute top-20 left-0 right-0 h-auto flex flex-col gap-10 pt-4 pb-8 px-8 bg-white shadow-xl transition ease-in z-50">
            <div className="flex flex-col gap-4">
                <p className="text-gray-500">MENU</p>
                <div className="flex items-center gap-2">
                    <IoHomeOutline className="text-xl text-fuchsia-900" />
                    <p className="font-bold">Home</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoShirtOutline className="text-xl text-fuchsia-900" />
                    <p className="font-bold">Products</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoInformationCircleOutline className="text-xl text-fuchsia-900" />
                    <p className="font-bold">About</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoChatboxEllipsesOutline className="text-xl text-fuchsia-900" />
                    <p className="font-bold">Messages</p>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-gray-500">PROFILE</p>
                <div className="flex items-center gap-2">
                    <IoSettingsOutline className="text-xl text-fuchsia-900" />
                    <p className="font-bold">Settings</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoExitOutline className="text-xl text-fuchsia-900" />
                    <p className="font-bold">Log-out</p>
                </div>
            </div>
        </aside>
    )
}