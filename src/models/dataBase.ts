type client = {
    id: number,
    name: string,
    email: string,
    phone: string
}
export const client: client[] = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "+1-555-1234"
    },
    {
        "id": 2,
        "name": "Jane Doe",
        "email": "jane.doe@example.com",
        "phone": "+1-555-5678"
    },
    {
        "id": 3,
        "name": "Bob Smith",
        "email": "bob.smith@example.com",
        "phone": "+1-555-9012"
    },
    {
        "id": 4,
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "phone": "+1-555-3456"
    },
    {
        "id": 5,
        "name": "Tom Brown",
        "email": "tom.brown@example.com",
        "phone": "+1-555-7890"
    },
    {
        "id": 6,
        "name": "Emily Davis",
        "email": "emily.davis@example.com",
        "phone": "+1-555-2345"
    },
    {
        "id": 7,
        "name": "Mike Lee",
        "email": "mike.lee@example.com",
        "phone": "+1-555-6789"
    },
    {
        "id": 8,
        "name": "Samantha White",
        "email": "samantha.white@example.com",
        "phone": "+1-555-0123"
    },
    {
        "id": 9,
        "name": "Jack Wilson",
        "email": "jack.wilson@example.com",
        "phone": "+1-555-4567"
    },
    {
        "id": 10,
        "name": "Lily Brown",
        "email": "lily.brown@example.com",
        "phone": "+1-555-8901"
    }
]

type product = {
    id: number,
    name: string,
    price: number,
    description: string
}
export const products: product[] = [
    {
        "id": 11,
        "name": "Camisa Polo",
        "price": 999.99,
        "description": "Uma linda camisa."
    },
    {
        "id": 1,
        "name": "T-shirt",
        "price": 19.99,
        "description": "A comfortable cotton T-shirt."
    },

    {
        "id": 2,
        "name": "Jeans",
        "price": 49.99,
        "description": "A pair of high-quality denim jeans."
    },

    {
        "id": 3,
        "name": "Sneakers",
        "price": 79.99,
        "description": "A stylish and comfortable pair of sneakers."
    },

    {
        "id": 4,
        "name": "Sweatshirt",
        "price": 29.99,
        "description": "A cozy and warm sweatshirt for cooler weather."
    },

    {
        "id": 5,
        "name": "Dress",
        "price": 69.99,
        "description": "A beautiful dress for any occasion."
    },

    {
        "id": 6,
        "name": "Jacket",
        "price": 99.99,
        "description": "A durable and stylish jacket for everyday wear."
    },

    {
        "id": 7,
        "name": "Hat",
        "price": 14.99,
        "description": "A trendy and comfortable hat to complete any outfit."
    },

    {
        "id": 8,
        "name": "Skirt",
        "price": 39.99,
        "description": "A versatile and flattering skirt for any season."
    },

    {
        "id": 9,
        "name": "Pants",
        "price": 59.99,
        "description": "A classic pair of pants that are both comfortable and stylish."
    },

    {
        "id": 10,
        "name": "High heels",
        "price": 89.99,
        "description": "A pair of elegant high heels that will add sophistication to any outfit."
    }
]

type older = {
    id: number,
    quantity: number
}
type olders = {
    id: number,
    customer_id: number,
    products: older[]
}

export const olders: olders[] = [
    {
        "id": 1,
        "customer_id": 3,
        "products": [
            { "id": 2, "quantity": 1 },
            { "id": 5, "quantity": 2 }
        ]
    },
    {
        "id": 2,
        "customer_id": 5,
        "products": [
            { "id": 1, "quantity": 2 },
            { "id": 6, "quantity": 1 },
            { "id": 8, "quantity": 3 }
        ]
    },
    {
        "id": 3,
        "customer_id": 2,
        "products": [
            { "id": 4, "quantity": 1 }
        ]
    },
    {
        "id": 4,
        "customer_id": 7,
        "products": [
            { "id": 1, "quantity": 1 },
            { "id": 3, "quantity": 2 },
            { "id": 7, "quantity": 1 }
        ]
    },
    {
        "id": 5,
        "customer_id": 1,
        "products": [
            { "id": 2, "quantity": 2 },
            { "id": 4, "quantity": 1 },
            { "id": 6, "quantity": 1 },
            { "id": 10, "quantity": 1 }
        ]
    },
    {
        "id": 6,
        "customer_id": 8,
        "products": [
            { "id": 3, "quantity": 1 },
            { "id": 5, "quantity": 1 },
            { "id": 7, "quantity": 2 },
            { "id": 9, "quantity": 2 }
        ]
    },
    {
        "id": 7,
        "customer_id": 6,
        "products": [
            { "id": 1, "quantity": 1 },
            { "id": 2, "quantity": 1 },
            { "id": 4, "quantity": 2 },
            { "id": 8, "quantity": 1 },
            { "id": 10, "quantity": 1 }
        ]
    },
    {
        "id": 8,
        "customer_id": 10,
        "products": [
            { "id": 3, "quantity": 1 },
            { "id": 6, "quantity": 1 },
            { "id": 7, "quantity": 1 },
            { "id": 8, "quantity": 2 },
            { "id": 9, "quantity": 1 }
        ]
    },
    {
        "id": 9,
        "customer_id": 4,
        "products": [
            { "id": 2, "quantity": 2 },
            { "id": 4, "quantity": 1 },
            { "id": 5, "quantity": 9 },
            { "id": 6, "quantity": 1 },
            { "id": 9, "quantity": 4 },
            { "id": 2, "quantity": 2 },
            { "id": 4, "quantity": 1 },
            { "id": 6, "quantity": 3 },
            { "id": 10, "quantity": 1 }
        ]
    }
]