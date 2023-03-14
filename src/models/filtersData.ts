import * as dataBase from "./dataBase"


export const dataProduct = {

    getAll: () => {
        return dataBase.products
    },
    getFromName: (name: string) => {
        return dataBase.products.filter(item =>
            item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1
        );
    },
    getFromID: (id: number) => {
        return dataBase.products.find(function (objeto) {
            return objeto.id === id;
        });
    }


}

export const dataOlders = {
    getAll: () => {
        return dataBase.olders
    },
    getFromID: (id: number) => {
        return dataBase.olders.find(function (objeto) {
            return objeto.id === id;
        });
    },
    getArrayOlders: (array: older[]) => {
        let valueAllOlder = 0
        let itemReturn: showOlder[] = []
        array.forEach(element => {
            const showOlderObj: showOlder = {
                name: "",
                price: 0,
                quantity: 0,
                total: 0
            }


            let idForEach: number = element.id
            let objProduct = dataProduct.getFromID(idForEach)

            let itemName: string = dataProduct.getFromID(idForEach)?.name as string
            let itemPrice: number = dataProduct.getFromID(idForEach)?.price as number;
            let itemQuantity: number = element.quantity as number;
            let itemTotal: number = itemPrice * itemQuantity;

            showOlderObj.name = itemName;
            showOlderObj.price = itemPrice;
            showOlderObj.quantity = itemQuantity;
            showOlderObj.total = itemTotal

            valueAllOlder += itemTotal

            itemReturn.push(showOlderObj)

        });
        return { itemReturn, valueAllOlder }
    }

}

export const dataClient = {

    getAll: () => {
        return dataBase.client
    },
    getFromID: (id: number) => {
        return dataBase.client.find(function (objeto) {
            return objeto.id === id;
        });
    }


}

type older = {
    id: number,
    quantity: number
};
type olders = {
    id: number,
    customer_id: number,
    products: older[]
}
type showOlder = {
    name: string,
    price: number,
    quantity: number,
    total: number
}

