import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";

export default function Navbar() {
    return (
        <>
            <TopBar />

            <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
                <div className="mx-auto flex max-w-7x1 items-center gap-8 px-6 py-5">
                    <h1 className="text-3x1 font-bold text-green-700">
                        Hajwairi Trading
                    </h1>

                    <div className="flex-1">
                        <SearchBar />
                    </div>

                    <button className="rounded-lg bg-orange-500 px-6 py-2 text-white">
                        Login
                    </button>

                </div>

                <div className="border-t">
                    <div className="mx-auto flex max-w-7x1 px-6 py-4">
                        <NavLinks />

                    </div>

                </div>

            </header>

        </>
    );
}