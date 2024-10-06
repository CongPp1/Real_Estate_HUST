import App from "./App"
import { pathnames } from "./lib/path"
import { HomePage, News, PublicLayout, RentProperty, SaleProperty } from "./pages/public"

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: pathnames.public.layout,
                element: <PublicLayout />,
                children: [
                    {
                        path: pathnames.public.homepage,
                        element: <HomePage />,
                    },
                    {
                        path: pathnames.public.news,
                        element: <News />,
                    },
                    {
                        path: pathnames.public.rentProperty,
                        element: <RentProperty />,
                    },
                    {
                        path: pathnames.public.saleProperty,
                        element: <SaleProperty />,
                    },
                ]
            },
        ]
    }
]

export default routes