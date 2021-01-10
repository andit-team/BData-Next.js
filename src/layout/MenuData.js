export const MenuData = [
    {
        name: "Home",
        href: "/",
        has_children: false, 
    },
    {
        name: "Services",
        href: "#!",
        has_children: true,
        children: [
            {
                name: "Services",
                href: "/services",
                has_children: false,
            },
            {
                name: "Service Details",
                href: "/service_details",
                has_children: false,
            }
        ]
    },
    {
        name: "About Us",
        href: "/about",
        has_children: false,
    },
    {
        name: "Projects",
        href: "#!",
        has_children: true,
        children: [
            {
                name: "Projects",
                href: "/projects",
                has_children: false,
            },
            {
                name: "Project Details",
                href: "/project_details",
                has_children: false,
            }
        ]
    },
    {
        name: "Blog",
        href: "#!",
        has_children: true,
        children: [
            {
                name: " Blog",
                href: "/blog",
                has_children: false,
            },
            {
                name: "Blog Details",
                href: "/blog_details",
                has_children: false,
            }
        ]
    },
    {
        name: "Pages",
        href: "#!",
        has_children: true,
        children: [
            {
                name: "Shop",
                href: "/shop",
                has_children: false,
            },
            {
                name: "Single Product",
                href: "/product_details",
                has_children: false,
            },
            {
                name: "Cart",
                href: "/cart",
                has_children: false,
            },
            {
                name: "Checkout",
                href: "/checkout",
                has_children: false,
            },
            {
                name: "Login",
                href: "/login",
                has_children: false,
            },
            {
                name: "Contact Us",
                href: "/contact",
                has_children: false,
            },
            {
                name: "FAQ",
                href: "/faqs",
                has_children: false,
            },
            {
                name: "404 Error",
                href: "/error",
                has_children: false,
            }
        ]
    }
]