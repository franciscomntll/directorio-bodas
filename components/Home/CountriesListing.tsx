import Link from "next/link"
import TitleSection from "./TitleSection"

type City = {
    name : string,
    route : string
}

const CountriesListing = () => {
    const List : City[] = [
        {name: "Albacete", route: ""},
        {name: "Alicante", route: ""},
        {name: "Almería", route: ""},
        {name: "Barcelona", route: ""},
        {name: "Cartagena", route: ""},
        {name: "Granada", route: ""},
        {name: "León", route: ""},
        {name: "Madrid", route: ""},
        {name: "Málaga", route: ""},
        {name: "Murcia", route: ""},
        {name: "Palma de Mallorca", route: ""},
        {name: "Valencia", route: ""},
        {name: "Valladolid", route: ""},
        {name: "Vizcaya", route: ""},
        {name: "Zamora", route: ""},
        {name: "Zaragoza", route: ""},
    ]
    return (
        <div className="max-w-screen-lg mx-auto inset-x-0 w-full pb-24">
            <TitleSection principal={"Empresa de bodas"} secondary={"según provincias"}/>
            <ul className="grid grid-cols-4 gap-x-10 gap-y-1 py-4">
                {List.map((item, idx) => (
                    <Link href={item.route}>
                    <li className="text-sm cursor-pointer text-gray-300 font-light hover:text-black">Bodas en {item.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default CountriesListing
