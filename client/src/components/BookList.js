import React, { Component } from 'react'
import { useQuery, gql } from "@apollo/client";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
{
    books{
        name
        id
    }
}
`



class BookList extends Component {
    displayBooks() {
        let data = this.props.data;
        if(data.loading) {
            return(
                <div className="loading">Loading Books...</div>
            )
        } else {
            return data.books.map(book => {
                return(
                    <li>{ book.name }</li>
                )
            })
        }
    }
  render() {
    return (
        <div>
            <ul id="book-list">
                <li>Book List</li>
            </ul>
        </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList)
