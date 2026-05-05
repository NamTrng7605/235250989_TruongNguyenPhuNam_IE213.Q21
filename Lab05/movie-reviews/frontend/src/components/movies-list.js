import React, { useState, useEffect } from 'react';
import MovieDataService from '../services/movies';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const MoviesList = props => {

  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [ratings, setRatings] = useState(["All Ratings"]);

  useEffect(() => {
    retrieveMovies();
    retrieveRatings();
  }, []);

  // Lấy danh sách movie
  const retrieveMovies = () => {
    MovieDataService.getAll()
      .then(response => {
        console.log(response.data);
        setMovies(response.data.movies);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // Lấy danh sách rating
  const retrieveRatings = () => {
    MovieDataService.getRatings()
      .then(response => {
        console.log(response.data);
        setRatings(["All Ratings"].concat(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };

  // Input title
  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  // Input rating
  const onChangeSearchRating = e => {
    const searchRating = e.target.value;
    setSearchRating(searchRating);
  };

  // Search theo title
  const findByTitle = () => {
    MovieDataService.find(searchTitle, "title")
      .then(response => {
        console.log(response.data);
        setMovies(response.data.movies);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // Search theo rating
  const findByRating = () => {

    if (searchRating === "All Ratings") {
      retrieveMovies();
    }
    else {
      MovieDataService.find(searchRating, "rated")
        .then(response => {
          console.log(response.data);
          setMovies(response.data.movies);
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  return (

    <Container className="mt-4">

      {/* Search Form */}
      <Form className="mb-5">

        <Row className="g-3">

          {/* Search Title */}
          <Col md={6}>
            <Form.Group>

              <Form.Control
                type="text"
                placeholder="Search by title"
                value={searchTitle}
                onChange={onChangeSearchTitle}
              />

            </Form.Group>

            <Button
              className="mt-2"
              variant="primary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </Button>
          </Col>

          {/* Search Rating */}
          <Col md={6}>

            <Form.Group>

              <Form.Select
                value={searchRating}
                onChange={onChangeSearchRating}
              >

                {ratings.map((rating, index) => {
                  return (
                    <option value={rating} key={index}>
                      {rating}
                    </option>
                  );
                })}

              </Form.Select>

            </Form.Group>

            <Button
              className="mt-2"
              variant="primary"
              type="button"
              onClick={findByRating}
            >
              Search
            </Button>

          </Col>

        </Row>

      </Form>

      {/* Movie List */}
      <Row className="g-4">

        {movies.map((movie) => {

          return (

            <Col lg={4} md={6} sm={12} key={movie._id}>

              <Card className="h-100 shadow-sm">

                <Card.Img
                  variant="top"
                  src={movie.poster + "/300px400"}
                  style={{
                    height: "450px",
                    objectFit: "cover"
                  }}
                />

                <Card.Body className="d-flex flex-column">

                  <Card.Title>
                    {movie.title}
                  </Card.Title>

                  <Card.Text>
                    <strong>Rating:</strong> {movie.rated}
                  </Card.Text>

                  <Card.Text>
                    {movie.plot}
                  </Card.Text>

                  <div className="mt-auto">

                    <Link to={"/movies/" + movie._id}>
                      <Button variant="outline-primary">
                        View Reviews
                      </Button>
                    </Link>

                  </div>

                </Card.Body>

              </Card>

            </Col>

          );
        })}

      </Row>

    </Container>
  );
};

export default MoviesList;