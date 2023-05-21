import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

const Description = ({movies}) => {
    let x = useParams();
    console.log('x=',x)
    let filteredArray = movies.filter((el) => el.name == x.name);
    console.log("filteredArray=",filteredArray);
    const navigate=useNavigate()
    
  return (
    <div>
      {filteredArray.map((movie)=>{return( <div><Card>
      <Card.Header as="h5">{movie.name}</Card.Header>
      <Card.Body>
        <Card.Title>{movie.rating}</Card.Title>
        <Card.Text>
        {movie.description}
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate('/')}>GO BACK</Button>
      </Card.Body>
    </Card>
      </div>)
      })}
    </div>
  )
}

export default Description
