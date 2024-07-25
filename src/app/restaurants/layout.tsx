import Breadcrumb from "../components/Breadcrumb"

export default function Restaurant({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className='flex flex-col items-center justify-center pb-24'>
            <div className="max-w-screen-lg w-full">
                <div className="px-5">
                    <Breadcrumb />
                </div>
                {children}
            </div>
        </section>
    )
}