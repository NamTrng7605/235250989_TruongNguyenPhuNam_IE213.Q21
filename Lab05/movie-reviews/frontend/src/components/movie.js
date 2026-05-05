import React, { useState, useEffect } from 'react';
import MovieDataService from '../services/movies';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

const Movie = props => {
  const [movie, setMovie] = useState({
    id: null,
    title: "",
    rated: "",
    reviews: []
  });
  
  const { id } = useParams()

  const getMovie = id => {
    MovieDataService.get(id)
      .then(response => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getMovie(id);
  }, [id]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Image src={movie.poster + "/100px250"} fluid />
          </Col>
          <Col>
            <Card>
              <Card.Header as="h5">{movie.title}</Card.Header>
              <Card.Body>
                <Card.Text>
                  {movie.plot}
                </Card.Text>
                <Link to={"/movies/" + movie._id + "/review"}>
                  Add Review
                </Link>
              </Card.Body>
            </Card>
            <br></br>
            <h2>Reviews</h2>
            <br>
            {movie.reviews.length > 0 ? (
              movie.reviews.map((review, index) => {
                return (
                  <div key={index} className="mb-3">
                    <h5>
                      {review.name} reviewed on {moment(review.date).format("Do MMMM YYYY")}
                    </h5>
                    <p>{review.review}</p>
                  </div>
                );
              })
            ) : (
              <p>No reviews yet.</p>
            )}
            </br>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movie;
