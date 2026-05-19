import React, { useState, useEffect } from 'react';
import MovieDataService from '../services/movies';
import { Link, useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import moment from 'moment';

const Movie = props => {

  const [movie, setMovie] = useState({
    id: null,
    title: "",
    rated: "",
    plot: "",
    poster: "",
    reviews: []
  });

  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  const getMovie = id => {
    MovieDataService.get(id)
      .then(response => {
        setMovie(response.data);
        setReviews(response.data.reviews || []);
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
    <Container className="mt-4">
      <Row>

        {/* Poster */}
        <Col md={4}>
          <img
            src={movie.poster + "/300px400"}
            alt={movie.title}
            className="img-fluid rounded shadow"
          />
        </Col>

        {/* Movie Info + Reviews */}
        <Col md={8}>

          {/* Movie Info */}
          <Card className="mb-4 shadow-sm">
            <Card.Body>

              <Card.Title className="mb-3">
                {movie.title}
              </Card.Title>

              <Card.Text>
                {movie.plot}
              </Card.Text>

              <Card.Text>
                <strong>Rating:</strong> {movie.rated}
              </Card.Text>

              <Link to={"/movies/" + id + "/review"}>
                <Button variant="primary">
                  Add Review
                </Button>
              </Link>

            </Card.Body>
          </Card>

          <h2 className="mb-3">Reviews</h2>

          {reviews.length > 0 ? (
            reviews.map((review, index) => {
              return (
                <Card className="mb-3 shadow-sm" key={index}>
                  <Card.Body>

                    <Card.Subtitle className="mb-2 text-muted">
                      {review.user} reviewed on{" "}
                      {moment(review.date).format("DD/MM/YYYY")}
                    </Card.Subtitle>

                    <Card.Text>
                      {review.review}
                    </Card.Text>

                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <p>No reviews yet.</p>
          )}

        </Col>
      </Row>
    </Container>
  );
};

export default Movie;