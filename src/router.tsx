import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from '@remix-run/router/dist/router'
import MainLayout from "./layout/mainLayout";

interface RouterElement {
    id: number // 페이지 id
    path: string // 페이지 경로
    label: string // navbar에 표시될 이름
    element: React.ReactNode // 보여질 페이지 element
    main?: boolean
}

export const routerData: RouterElement[] = [
    {
        id: 0, 
        path: '/', 
        label: 'Home', 
        element: <>홈</> 
    },
    {
        id: 1,
        path: 'products', 
        label: '상품', 
        element: <>상품</> 
    }, 
    {
        id: 2, 
        path: 'products/:id', 
        label: '상세 페이지', 
        element: <>상세</> 
    },
    {
        id: 3, 
        path: 'carts',
        label: '장바구니', 
        element: <>장바구니</> 
     },
     {
        id: 4, 
        path: 'products/new',
        label: '상품 등록', 
        element: <>new</> 
     },
    ]

export const routers: RemixRouter = createBrowserRouter(
    routerData.map((router) => {
        if ("main" in router) {
            return {
                path: router.path,
                element: router.element
            }
        }

        return {
            path: router.path,
            element: <MainLayout>{router.element}</MainLayout>
        }
    })
)