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
        let itemReturn: ({ id: number; name: string; price: number; description: string; } | undefined)[] = []
        array.forEach(element => {
            let idForEach: number = element.id
            let objProduct = dataProduct.getFromID(idForEach)

            itemReturn.push(objProduct)

        });

        return itemReturn
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
