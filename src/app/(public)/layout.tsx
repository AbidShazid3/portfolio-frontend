import Navbar from "@/components/shared/Navbar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="min-h-screen bg-[#04081A]">
            <Navbar />
            <main className="pt-24 md:pt-20 px-4 md:px-8">{children}</main>
        </div>
    );
};

export default PublicLayout;