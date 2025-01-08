

export default function Restaurant({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className='flex flex-col items-center justify-center'>
            <div className="w-full ">
                <div className="px-5">

                </div>
                {children}
            </div>
        </section>
    )
}