import React from 'react'
import { ProductData } from './data/practice_data'
import styled from 'styled-components'
const Th = styled.th`
    border: 1px solid #ddd;
    padding: 10px;
  `
const Td = styled.td`
    border: 1px solid #ddd;
    padding: 10px;
`


function FilterAndSortElement() {
    const [products, setProducts] = React.useState(ProductData)
    const [sortingValue, setSortingValue] = React.useState("")

    const sortedProducts = [...products]

    // console.log(sortingValue)
    // // setProducts(sortedProducts)
    // console.log(products)
    if (sortingValue !== "") {
        sortedProducts.sort((a, b) => {
            // console.log(a[sortingValue])
            // if (sortingValue === "brand") {
            if (a[sortingValue] > b[sortingValue]) {
                return 1
            }
            if (a[sortingValue] < b[sortingValue]) {
                return -1
            }

            return 0
        })
        console.log(sortedProducts)

    }
    const mytable = React.useRef()
    // const filterInput = document.querySelector("#filterInput")
    console.log(mytable)
    const filterProduct = (e) => {
        // console.log(e.target.value)
       const tr= mytable.current.getElementsByTagName("tr")
        for (let i = 0; i < tr.length; i++){
            const td = tr[i].getElementsByTagName("td")[0]
            if (td) {
                if (td.innerHTML.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
                    tr[i].style.display = ""
                } else {
                    tr[i].style.display = "none"
                    
                }
            }
        }

    }
    // React.useEffect(() => {

    // },[value,products])
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        }}
        >
            <h1>Filter and Sort Element</h1>
            <div style={{
                display: 'flex',

            }}>
                <select style={{
                    width: '200px',
                    height: '30px',
                }}
                    onChange={(e) => { setSortingValue(e.target.value) }}
                    value={sortingValue}
                >
                    <option value="">Select</option>
                    <option value="product_name">Name</option>
                    <option value="price">Price</option>
                    <option value="brand">Brand</option>

                </select>
                <label htmlFor="filter"
                    style={{
                        marginLeft: "20px",

                    }}
                > Filter

                    <input id="filterInput" type="text"
                        
                        onChange={(e) => {
                            filterProduct(e)
                        }}
                    />
                </label>

            </div>

            <table style={{

                padding: '10px',
                borderCollapse: 'collapse',
            }}
                ref={mytable}>
                <caption>Our products</caption>
                <thead >
                    <tr >
                        <Th >Name</Th>
                        <Th>Price</Th>
                        <Th>In Stock</Th>
                        <Th>Brand</Th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProducts.map((product, index) => (
                        <tr key={index} >
                            <Td >{product.product_name}</Td>
                            <Td>{product.price}</Td>
                            <Td>{product.inStock ? "Yes" : "No"}</Td>
                            <Td>{product.brand}</Td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default FilterAndSortElement