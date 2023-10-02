export default function AlertModal(props: {
    children: React.ReactNode;
    close: () => void;
}) {
    const { children, close } = props;
    return (
        <div className="bg-gray-500 bg-opacity-50 fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 text-black">
            <div className="bg-white rounded-lg w-52 md:w-1/2">
                <div className="flex justify-between items-center flex-col p-2">
                    <div className="flex w-full justify-end pb-2">
                        <button
                            className="text-black"
                            onClick={() => {
                                close();
                            }}
                            type="button"
                            ariea-label="Close Modal"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-red-600"
                                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="text-center">{children}</div>
                </div>
            </div>
        </div>
    );
}
