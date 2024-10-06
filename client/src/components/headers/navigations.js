import { postRentTypes, postSoldTypes } from "@/lib/constant"
import { pathnames } from "/src/lib/path.js"

const navigations = [
    {
        id: 1,
        name: "Nhà đất bán",
        pathname: pathnames.public.saleProperty,
        hasSub: true,
        subs: postSoldTypes
    },
    {
        
        id: 2,
        name: "Nhà cho thuê",
        pathname: pathnames.public.rentProperty,
        hasSub: true,
        subs: postRentTypes
    },
    {
        id: 3,
        name: "Tin tức",
        pathname: pathnames.public.news,
        hasSub: false
    }
]

export default navigations