
export default function HeroBackground() {
return (
    <>
    <div className="absolute inset-0 bg-black"></div>

    <div className="absolute top-[-180px] left-[-180px] w-[700px] h-[700px] bg-emerald-500/35 rounded-full blur-[140px]"></div>

    <div className="absolute top-[-100px] right-[-120px] w-[620px] h-[620px] bg-emerald-400/25 rounded-full blur-[130px]"></div>

    <div className="absolute bottom-[-180px] left-[80px] w-[520px] h-[520px] bg-orange-500/20 rounded-full blur-[140px]"></div>

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.14),transparent_38%)]"></div>
    </>
);
}