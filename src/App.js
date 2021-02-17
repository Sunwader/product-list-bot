import React, { useState } from 'react';
import { useText, Button, ButtonGroup, Text } from '@urban-bot/core';

const DELETE_PRODUCTS_MODE = 'DELETE_PRODUCTS_MODE';
const COMPLETE_PRODUCTS_MODE = 'COMPLETE_PRODUCTS_MODE';

function ProductList() {
    const [mode, setMode] = React.useState(COMPLETE_PRODUCTS_MODE);
    const [products, setProducts] = useState([]);

    function addProduct(text) {
        const newProduct = { text, id: Math.random(), isCompleted: false };

        setProducts([...products, newProduct]);
    }

    function deleteProduct(deletedId) {
        const newProducts = products.filter(({ id }) => id !== deletedId);

        setProducts(newProducts);
    }

    function toggleProduct(toggledId) {
        const newProducts = products.map((product) => {
            if (product.id === toggledId) {
                return {
                    ...product,
                    isCompleted: !product.isCompleted,
                };
            }

            return product;
        });

        setProducts(newProducts);
    }

    function toggleMode() {
        setMode(mode === DELETE_PRODUCTS_MODE ? COMPLETE_PRODUCTS_MODE : DELETE_PRODUCTS_MODE);
    }

    function clickProduct(id) {
        if (mode === DELETE_PRODUCTS_MODE) {
            deleteProduct(id);
        } else {
            toggleProduct(id);
        }
    }

    useText(({ text }) => {
        addProduct(text);
    });

    if (products.length === 0) {
        return <Text>Твой список покупок сейчас пуст</Text>;
    }

    const title = products.map((product) => (
        <>
            {product.isCompleted ? <s>{product.text}</s> : product.text}
            <br />
        </>
    ));

    const productsButtons = products.map(({ text, id }) => (
        <Button key={id} onClick={() => clickProduct(id)}>
            {text}
        </Button>
    ));

    return (
        <ButtonGroup isResizedKeyboard title={title} maxColumns={1}>
            <Button key={mode} onClick={toggleMode}>
                {mode === DELETE_PRODUCTS_MODE ? 'Режим удаления' : 'Режим выполнения'}
            </Button>
            {productsButtons}
        </ButtonGroup>
    );
}

export function App() {
    return (
        <>
            <Text>Привет! Добавь первый элемент списка</Text>
            <ProductList />
        </>
    );
}
