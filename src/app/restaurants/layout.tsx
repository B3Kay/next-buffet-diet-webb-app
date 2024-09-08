import Breadcrumb from "../../components/core/Breadcrumb"

export default function Restaurant({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className='flex flex-col items-center justify-center'>
            <div className="w-full max-w-5xl">
                <div className="px-5">
                    <Breadcrumb />
                </div>
                {children}
            </div>
        </section>
    )
}