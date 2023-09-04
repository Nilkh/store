import AllCategories from "./AllCategories"
import { getCategories } from "./api"
import React, {useState,useEffect} from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function CategoriesParent() {

    const [category, setCategory] = useState({})

    useEffect(() => {
		getCategories().then((data) => {
				// console.log(data
				
            setCategory(data)
		})
	}, [])
    



	 
	return (
		<Container>
			<Row>
				{Object.values(category).map((item) => {
					console.log(category)
					return <AllCategories category={item} key={item}></AllCategories>
				})}
			</Row>
		</Container>
	)
}
