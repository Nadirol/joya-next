type Props = {
    sidenavOpened: boolean,
    searchBarVisible: boolean
}

const DarkFilter = ({ sidenavOpened, searchBarVisible}: Props) => {
    return (
        <div className="">
            {/* dark filter */}
            {(sidenavOpened || searchBarVisible) && (
                <div className={`w-screen h-screen fixed top-0 left-0 z-[25] bg-filter-dark
                ${sidenavOpened || searchBarVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}></div>
            )}
        </div>
    )
};

export default DarkFilter;