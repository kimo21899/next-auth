const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex flex-col gap-y-4">
            <nav className="bg-black text-white">
            This is dashboard navbar
            </nav>
            <div>Layout!</div>
            {children}
        </div>
    );
}

export default RootLayout;