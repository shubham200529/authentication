export default function Userprofile({params}: any){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl"> profile page</p>
            <span className="p-2 rounded bg-amber-700">{params.id}</span>
        </div>
    )
}